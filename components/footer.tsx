"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">CheatScanner</h3>
            <p className="text-gray-400 max-w-xs">
              Providing peace of mind through technology and transparency in relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact-us" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white transition-colors">
                    Report Issues
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy#cookies" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy#gdpr" className="hover:text-white transition-colors">
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <p className="text-sm mb-4 sm:mb-0">© {new Date().getFullYear()} CheatScanner. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Contact us:{" "}
              <a href="mailto:support@cheatscanner.com" className="text-blue-400 hover:text-blue-300">
                support@cheatscanner.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
