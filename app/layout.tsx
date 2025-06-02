import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

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
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {/* <Suspense fallback={null}> */}
        {/*   <FacebookPixel /> */}
        {/*   <GoogleAnalytics /> */}
        {/*   <Hotjar /> */}
        {/* </Suspense> */}
      </body>
    </html>
  )
}
