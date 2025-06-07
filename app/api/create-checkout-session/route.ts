import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST() {
  try {
    // Check if environment variables are set
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is not set")
      return NextResponse.json({ error: "Stripe configuration error" }, { status: 500 })
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      console.error("NEXT_PUBLIC_SITE_URL is not set")
      return NextResponse.json({ error: "Site URL configuration error" }, { status: 500 })
    }

    // Initialize Stripe with your secret key
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })

    console.log("Creating Stripe checkout session...")

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Unlimited Dating Profile Searches",
              description: "One-time payment for unlimited profile searches",
              images: [`${process.env.NEXT_PUBLIC_SITE_URL}/profile-card.png`],
            },
            unit_amount: 50, // $0.50 in cents (minimum for live payments)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
    })

    console.log("Stripe session created successfully:", session.id)
    return NextResponse.json({ sessionId: session.id })
  } catch (error: any) {
    console.error("Detailed Stripe error:", error)
    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
