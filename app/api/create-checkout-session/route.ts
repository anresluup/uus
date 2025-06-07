import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST() {
  console.log("=== Checkout Session Creation Started ===")

  try {
    // Log environment variable status (without exposing the actual keys)
    console.log("Environment check:")
    console.log("- STRIPE_SECRET_KEY exists:", !!process.env.STRIPE_SECRET_KEY)
    console.log("- STRIPE_SECRET_KEY starts with sk_:", process.env.STRIPE_SECRET_KEY?.startsWith("sk_"))
    console.log("- NEXT_PUBLIC_SITE_URL:", process.env.NEXT_PUBLIC_SITE_URL)

    // Check if environment variables are set
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("❌ STRIPE_SECRET_KEY is not set")
      return NextResponse.json({ error: "Stripe configuration error" }, { status: 500 })
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      console.error("❌ NEXT_PUBLIC_SITE_URL is not set")
      return NextResponse.json({ error: "Site URL configuration error" }, { status: 500 })
    }

    console.log("✅ Environment variables are set")

    // Initialize Stripe with your secret key
    console.log("Initializing Stripe...")
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })
    console.log("✅ Stripe initialized")

    // Prepare session data
    const sessionData = {
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
            unit_amount: 100, // $1.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment" as const,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
    }

    console.log("Session data prepared:", JSON.stringify(sessionData, null, 2))

    // Create a Checkout Session
    console.log("Creating Stripe checkout session...")
    const session = await stripe.checkout.sessions.create(sessionData)

    console.log("✅ Stripe session created successfully!")
    console.log("Session ID:", session.id)
    console.log("Session URL:", session.url)

    return NextResponse.json({ sessionId: session.id })
  } catch (error: any) {
    console.error("❌ Detailed Stripe error:")
    console.error("Error type:", error.constructor.name)
    console.error("Error message:", error.message)
    console.error("Error code:", error.code)
    console.error("Error type (Stripe):", error.type)
    console.error("Full error:", error)

    // Return more specific error information
    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        details: error.message,
        code: error.code,
        type: error.type,
      },
      { status: 500 },
    )
  }
}
