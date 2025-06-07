"use client"

import { Check, Lock, Shield, AlertTriangle } from "lucide-react"
import { clickPayment } from "@/lib/analytics"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export default function PricingSection() {
  const { pricing } = useLanguage()
  const [countdown, setCountdown] = useState(600)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePaymentClick = () => {
    // Track the payment click event
    clickPayment()
  }

  return (
    <section id="pricing" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Simple, One-time Payment</h2>

        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
              BEST VALUE
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Unlimited Searches</h3>
            <div className="text-center mb-4">
              {pricing.promotional ? (
                <>
                  <div className="bg-yellow-400 text-black text-xs md:text-sm font-bold px-3 py-1 rounded-full inline-block mb-2 animate-pulse">
                    {pricing.promotional.discountPercentage}% OFF - LIMITED TIME!
                  </div>
                  <div className="text-xl md:text-2xl text-gray-500 line-through">
                    {pricing.symbol}
                    {pricing.promotional.originalPrice}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-red-500">
                    {pricing.symbol}
                    {pricing.promotional.discountedPrice}
                  </div>
                </>
              ) : (
                <div className="text-4xl md:text-5xl font-black text-red-500">{pricing.formatted}</div>
              )}
              <div className="text-red-600 font-bold mt-2 flex items-center justify-center text-sm">
                <AlertTriangle size={16} className="mr-1" />
                Offer expires in: {formatTime(countdown)}
              </div>
            </div>
            <p className="text-gray-500 mb-6 text-sm md:text-base">One-time payment, unlimited searches forever</p>

            <ul className="text-left space-y-3 mb-8 text-sm md:text-base">
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>Unlimited profile searches</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>Complete contact information</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>Location history and activity</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>All social media profiles</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span>Downloadable PDF reports</span>
              </li>
            </ul>

            <a
              href="https://gmlkd.ttrk.io/click"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black py-4 px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center text-base md:text-lg transform hover:scale-105"
              onClick={handlePaymentClick}
            >
              GET UNLIMITED SEARCHES NOW →
            </a>

            <div className="flex justify-center space-x-4 mt-6">
              <div className="flex items-center text-xs text-gray-500">
                <Lock className="mr-1" size={12} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Shield className="mr-1" size={12} />
                <span>100% Discreet</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-3">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trustpilot-p20zNrYMsLNW1ZssHjLiw2Xj8PZPwS.webp"
                    alt="Trustpilot Excellent 4.5 stars"
                    className="h-12 md:h-14"
                  />
                </div>
                <p className="text-xs md:text-sm text-gray-500 mb-4">Trusted by thousands of users worldwide</p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  <div className="bg-gray-50 border border-gray-100 rounded-md px-2 py-1.5 md:px-3 md:py-2 flex items-center">
                    <Shield className="text-gray-500 mr-1 md:mr-2" size={14} />
                    <span className="text-xs font-medium">SSL Secure</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-md px-2 py-1.5 md:px-3 md:py-2 flex items-center">
                    <Lock className="text-gray-500 mr-1 md:mr-2" size={14} />
                    <span className="text-xs font-medium">256-bit Encryption</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-md px-2 py-1.5 md:px-3 md:py-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500 mr-1 md:mr-2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span className="text-xs font-medium">GDPR Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
