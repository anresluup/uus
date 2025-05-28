// Facebook Pixel tracking
export const FB_PIXEL_ID_1 = "1714670962505422"
export const FB_PIXEL_ID_2 = "1874575683085527"

// Track page view
export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    // Track for both pixels
    window.fbq("trackSingle", FB_PIXEL_ID_1, "PageView")
    window.fbq("trackSingle", FB_PIXEL_ID_2, "PageView")

    // Also track with Google Analytics
    if (window.gtag) {
      window.gtag("event", "page_view")
    }
  }
}

// Track start scan
export const startScan = () => {
  if (typeof window !== "undefined") {
    // Facebook Pixel - both pixels
    if (window.fbq) {
      window.fbq("trackSingle", FB_PIXEL_ID_1, "StartScan")
      window.fbq("trackSingle", FB_PIXEL_ID_2, "StartScan")
      console.log("FB Pixels: StartScan event tracked for both pixels")
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
  if (typeof window !== "undefined") {
    // Facebook Pixel - both pixels
    if (window.fbq) {
      window.fbq("trackSingle", FB_PIXEL_ID_1, "InitiateCheckout")
      window.fbq("trackSingle", FB_PIXEL_ID_2, "InitiateCheckout")
      console.log("FB Pixels: InitiateCheckout event tracked for both pixels")
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
