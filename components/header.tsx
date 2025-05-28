"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface HeaderProps {
  onScanNowClick: () => void
}

export default function Header({ onScanNowClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">
            Cheater<span className="text-red-500">Scanner</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            How It Works
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            FAQ
          </Link>
          <Link href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            Login
          </Link>
        </div>

        <div className="flex items-center">
          <Button
            onClick={onScanNowClick}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Scan Now
          </Button>

          <div className="md:hidden ml-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu with improved styling */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-50">
          <div className="flex flex-col space-y-5">
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
