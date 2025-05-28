"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedSection from "@/components/featured-section"
import VideoSection from "@/components/video-section"
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
import PurchasePopup from "@/components/purchase-popup"
import { startScan } from "@/lib/analytics"
import { checkUserSearchStatus, recordSearch } from "@/lib/user-tracking"

export default function Home() {
  const [showScanOverlay, setShowScanOverlay] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showPurchasePopup, setShowPurchasePopup] = useState(false)
  const [searchName, setSearchName] = useState("Andrus Kukks")
  const [searchAge, setSearchAge] = useState("28")
  const [searchSex, setSearchSex] = useState("male")
  const [searchLocation, setSearchLocation] = useState("")
  const [searchPhone, setSearchPhone] = useState("")
  const [searchEmail, setSearchEmail] = useState("")
  const [searchFullName, setSearchFullName] = useState("")
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [blurredPhotoUrl, setBlurredPhotoUrl] = useState<string | null>(null)
  const [hasSearchedBefore, setHasSearchedBefore] = useState(false)
  const router = useRouter()
  const pricingSectionRef = useRef<HTMLDivElement>(null)

  // Check if user has searched before
  useEffect(() => {
    const checkSearchStatus = async () => {
      const hasSearched = await checkUserSearchStatus()
      setHasSearchedBefore(hasSearched)
    }

    checkSearchStatus()
  }, [])

  const scrollToPricing = () => {
    if (pricingSectionRef.current) {
      pricingSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleStartScan = async (
    name?: string,
    age?: string,
    sex?: string,
    location?: string,
    phone?: string,
    email?: string,
    fullName?: string,
  ) => {
    // Check if user has searched before
    const hasSearched = await checkUserSearchStatus()

    // If they've searched before, show purchase popup instead of starting scan
    if (hasSearched) {
      setShowPurchasePopup(true)
      return
    }

    if (name) {
      setSearchName(name)
    }
    if (age) {
      setSearchAge(age)
    }
    if (sex) {
      setSearchSex(sex)
    }
    if (location) {
      setSearchLocation(location)
    }
    if (phone) {
      setSearchPhone(phone)
    }
    if (email) {
      setSearchEmail(email)
    }
    if (fullName) {
      setSearchFullName(fullName)
    }

    setShowScanOverlay(true)

    // Track the start scan event
    startScan()

    // Record that user has searched
    await recordSearch()
    setHasSearchedBefore(true)

    // Simulate scan completion after 20 seconds (longer animation)
    setTimeout(() => {
      setShowScanOverlay(false)
      setShowResults(true)
    }, 20000)
  }

  const handlePhotoUpload = async (file: File, blurredDataUrl?: string) => {
    // Just store the photo and blurred URL, don't start the scan
    setPhotoFile(file)
    if (blurredDataUrl) {
      setBlurredPhotoUrl(blurredDataUrl)
    }

    // Don't start the scan or show results automatically
    // The scan will only start when the user clicks the "Start Scanning" button
  }

  const handleCancelScan = () => {
    setShowScanOverlay(false)
  }

  const handleCloseResults = () => {
    setShowResults(false)
  }

  const handleClosePurchasePopup = () => {
    setShowPurchasePopup(false)
  }

  return (
    <main>
      <Header onScanNowClick={() => handleStartScan()} />
      <HeroSection onStartScan={handleStartScan} onPhotoUpload={handlePhotoUpload} />
      <FeaturedSection />
      <VideoSection />
      <HowItWorksSection />
      <PrivacySection />
      <TrustSection />
      <div ref={pricingSectionRef}>
        <PricingSection />
      </div>
      <TestimonialsSection />
      <FaqSection />
      <CtaSection onStartScan={() => handleStartScan()} />
      <Footer />

      {showScanOverlay && (
        <ScanOverlay
          searchName={searchName}
          searchAge={searchAge}
          searchSex={searchSex}
          searchLocation={searchLocation}
          searchPhone={searchPhone}
          searchEmail={searchEmail}
          searchFullName={searchFullName}
          onCancel={handleCancelScan}
          hasPhoto={!!photoFile}
        />
      )}

      {showResults && (
        <ResultsContainer
          searchName={searchName}
          onClose={handleCloseResults}
          hasPhoto={!!photoFile}
          blurredPhotoUrl={blurredPhotoUrl}
        />
      )}

      {showPurchasePopup && <PurchasePopup onClose={handleClosePurchasePopup} />}
    </main>
  )
}
