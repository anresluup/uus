"use client"

import { useEffect, useState } from "react"
import { Loader2, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ScanOverlayProps {
  searchName: string
  searchAge?: string // Added searchAge
  onCancel: () => void
  hasPhoto: boolean
}

const scanSteps = [
  "Initializing secure connection...",
  "Accessing dating platform databases...",
  "Cross-referencing profile data...",
  "Analyzing images with facial recognition (if provided)...",
  "Checking activity logs and location data...",
  "Compiling potential matches...",
  "Finalizing confidential report...",
]

export default function ScanOverlay({ searchName, searchAge, onCancel, hasPhoto }: ScanOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < scanSteps.length - 1) {
          return prevStep + 1
        }
        clearInterval(interval)
        return prevStep
      })
    }, 700) // Adjust timing as needed for the 5-second total

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-lg text-center">
        <Loader2 className="h-12 w-12 text-red-500 animate-spin mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{t("scanOverlay.title")}</h2>

        <div className="bg-gray-50 p-4 rounded-md mb-6 text-left">
          <p className="text-sm text-gray-600">
            <span className="font-medium">{t("scanOverlay.name")}</span> {searchName}
          </p>
          {searchAge && ( // Display age if provided
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">{t("results.age")}</span> {searchAge}
            </p>
          )}
          {hasPhoto && (
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <ShieldCheck size={16} className="mr-1" /> {t("scanOverlay.photo")}
            </p>
          )}
        </div>

        <p className="text-gray-600 mb-2 text-sm">{scanSteps[currentStep]}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-red-500 h-2.5 rounded-full transition-all duration-700 ease-linear"
            style={{ width: `${((currentStep + 1) / scanSteps.length) * 100}%` }}
          ></div>
        </div>

        <p className="text-xs text-gray-500 mb-6">{t("scanOverlay.message")}</p>

        <div className="bg-red-50 border border-red-100 p-3 rounded-md text-xs text-red-700 mb-6">
          {t("scanOverlay.tip")}
        </div>

        <button onClick={onCancel} className="text-sm text-gray-500 hover:text-red-500 transition-colors">
          {t("scanOverlay.cancel")}
        </button>
      </div>
    </div>
  )
}
