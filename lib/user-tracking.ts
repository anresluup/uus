// Store for tracking user searches by IP
const userSearches: Record<string, number> = {}

// Check if a user has already searched
export const hasUserSearched = (ip: string): boolean => {
  return userSearches[ip] !== undefined && userSearches[ip] > 0
}

// Record a user search
export const recordUserSearch = (ip: string): void => {
  if (userSearches[ip] === undefined) {
    userSearches[ip] = 1
  } else {
    userSearches[ip]++
  }
}

// Get user IP address
export const getUserIP = async (): Promise<string> => {
  try {
    // Try to get IP from ipify API
    const response = await fetch("https://api.ipify.org?format=json")
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.error("Error fetching IP:", error)
    // Fallback to a random ID if IP detection fails
    return `user-${Math.random().toString(36).substring(2, 15)}`
  }
}

// Check if user has searched before (using localStorage as backup)
export const checkUserSearchStatus = async (): Promise<boolean> => {
  // Try to get from localStorage first (for returning visitors)
  if (typeof window !== "undefined") {
    const hasSearched = localStorage.getItem("hasSearched")
    if (hasSearched === "true") {
      return true
    }
  }

  // Then check server-side tracking
  const ip = await getUserIP()
  return hasUserSearched(ip)
}

// Record that user has searched
export const recordSearch = async (): Promise<void> => {
  // Record in localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("hasSearched", "true")
  }

  // Record server-side
  const ip = await getUserIP()
  recordUserSearch(ip)
}
