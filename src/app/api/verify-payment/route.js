import crypto from "crypto";
import connectDB from "@/lib/mongodb";
import Order from "@/lib/schemas/order";

export async function POST(req) {
  try {
    const body = await req.json();

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, user } = body;

    // 1. Validate Payload
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return Response.json(
        { success: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    // 2. Verify Signature
    const generated = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isValid = crypto.timingSafeEqual(
      Buffer.from(generated),
      Buffer.from(razorpay_signature)
    );

    if (!isValid) {
      return Response.json(
        { success: false, error: "Signature verification failed" },
        { status: 400 }
      );
    }

    // 3. Connect to DB and Save Order
    try {
      await connectDB();
      
      const newOrder = await Order.create({
        name: user?.name || "Not Provided",
        email: user?.email || "Not Provided",
        phone: user?.phone || "Not Provided",
        amount: 499,
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        status: "success",
      });

      console.log("Order saved successfully:", newOrder._id);
      return Response.json({ success: true, orderId: newOrder._id });

    } catch (dbError) {
      console.error("Database Error:", dbError);
      return Response.json(
        { success: false, error: "Payment verified but database failed to save order" },
        { status: 500 }
      );
    }

  } catch (err) {
    console.error("Payment Verification Error:", err);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}