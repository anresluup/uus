// Utility to get the RedTrack URL with tracking parameters
export const getRedTrackUrl = (): string => {
  if (typeof window === "undefined") {
    return "https://gmlkd.ttrk.io/click"
  }

  // Try to find an existing RedTrack link on the page that has been processed
  const existingRedTrackLink = document.querySelector('a[href*="gmlkd.ttrk.io/click"]') as HTMLAnchorElement

  if (existingRedTrackLink && existingRedTrackLink.href.includes("clickid")) {
    // Store the full URL with parameters
    const fullUrl = existingRedTrackLink.href
    localStorage.setItem("redtrack_url", fullUrl)
    return fullUrl
  }

  // Check if we have a stored URL from previous page load
  const storedUrl = localStorage.getItem("redtrack_url")
  if (storedUrl && storedUrl.includes("clickid")) {
    return storedUrl
  }

  // Fallback to base URL
  return "https://gmlkd.ttrk.io/click"
}

// Function to update all RedTrack links with proper parameters
export const updateRedTrackLinks = (): void => {
  if (typeof window === "undefined") return

  const redTrackUrl = getRedTrackUrl()
  const links = document.querySelectorAll('a[href="https://gmlkd.ttrk.io/click"]')

  links.forEach((link) => {
    ;(link as HTMLAnchorElement).href = redTrackUrl
  })
}
