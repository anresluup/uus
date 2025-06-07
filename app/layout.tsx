import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import FacebookPixel from "@/components/facebook-pixel"
import GoogleAnalytics from "@/components/google-analytics"
import Hotjar from "@/components/hotjar"
import { Suspense } from "react"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "CheatScanner AI - Dating App Scanner | Find Out If They're Cheating",
  description:
    "Instantly scan dating apps to discover if your partner is active on Tinder, Bumble, Hinge & more. Get peace of mind with our secure, discreet service.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://gmlkd.ttrk.io/track.js?rtkcmpid=6830a4fb1f9fa9d0d6d533d9" strategy="afterInteractive" />
        {/* Google Ads Conversion Tracking - Direct Implementation */}
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17119826490');
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17119826490" strategy="afterInteractive" />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Suspense fallback={null}>
          <FacebookPixel />
          <GoogleAnalytics />
          <Hotjar />
        </Suspense>
      </body>
    </html>
  )
}
