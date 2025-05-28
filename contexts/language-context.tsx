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
  currency: "€",
  setLocale: () => {},
  userLocation: {
    city: "your city",
    country: "your country",
  },
  pricing: {
    price: "2",
    symbol: "€",
    code: "EUR",
    formatted: "€2",
  },
}

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext)

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en")
  const [currency, setCurrency] = useState("€")
  const [userLocation, setUserLocation] = useState({
    city: "your city",
    country: "your country",
  })
  const [pricing, setPricing] = useState({
    price: "2",
    symbol: "€",
    code: "EUR",
    formatted: "€2",
    promotional: {
      originalPrice: "10",
      discountedPrice: "2",
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
          setCurrency("€")
        }

        // Get user location
        const locationData = await getUserLocation()
        setUserLocation({
          city: locationData.city || "Tallinn",
          country: locationData.country || "Estonia",
        })

        // Set pricing based on country
        let currencyData

        // Force EUR for Estonia and other Euro countries
        if (
          locationData.country_code === "EE" ||
          locationData.country_code === "FR" ||
          locationData.country_code === "DE" ||
          locationData.country_code === "IT" ||
          locationData.country_code === "ES" ||
          locationData.country_code === "NL" ||
          locationData.country_code === "BE" ||
          locationData.country_code === "AT" ||
          locationData.country_code === "PT" ||
          locationData.country_code === "GR" ||
          locationData.country_code === "FI" ||
          locationData.country_code === "IE" ||
          locationData.country_code === "LV" ||
          locationData.country_code === "LT" ||
          locationData.country_code === "SK" ||
          locationData.country_code === "SI"
        ) {
          currencyData = {
            price: "2",
            symbol: "€",
            code: "EUR",
            formatted: "€2",
            promotional: {
              originalPrice: "10",
              discountedPrice: "2",
              discountPercentage: 80,
            },
          }
        } else {
          // For other countries, convert from EUR to local currency
          const convertedData = convertCurrency(locationData.country_code)

          // Add promotional pricing (was 5x the current price)
          const originalPrice = (Number.parseFloat(convertedData.price) * 5).toFixed(2)

          currencyData = {
            ...convertedData,
            promotional: {
              originalPrice: originalPrice,
              discountedPrice: convertedData.price,
              discountPercentage: 80,
            },
          }
        }

        setPricing(currencyData)

        // Update currency for backward compatibility
        setCurrency(currencyData.symbol)

        // If location detection worked, use that for language
        if (locationData.country_code === "FR") {
          setLocale("fr" as Locale)
        }
      } catch (error) {
        console.error("Error detecting country:", error)

        // Default to EUR
        setPricing({
          price: "2",
          symbol: "€",
          code: "EUR",
          formatted: "€2",
          promotional: {
            originalPrice: "10",
            discountedPrice: "2",
            discountPercentage: 80,
          },
        })
        setCurrency("€")
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

// Simple currency conversion function
function convertCurrency(countryCode: string) {
  // Default to EUR
  const defaultCurrency = {
    price: "2",
    symbol: "€",
    code: "EUR",
    formatted: "€2",
  }

  // Map of country codes to currency data
  const currencyMap: Record<string, any> = {
    US: { price: "2.18", symbol: "$", code: "USD", formatted: "$2.18" },
    GB: { price: "1.72", symbol: "£", code: "GBP", formatted: "£1.72" },
    CA: { price: "2.96", symbol: "$", code: "CAD", formatted: "$2.96" },
    AU: { price: "3.32", symbol: "$", code: "AUD", formatted: "$3.32" },
    // Add more currencies as needed
  }

  return currencyMap[countryCode] || defaultCurrency
}
