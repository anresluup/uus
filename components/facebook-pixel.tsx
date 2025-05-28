"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"

export const FB_PIXEL_ID_1 = "1714670962505422"
export const FB_PIXEL_ID_2 = "1874575683085527"

export default function FacebookPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view on route change for both pixels
    if (pathname && window.fbq) {
      window.fbq("trackSingle", FB_PIXEL_ID_1, "PageView")
      window.fbq("trackSingle", FB_PIXEL_ID_2, "PageView")
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Meta Pixel Code - First Pixel */}
      <Script id="facebook-pixel-1" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID_1}');
          fbq('init', '${FB_PIXEL_ID_2}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID_1}&ev=PageView&noscript=1`}
          alt=""
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID_2}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
