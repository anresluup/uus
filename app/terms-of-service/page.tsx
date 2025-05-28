"use client"

import TermsOfService from "@/components/terms-of-service"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <>
      <Header onScanNowClick={() => {}} />
      <TermsOfService />
      <Footer />
    </>
  )
}
