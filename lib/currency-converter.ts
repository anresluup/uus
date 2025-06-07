// Currency conversion rates (approximate)
const conversionRates: Record<string, number> = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.36,
  AUD: 1.52,
  INR: 83.0,
  BRL: 5.0,
  MXN: 16.7,
  JPY: 150.0,
  CNY: 7.2,
  RUB: 90.0,
  TRY: 30.0,
  ZAR: 18.0,
}

// Euro countries
const euroCountries = [
  "AT", // Austria
  "BE", // Belgium
  "CY", // Cyprus
  "EE", // Estonia
  "FI", // Finland
  "FR", // France
  "DE", // Germany
  "GR", // Greece
  "IE", // Ireland
  "IT", // Italy
  "LV", // Latvia
  "LT", // Lithuania
  "LU", // Luxembourg
  "MT", // Malta
  "NL", // Netherlands
  "PT", // Portugal
  "SK", // Slovakia
  "SI", // Slovenia
  "ES", // Spain
]

// Get currency code based on country code
export function getCurrencyFromCountry(countryCode: string): string {
  // Force EUR for Estonia and other Euro countries
  if (countryCode === "EE" || euroCountries.includes(countryCode)) {
    return "EUR"
  }

  // Map country codes to currency codes
  const countryCurrencyMap: Record<string, string> = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
    AU: "AUD",
    IN: "INR",
    BR: "BRL",
    MX: "MXN",
    JP: "JPY",
    CN: "CNY",
    RU: "RUB",
    TR: "TRY",
    ZA: "ZAR",
  }

  return countryCurrencyMap[countryCode] || "USD"
}

// Get currency symbol based on currency code
export function getCurrencySymbol(currencyCode: string): string {
  const currencySymbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    CAD: "C$",
    AUD: "A$",
    INR: "₹",
    BRL: "R$",
    MXN: "Mex$",
    JPY: "¥",
    CNY: "¥",
    RUB: "₽",
    TRY: "₺",
    ZAR: "R",
  }

  return currencySymbols[currencyCode] || "$"
}

// Convert price from USD to target currency
export function convertPrice(priceUSD: number, targetCurrency: string): number {
  // Special case for Estonia - always return exact EUR amount
  if (targetCurrency === "EUR") {
    return Math.round(priceUSD * 0.92 * 100) / 100
  }

  const rate = conversionRates[targetCurrency] || 1
  return Math.round(priceUSD * rate * 100) / 100
}

// Format price with currency symbol
export function formatPrice(price: number, currencyCode: string): string {
  const symbol = getCurrencySymbol(currencyCode)
  return `${symbol}${price.toFixed(2)}`
}

// Get promotional pricing if applicable
export function getPromotionalPricing(
  basePrice: number,
  currencyCode: string,
  countryCode: string,
): { originalPrice: string; discountedPrice: string; discountPercentage: string } | null {
  // Countries with promotional pricing
  const promotionalCountries = ["IN", "BR", "MX", "TR", "ZA", "RU"]

  // Add Estonia to promotional countries
  if (countryCode === "EE" || euroCountries.includes(countryCode)) {
    const originalPrice = (basePrice * 1.25).toFixed(2)
    const discountedPrice = basePrice.toFixed(2)
    return {
      originalPrice,
      discountedPrice,
      discountPercentage: "20",
    }
  }

  if (promotionalCountries.includes(countryCode)) {
    const originalPrice = (basePrice * 2.5).toFixed(2)
    const discountedPrice = basePrice.toFixed(2)
    return {
      originalPrice,
      discountedPrice,
      discountPercentage: "60",
    }
  }

  return null
}

const basePrice = 2 // EUR

export function convertCurrency(countryCode: string): {
  price: string
  symbol: string
  code: string
  formatted: string
} {
  const currencyCode = getCurrencyFromCountry(countryCode.toUpperCase())
  const price = convertPrice(basePrice, currencyCode)
  const symbol = getCurrencySymbol(currencyCode)
  const formatted = formatPrice(price, currencyCode)

  return {
    price: price.toFixed(2),
    symbol: symbol,
    code: currencyCode,
    formatted: formatted,
  }
}

// Special promotional pricing for certain countries
export function getPromotionalPrice(countryCode: string): {
  originalPrice: string
  discountedPrice: string
  symbol: string
  code: string
  discountPercentage: number
} {
  const currencyCode = getCurrencyFromCountry(countryCode.toUpperCase())
  const promotionalPricing = getPromotionalPricing(basePrice, currencyCode, countryCode.toUpperCase())

  if (promotionalPricing) {
    const symbol = getCurrencySymbol(currencyCode)
    return {
      originalPrice: promotionalPricing.originalPrice,
      discountedPrice: promotionalPricing.discountedPrice,
      symbol: symbol,
      code: currencyCode,
      discountPercentage: Number.parseInt(promotionalPricing.discountPercentage),
    }
  } else {
    const regular = convertCurrency(countryCode)
    return {
      originalPrice: regular.price,
      discountedPrice: regular.price,
      symbol: regular.symbol,
      code: regular.code,
      discountPercentage: 0,
    }
  }
}
