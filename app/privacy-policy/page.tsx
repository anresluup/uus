"use client"

import PrivacyPolicy from "@/components/privacy-policy"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header onScanNowClick={() => {}} />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}
