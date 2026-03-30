import Razorpay from "razorpay";

export async function POST() {
  try {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return Response.json(
        { error: "Missing Razorpay keys" },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: 49900,
      currency: "INR",
    });

    return Response.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });

  } catch (error) {
    console.error("RAZORPAY ERROR:", error);

    return Response.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}