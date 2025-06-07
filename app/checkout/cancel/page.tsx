"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-center mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 text-center mb-6">
          Your payment was cancelled. No charges were made to your account.
        </p>
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
          <p className="text-amber-800 text-sm">
            You're missing out on unlimited profile searches! For just $0.20, you can unlock all features and search as
            many profiles as you want.
          </p>
        </div>
        <Link
          href="/"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  )
}
