"use client"

import { useEffect, useState } from "react"

export default function FeaturedSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("featured-section")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id="featured-section"
      className={`py-12 bg-white transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured in Leading Publications</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-24 md:w-32 h-auto grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/forbes-logo-generic.png" alt="Forbes" className="w-full h-auto" />
          </div>
          <div className="w-24 md:w-32 h-auto grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/techcrunch-logo.png" alt="TechCrunch" className="w-full h-auto" />
          </div>
          <div className="w-24 md:w-32 h-auto grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/wired-logo.png" alt="Wired" className="w-full h-auto" />
          </div>
          <div className="w-24 md:w-32 h-auto grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/product-hunt-logo.png" alt="Product Hunt" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
