"use client"

import Link from "next/link"
import { XCircle } from "lucide-react"

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <XCircle className="mx-auto h-16 w-16 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Payment Cancelled</h2>
          <p className="mt-2 text-lg text-gray-600">
            Your payment process was cancelled. You can try again if you wish.
          </p>
        </div>

        <div className="mt-5">
          <p className="text-md text-gray-500">
            Your access has not been upgraded. If you encountered an issue, please try again or contact support.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition-colors"
          >
            Return to Homepage
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
