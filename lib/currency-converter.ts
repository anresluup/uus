// Simple $1.00 USD pricing everywhere
const basePrice = 1.0 // USD

export function convertCurrency(countryCode: string): {
  price: string
  symbol: string
  code: string
  formatted: string
} {
  return {
    price: "1.00",
    symbol: "$",
    code: "USD",
    formatted: "$1.00",
  }
}

// Promotional pricing - was $5.00, now $1.00 (80% off)
export function getPromotionalPrice(countryCode: string): {
  originalPrice: string
  discountedPrice: string
  symbol: string
  code: string
  discountPercentage: number
} {
  return {
    originalPrice: "5.00",
    discountedPrice: "1.00",
    symbol: "$",
    code: "USD",
    discountPercentage: 80,
  }
}

// Legacy functions for compatibility
export function getCurrencyFromCountry(countryCode: string): string {
  return "USD"
}

export function getCurrencySymbol(currencyCode: string): string {
  return "$"
}

export function convertPrice(priceUSD: number, targetCurrency: string): number {
  return 1.0
}

export function formatPrice(price: number, currencyCode: string): string {
  return "$1.00"
}
