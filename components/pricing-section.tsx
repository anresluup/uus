"use client"

import { Check, Lock, Shield } from "lucide-react"
import { clickPayment } from "@/lib/analytics"
import { useLanguage } from "@/contexts/language-context"

export default function PricingSection() {
  const { t, currency } = useLanguage()

  const handlePaymentClick = () => {
    clickPayment()
  }

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">{t("pricing.title")}</h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
              {t("pricing.bestValue")}
            </div>
            <h3 className="text-2xl font-bold mb-2">{t("pricing.lifetime")}</h3>
            <div className="text-4xl font-bold text-red-500 mb-4">
              {currency}1.99 {/* Updated price */}
            </div>
            <p className="text-gray-500 mb-6">{t("pricing.subtitle")}</p>

            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={18} />
                <span>{t("pricing.feature1")}</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={18} />
                <span>{t("pricing.feature2")}</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={18} />
                <span>{t("pricing.feature3")}</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={18} />
                <span>{t("pricing.feature4")}</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3" size={18} />
                <span>{t("pricing.feature5")}</span>
              </li>
            </ul>

            <a
              href="https://tmpc.trackmyprizecard.com/aff_c?offer_id=89361&aff_id=2049&aff_sub=ss1"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center justify-center"
              onClick={handlePaymentClick}
            >
              {t("pricing.cta")}
            </a>

            <div className="flex justify-center space-x-4 mt-6">
              <div className="flex items-center text-xs text-gray-500">
                <Lock className="mr-1" size={12} />
                <span>{t("pricing.secure")}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Shield className="mr-1" size={12} />
                <span>{t("pricing.discreet")}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-3">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trustpilot-p20zNrYMsLNW1ZssHjLiw2Xj8PZPwS.webp"
                    alt="Trustpilot Excellent 4.5 stars"
                    className="h-14"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-4">{t("pricing.trusted")}</p>
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                  <div className="bg-gray-50 border border-gray-100 rounded-md px-3 py-2 flex items-center">
                    <Shield className="text-gray-500 mr-2" size={16} />
                    <span className="text-xs font-medium">{t("pricing.ssl")}</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-md px-3 py-2 flex items-center">
                    <Lock className="text-gray-500 mr-2" size={16} />
                    <span className="text-xs font-medium">{t("pricing.encryption")}</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-md px-3 py-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500 mr-2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span className="text-xs font-medium">{t("pricing.gdpr")}</span>
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
