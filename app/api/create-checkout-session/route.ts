import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(req: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Unlimited Searches Pass",
              description: "One-time payment for unlimited dating profile searches",
            },
            unit_amount: 20, // $0.20 in cents (changed from 500)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    })

    return NextResponse.json({ id: session.id })
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return new NextResponse(error.message || "Internal Server Error", { status: 500 })
  }
}
