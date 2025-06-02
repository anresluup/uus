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
import { startScan as trackStartScanAnalytics } from "@/lib/analytics" // Renamed for clarity

export default function Home() {
  const [showScanOverlay, setShowScanOverlay] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [searchName, setSearchName] = useState("Tarvo Suur") // Default or from previous state
  const [searchAge, setSearchAge] = useState("") // New state for age
  const [photoFile, setPhotoFile] = useState<File | null>(null)

  const handleStartScan = (name?: string, age?: string) => {
    // Added age parameter
    if (name) {
      setSearchName(name)
    }
    if (age) {
      setSearchAge(age)
    }
    setShowScanOverlay(true)

    trackStartScanAnalytics()

    setTimeout(() => {
      setShowScanOverlay(false)
      setShowResults(true)
    }, 5000)
  }

  const handlePhotoUpload = (file: File) => {
    setPhotoFile(file)
    // Optionally, you could trigger a scan immediately after photo upload
    // For now, it just sets the file, scan is triggered by button
  }

  const handleCancelScan = () => {
    setShowScanOverlay(false)
  }

  const handleCloseResults = () => {
    setShowResults(false)
  }

  return (
    <main>
      <Header onScanNowClick={() => handleStartScan(searchName, searchAge)} /> {/* Pass current name/age */}
      <HeroSection onStartScan={handleStartScan} onPhotoUpload={handlePhotoUpload} />
      <FeaturedSection />
      <HowItWorksSection />
      <PrivacySection />
      <TrustSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection onStartScan={() => handleStartScan(searchName, searchAge)} /> {/* Pass current name/age */}
      <Footer />
      {showScanOverlay && (
        <ScanOverlay
          searchName={searchName}
          searchAge={searchAge} // Pass age
          onCancel={handleCancelScan}
          hasPhoto={!!photoFile}
        />
      )}
      {showResults && (
        <ResultsContainer
          searchName={searchName}
          searchAge={searchAge} // Pass age
          onClose={handleCloseResults}
        />
      )}
    </main>
  )
}
