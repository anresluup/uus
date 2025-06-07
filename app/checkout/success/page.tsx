"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [isLoading, setIsLoading] = useState(true)
  const [customerEmail, setCustomerEmail] = useState("")

  useEffect(() => {
    // In a real app, you might want to verify the payment was successful
    // by checking the session status with your backend
    // This is just a simple simulation
    const timer = setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would get this from the Stripe session
      setCustomerEmail("customer@example.com")
    }, 1500)

    return () => clearTimeout(timer)
  }, [sessionId])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 border-4 border-t-green-500 border-gray-200 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Confirming your payment...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-3">
                <Check className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">Payment Successful!</h1>
            <p className="text-gray-600 text-center mb-6">
              Thank you for your purchase. You now have unlimited access to all profile searches.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium mb-2">Order Summary</h3>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Unlimited Searches:</span>
                <span className="font-medium">$0.20</span>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span>$0.20</span>
              </div>
            </div>
            {customerEmail && (
              <p className="text-sm text-gray-500 mb-6 text-center">A receipt has been sent to {customerEmail}</p>
            )}
            <Link
              href="/"
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Continue Searching <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
