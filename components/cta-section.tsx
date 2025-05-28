"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useLanguage()

  return (
    <section className="bg-red-500 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("Ready to Discover the Truth?")}</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Join thousands of people who have found peace of mind by uncovering the truth about their relationships.",
            )}
          </p>
          <div className="relative inline-block">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg md:text-xl px-8 py-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:w-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex flex-wrap justify-center items-center gap-1 sm:gap-2">
                <span className="text-sm sm:text-base md:text-lg">
                  {t("START SCANNING NOW")} - {t("ONLY")}
                </span>{" "}
                <span className="relative inline-flex items-center">
                  <span className="line-through opacity-70 text-xs sm:text-sm">€10</span>
                  <span className="absolute -top-4 -right-2 transform text-xs bg-red-600 text-white px-1 rounded">
                    -80%
                  </span>
                </span>{" "}
                <span className="font-extrabold text-base sm:text-lg md:text-xl">€2</span>
              </span>
            </Button>
            {isHovered && (
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 rounded-lg blur opacity-75 animate-pulse"></div>
            )}
          </div>
          <div className="flex justify-center mt-6 space-x-6">
            <div className="flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{t("Secure")}</span>
            </div>
            <div className="flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{t("Encrypted")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
