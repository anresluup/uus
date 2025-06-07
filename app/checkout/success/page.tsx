"use client"

import Link from "next/link"
import { useEffect } from "react"
import { CheckCircle } from "lucide-react"
// You might want to track successful purchases with analytics
// import { trackPurchase } from '@/lib/analytics'; // Assuming you have such a function

export default function CheckoutSuccessPage() {
  useEffect(() => {
    // Example: Track successful purchase
    // const urlParams = new URLSearchParams(window.location.search);
    // const sessionId = urlParams.get('session_id');
    // if (sessionId) {
    //   trackPurchase({ sessionId, amount: 5.00, currency: 'USD' });
    // }

    // Clear any cart or reset search limits if applicable
    // For example, if you stored a 'hasSearchedBefore' flag in localStorage, reset it
    localStorage.removeItem("hasSearchedBefore") // Or a more specific flag
    console.log("User has successfully paid. Search limits can be reset.")
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Payment Successful!</h2>
          <p className="mt-2 text-lg text-gray-600">Thank you for your purchase. You now have unlimited searches.</p>
        </div>

        <div className="mt-5">
          <p className="text-md text-gray-500">
            Your access has been upgraded. You can now perform unlimited searches.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition-colors"
          >
            Start Searching Now
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          If you have any questions, please{" "}
          <Link href="/contact-us" className="font-medium text-red-500 hover:text-red-400">
            contact support
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
