"use client"

import { useLanguage } from "@/contexts/language-context"

export default function FeaturedSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10">{t("featured.title")}</h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
          <img
            src="/forbes-logo-generic.png"
            alt="Forbes"
            className="h-14 md:h-18 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="/techcrunch-logo.png"
            alt="TechCrunch"
            className="h-14 md:h-18 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="/product-hunt-logo.png"
            alt="Product Hunt"
            className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="/wired-logo.png"
            alt="Wired"
            className="h-14 md:h-18 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trustpilot-p20zNrYMsLNW1ZssHjLiw2Xj8PZPwS.webp"
            alt="Trustpilot Excellent 4.5 stars"
            className="h-14 mb-4"
          />
          <p className="text-center text-gray-600 max-w-2xl mx-auto">{t("featured.trustpilot")}</p>
        </div>
      </div>
    </section>
  )
}
