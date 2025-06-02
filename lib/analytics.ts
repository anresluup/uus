// Facebook Pixel tracking
export const FB_PIXEL_ID = "1714670962505422"

// Track page view
export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView")

    // Also track with Google Analytics
    if (window.gtag) {
      window.gtag("event", "page_view")
    }
  }
}

// Track start scan
export const startScan = () => {
  if (typeof window !== "undefined") {
    // Facebook Pixel
    if (window.fbq) {
      window.fbq("track", "StartScan")
      console.log("FB Pixel: StartScan event tracked")
    }

    // Google Analytics
    if (window.gtag) {
      window.gtag("event", "start_scan", {
        event_category: "engagement",
        event_label: "User started a scan",
      })
      console.log("GA: start_scan event tracked")
    }
  }
}

// Track payment CTA clicks
export const clickPayment = () => {
  console.log("Payment button clicked")
  // Facebook Pixel
  if (typeof window !== "undefined") {
    if (window.fbq) {
      window.fbq("track", "InitiateCheckout")
      console.log("FB Pixel: InitiateCheckout event tracked")
    }

    // Google Analytics
    if (window.gtag) {
      window.gtag("event", "begin_checkout", {
        event_category: "conversion",
        event_label: "User clicked payment CTA",
      })
      console.log("GA: begin_checkout event tracked")
    }
  }
}

// Declare global window interface
declare global {
  interface Window {
    fbq: any
    gtag: any
    dataLayer: any
  }
}
