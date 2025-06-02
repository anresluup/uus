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
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">
            Cheater<span className="text-red-500">Scanner</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#how-it-works" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            {t("nav.howItWorks")}
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            {t("nav.pricing")}
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            {t("nav.faq")}
          </Link>
          <Link href="#" className="text-gray-700 hover:text-red-500 transition-colors duration-300">
            {t("nav.login")}
          </Link>
        </div>

        <div className="flex items-center">
          <Button
            onClick={onScanNowClick}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            {t("nav.scanNow")}
          </Button>

          <div className="md:hidden ml-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.howItWorks")}
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.faq")}
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.login")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
