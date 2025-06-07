"use client"

import { useState } from "react"
import { X, Check, Shield, Lock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { clickPayment } from "@/lib/analytics"
import { getRedTrackUrl } from "@/lib/redtrack-url"

interface PurchasePopupProps {
  onClose: () => void
}

export default function PurchasePopup({ onClose }: PurchasePopupProps) {
  const { pricing } = useLanguage()
  const [redTrackUrl] = useState(getRedTrackUrl())

  const handlePaymentClick = () => {
    clickPayment()
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-red-500 text-white p-6 rounded-t-xl">
          <h2 className="text-2xl font-bold mb-2">Unlock Unlimited Searches</h2>
          <p className="text-sm">You've reached your free search limit</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
            <p className="text-amber-800 font-medium">
              To continue searching and access all features, please purchase our premium pass.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4 text-center">One-time Payment of {pricing.formatted}</h3>

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
              <span>Lifetime access with no recurring fees</span>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
              <span>Downloadable PDF reports</span>
            </div>
          </div>

          <a
            href={redTrackUrl}
            className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center mb-4"
            onClick={handlePaymentClick}
          >
            UNLOCK UNLIMITED SEARCHES
          </a>

          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center text-xs text-gray-500">
              <Shield className="mr-1" size={12} />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Lock className="mr-1" size={12} />
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
