// Simple $0.50 USD pricing everywhere - meets Stripe minimum
const basePrice = 0.5 // USD (changed to meet Stripe minimum)

export function convertCurrency(countryCode: string): {
  price: string
  symbol: string
  code: string
  formatted: string
} {
  return {
    price: "0.50",
    symbol: "$",
    code: "USD",
    formatted: "$0.50",
  }
}

// Promotional pricing - was $2.00, now $0.50 (75% off)
export function getPromotionalPrice(countryCode: string): {
  originalPrice: string
  discountedPrice: string
  symbol: string
  code: string
  discountPercentage: number
} {
  return {
    originalPrice: "2.00",
    discountedPrice: "0.50",
    symbol: "$",
    code: "USD",
    discountPercentage: 75,
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
  return 0.5
}

export function formatPrice(price: number, currencyCode: string): string {
  return "$0.50"
}
