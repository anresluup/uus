// Simple $5 USD pricing everywhere - no currency conversion
const basePrice = 5 // USD

export function convertCurrency(countryCode: string): {
  price: string
  symbol: string
  code: string
  formatted: string
} {
  return {
    price: "5.00",
    symbol: "$",
    code: "USD",
    formatted: "$5.00",
  }
}

// Promotional pricing - was $25, now $5 (80% off)
export function getPromotionalPrice(countryCode: string): {
  originalPrice: string
  discountedPrice: string
  symbol: string
  code: string
  discountPercentage: number
} {
  return {
    originalPrice: "25.00",
    discountedPrice: "5.00",
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
  return 5.0
}

export function formatPrice(price: number, currencyCode: string): string {
  return "$5.00"
}
