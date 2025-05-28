// Cache for location data to avoid multiple API calls
let locationCache: any = null

interface LocationData {
  ip: string
  city: string
  region: string
  country: string
  country_code: string
  latitude: number
  longitude: number
}

export async function getUserLocation(): Promise<LocationData> {
  // Return cached data if available
  if (locationCache) {
    return locationCache
  }

  try {
    const response = await fetch("https://ipapi.co/json/")

    if (!response.ok) {
      throw new Error("Failed to fetch location data")
    }

    const data = await response.json()

    // Cache the result
    locationCache = data

    return data
  } catch (error) {
    console.error("Error fetching location:", error)

    // Return default values if location detection fails
    return {
      ip: "0.0.0.0",
      city: "your city",
      region: "your region",
      country: "your country",
      country_code: "",
      latitude: 0,
      longitude: 0,
    }
  }
}
