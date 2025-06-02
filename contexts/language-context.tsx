"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, translations } from "@/lib/translations"
import { getUserLocation } from "@/lib/geo-location"

type LanguageContextType = {
  locale: Locale
  t: (key: string) => string
  currency: string
  paymentLink: string
  setLocale: (locale: Locale) => void
  userLocation: {
    city: string
    country: string
  }
}

const defaultLanguageContext: LanguageContextType = {
  locale: "en",
  t: (key: string) => key,
  currency: "£",
  paymentLink: "https://tmpc.trackmyprizecard.com/aff_c?offer_id=89361&aff_id=2049&aff_sub=ss2",
  setLocale: () => {},
  userLocation: {
    city: "your city",
    country: "your country",
  },
}

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext)

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en")
  const [currency, setCurrency] = useState("£")
  const [paymentLink, setPaymentLink] = useState(
    "https://tmpc.trackmyprizecard.com/aff_c?offer_id=89361&aff_id=2049&aff_sub=ss2",
  )
  const [userLocation, setUserLocation] = useState({
    city: "your city",
    country: "your country",
  })

  useEffect(() => {
    // Try to detect user's country from browser
    const detectCountry = async () => {
      try {
        // First try to use the navigator.language
        const browserLang = navigator.language.split("-")[0].toLowerCase()
        if (browserLang === "fr") {
          setLocale("fr")
          setCurrency("€")
          setPaymentLink("https://www.craftybyte42.com/22B69BC/2G6JLLWJ/?sub1=tind1")
        } else if (browserLang === "tr") {
          setLocale("tr")
          setCurrency("TRY")
        }

        // Get user location
        const locationData = await getUserLocation()
        setUserLocation({
          city: locationData.city,
          country: locationData.country,
        })

        // If location detection worked, use that for language
        if (locationData.country_code === "FR") {
          setLocale("fr")
          setCurrency("€")
          setPaymentLink("https://www.craftybyte42.com/22B69BC/2G6JLLWJ/?sub1=tind1")
        } else if (locationData.country_code === "TR") {
          setLocale("tr")
          setCurrency("TRY")
        } else if (locationData.country_code === "NZ") {
          setCurrency("NZD")
          setPaymentLink("https://www.craftybyte42.com/22B69BC/2K4J4XG5/?sub1=nz-tn-1")
        } else if (locationData.country_code === "TR") {
          setLocale("tr")
          setCurrency("TRY")
          setPaymentLink("https://tmpc.trackmyprizecard.com/aff_c?offer_id=89361&aff_id=2049&aff_sub=ss2")
        }
      } catch (error) {
        console.error("Error detecting country:", error)
      }
    }

    detectCountry()
  }, [])

  const t = (key: string): string => {
    // Handle New Zealand specific pricing
    if (currency === "NZD") {
      if (key === "pricing.price") return "$4 NZD"
      if (key === "results.unlock") return "Unlock for $4 NZD"
    }

    return translations[locale][key] || key
  }

  return (
    <LanguageContext.Provider value={{ locale, t, currency, paymentLink, setLocale, userLocation }}>
      {children}
    </LanguageContext.Provider>
  )
}
