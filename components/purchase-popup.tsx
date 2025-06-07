"use client"

import { useState } from "react"
import { X, Check, Shield, Lock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { clickPayment } from "@/lib/analytics"
// Import loadStripe
import { loadStripe } from "@stripe/stripe-js"

interface PurchasePopupProps {
  onClose: () => void
}

// Initialize Stripe.js with your publishable key
// Ensure NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set in your environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function PurchasePopup({ onClose }: PurchasePopupProps) {
  const { pricing } = useLanguage() // This will now always be $5.00 USD
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePaymentClick = async () => {
    setIsLoading(true)
    setError(null)
    clickPayment() // Analytics

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const sessionData = await response.json()

      if (response.ok && sessionData.sessionId) {
        const stripe = await stripePromise
        if (stripe) {
          const { error: stripeError } = await stripe.redirectToCheckout({
            sessionId: sessionData.sessionId,
          })
          if (stripeError) {
            console.error("Stripe redirection error:", stripeError)
            setError(stripeError.message || "Failed to redirect to Stripe.")
          }
        } else {
          setError("Stripe.js failed to load.")
        }
      } else {
        console.error("Failed to create checkout session:", sessionData.error)
        setError(sessionData.error || "Failed to create checkout session.")
      }
    } catch (err) {
      console.error("Payment processing error:", err)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
          disabled={isLoading}
        >
          <X size={24} />
        </button>

        <div className="bg-red-500 text-white p-6 rounded-t-xl">
          <h2 className="text-2xl font-bold mb-2">Unlock Unlimited Searches</h2>
          <p className="text-sm">You've reached your free search limit</p>
        </div>

        <div className="p-6">
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
            <p className="text-amber-800 font-medium">
              To continue searching and access all features, please purchase our premium pass.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4 text-center">One-time Payment of $5.00 USD</h3>

          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <span>Unlimited searches across all dating platforms</span>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <span>Full profile details and contact information</span>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <span>Access to all social media profiles</span>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <span>One-time payment for unlimited searches</span>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <span>Downloadable PDF reports</span>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <button
            onClick={handlePaymentClick}
            disabled={isLoading}
            className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center mb-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "UNLOCK UNLIMITED SEARCHES FOR $5.00"}
          </button>

          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center text-xs text-gray-500">
              <Shield className="mr-1" size={12} />
              <span>Secure Payment by Stripe</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Lock className="mr-1" size={12} />
              <span>Unlimited Searches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
