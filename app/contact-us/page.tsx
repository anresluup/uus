"use client"

import ContactUs from "@/components/contact-us"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactUsPage() {
  return (
    <>
      <Header onScanNowClick={() => {}} />
      <ContactUs />
      <Footer />
    </>
  )
}
