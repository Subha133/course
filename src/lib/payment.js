"use client";

// Shared utility to load the Razorpay checkout script
export const loadRazorpayScript = () => {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
    document.body.appendChild(script);
  });
};

/**
 * Enhanced payment handler to be used across the application.
 * @param {Object} params
 * @param {Object} params.user - User details { name, email, phone }
 * @param {number} params.amount - Payment amount
 * @param {Function} params.setLoading - Function to set UI loading state
 * @param {Function} params.onSuccess - Callback for successful payment
 * @param {Function} params.onError - Callback for payment failure
 */
export const handleBuyNow = async ({
  user,
  amount = 499,
  setLoading = () => {},
  onSuccess = () => {},
  onError = () => {},
}) => {
  try {
    setLoading(true);

    // 1. Load Razorpay script
    const res = await    loadRazorpayScript();
    if (!res) {
      throw new Error("Razorpay SDK failed to load. Are you online?");
    }

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      throw new Error("Razorpay key missing");
    }

    // 2. Create order on backend
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) throw new Error("Order creation failed");
    const order = await response.json();

    // 3. Open Razorpay Checkout Modal
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Doctor Branding Masterclass",
      description: "Course Enrollment & Lifetime Access",
      order_id: order.id,
      handler: async function (response) {
        // 4. Verify payment on backend
        try {
          const verifyResponse = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              user,
              amount: order.amount, 
            }),
          });
          const result = await verifyResponse.json();

          if (result.success) {
            onSuccess(result);
          } else {
            throw new Error("Signature verification failed.");
          }
        } catch (err) {
          console.error("Verification Error:", err);
          onError("Payment processed, but verification failed. Support will contact you.");
        } finally {
          setLoading(false);
        }
      },
      prefill: {
        name: user?.name || "",
        email: user?.email || "",
        contact: user?.phone || "",
      },
      theme: { color: "#2563eb" },
      modal: {
        ondismiss: () => setLoading(false),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment Failed:", response.error);
      onError(response.error.description || "Payment failed.");
      setLoading(false);
    });
    rzp.open();
  } catch (error) {
    console.error("Payment setup error:", error);
    onError(error.message || "Something went wrong. Please check your connection.");
    setLoading(false);
  }
};
