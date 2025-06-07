"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, translations } from "@/lib/translations"
import { getUserLocation } from "@/lib/geo-location"

type LanguageContextType = {
  locale: Locale
  t: (key: string) => string
  currency: string
  setLocale: (locale: Locale) => void
  userLocation: {
    city: string
    country: string
  }
  pricing: {
    price: string
    symbol: string
    code: string
    formatted: string
    promotional?: {
      originalPrice: string
      discountedPrice: string
      discountPercentage: number
    }
  }
}

const defaultLanguageContext: LanguageContextType = {
  locale: "en",
  t: (key: string) => key,
  currency: "$",
  setLocale: () => {},
  userLocation: {
    city: "your city",
    country: "your country",
  },
  pricing: {
    price: "5.00",
    symbol: "$",
    code: "USD",
    formatted: "$5.00",
    promotional: {
      originalPrice: "25.00",
      discountedPrice: "5.00",
      discountPercentage: 80,
    },
  },
}

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext)

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en")
  const [currency, setCurrency] = useState("$")
  const [userLocation, setUserLocation] = useState({
    city: "your city",
    country: "your country",
  })
  const [pricing, setPricing] = useState({
    price: "5.00",
    symbol: "$",
    code: "USD",
    formatted: "$5.00",
    promotional: {
      originalPrice: "25.00",
      discountedPrice: "5.00",
      discountPercentage: 80,
    },
  })

  useEffect(() => {
    // Try to detect user's country from browser
    const detectCountry = async () => {
      try {
        // First try to use the navigator.language
        const browserLang = navigator.language.split("-")[0].toLowerCase()
        if (browserLang === "fr") {
          setLocale("fr" as Locale)
          setCurrency("$")
        }

        // Get user location
        const locationData = await getUserLocation()
        setUserLocation({
          city: locationData.city || "Tallinn",
          country: locationData.country || "Estonia",
        })

        // Set pricing to always be $5 USD
        setPricing({
          price: "5.00",
          symbol: "$",
          code: "USD",
          formatted: "$5.00",
          promotional: {
            originalPrice: "25.00",
            discountedPrice: "5.00",
            discountPercentage: 80,
          },
        })
        setCurrency("$")

        // If location detection worked, use that for language
        if (locationData.country_code === "FR") {
          setLocale("fr" as Locale)
        }
      } catch (error) {
        console.error("Error detecting country:", error)

        // Default to USD
        setPricing({
          price: "5.00",
          symbol: "$",
          code: "USD",
          formatted: "$5.00",
          promotional: {
            originalPrice: "25.00",
            discountedPrice: "5.00",
            discountPercentage: 80,
          },
        })
        setCurrency("$")
      }
    }

    detectCountry()
  }, [])

  const t = (key: string): string => {
    try {
      // Split the key by dots to access nested properties
      const keys = key.split(".")
      let result = translations[locale]

      // Navigate through the nested properties
      for (const k of keys) {
        if (result && k in result) {
          result = result[k]
        } else {
          // If key not found in current locale, try English
          let fallback = translations.en
          for (const fk of keys) {
            if (fallback && fk in fallback) {
              fallback = fallback[fk]
            } else {
              return key // Key not found in any language
            }
          }
          return typeof fallback === "string" ? fallback : key
        }
      }

      return typeof result === "string" ? result : key
    } catch (error) {
      console.error("Translation error:", error)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, t, currency, setLocale, userLocation, pricing }}>
      {children}
    </LanguageContext.Provider>
  )
}
