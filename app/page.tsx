"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedSection from "@/components/featured-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PrivacySection from "@/components/privacy-section"
import TrustSection from "@/components/trust-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import ScanOverlay from "@/components/scan-overlay"
import ResultsContainer from "@/components/results-container"
import { startScan as trackStartScan } from "@/lib/analytics" // Renamed to avoid conflict

export default function Home() {
  const [showScanOverlay, setShowScanOverlay] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [searchName, setSearchName] = useState("Tarvo Suur")
  const [searchAge, setSearchAge] = useState<string | undefined>(undefined)
  const [photoFile, setPhotoFile] = useState<File | null>(null)

  const handleStartScan = (name?: string, age?: string) => {
    setSearchName(name || "Tarvo Suur") // Default if name is empty
    setSearchAge(age || undefined)
    setShowScanOverlay(true)

    // Track the start scan event
    trackStartScan()

    // Simulate scan completion after 5 seconds
    setTimeout(() => {
      setShowScanOverlay(false)
      setShowResults(true)
    }, 5000)
  }

  const handlePhotoUpload = (file: File) => {
    setPhotoFile(file)
  }

  const handleCancelScan = () => {
    setShowScanOverlay(false)
  }

  const handleCloseResults = () => {
    setShowResults(false)
  }

  return (
    <>
      {!showResults && (
        <main>
          <Header onScanNowClick={() => handleStartScan()} />
          <HeroSection onStartScan={handleStartScan} onPhotoUpload={handlePhotoUpload} />
          <FeaturedSection />
          <HowItWorksSection />
          <PrivacySection />
          <TrustSection />
          <PricingSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaSection onStartScan={() => handleStartScan()} />
          <Footer />
        </main>
      )}

      {showScanOverlay && (
        <ScanOverlay searchName={searchName} searchAge={searchAge} onCancel={handleCancelScan} hasPhoto={!!photoFile} />
      )}

      {showResults && (
        <ResultsContainer
          searchName={searchName}
          searchAge={searchAge}
          onClose={handleCloseResults}
          hasPhoto={!!photoFile}
        />
      )}
    </>
  )
}
