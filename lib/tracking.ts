// Enhanced tracking that combines all tracking methods
export const trackUserInteraction = (
  element: HTMLElement,
  interactionType: "click" | "hover" | "focus" | "input",
  metadata: Record<string, any> = {},
) => {
  if (typeof window === "undefined") return

  // Track with Google Analytics
  if (window.gtag) {
    window.gtag("event", `element_${interactionType}`, {
      event_category: "user_interaction",
      event_label: element.id || element.className || "unnamed_element",
      ...metadata,
    })
  }

  // If Hotjar is available, record this as a custom event
  if (window.hj) {
    window.hj("event", `element_${interactionType}`, {
      ...metadata,
    })
  }
}

// Track form interactions in detail
export const trackFormInteraction = (
  formElement: HTMLFormElement,
  interactionType: "start" | "field_change" | "submit" | "abandon",
  metadata: Record<string, any> = {},
) => {
  if (typeof window === "undefined") return

  // Track with Google Analytics
  if (window.gtag) {
    window.gtag("event", `form_${interactionType}`, {
      event_category: "form_interaction",
      event_label: formElement.id || formElement.name || "unnamed_form",
      ...metadata,
    })
  }

  // If Hotjar is available, record this as a custom event
  if (window.hj) {
    window.hj("event", `form_${interactionType}`, {
      ...metadata,
    })
  }
}

// Track specific areas of interest for heatmaps
export const identifyHeatmapArea = (elementId: string, areaName: string) => {
  if (typeof window === "undefined") return

  // If Hotjar is available, tag this element for heatmap analysis
  if (window.hj) {
    const element = document.getElementById(elementId)
    if (element) {
      element.setAttribute("data-hj-heatmap-area", areaName)
    }
  }
}

// Update the global window interface
declare global {
  interface Window {
    fbq: any
    gtag: any
    dataLayer: any
    hj: any
    _hjSettings: any
  }
}
