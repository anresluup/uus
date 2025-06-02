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
            <p className="text-gray-400 max-w-xs">{t("footer.desc")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    {t("footer.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-white">
                    {t("footer.howItWorks")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">
                    {t("footer.terms")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.support")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact-us" className="hover:text-white">
                    {t("footer.contactUs")}
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white">
                    {t("footer.faq")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white">
                    {t("footer.helpCenter")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white">
                    {t("footer.reportIssues")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.legal")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    {t("footer.privacyPolicy2")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">
                    {t("footer.terms2")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy#cookies" className="hover:text-white">
                    {t("footer.cookiePolicy")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy#gdpr" className="hover:text-white">
                    {t("footer.gdpr")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col items-center justify-between">
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-gray-400 mb-1">SCANNER JVLA OÜ</p>
            <p className="text-xs text-gray-500">
              Business location
              <br />
              Järve küla 15-24 Järve, Ida-Virumaa, 30331, Estonia
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CheatScanner. {t("footer.rights")}
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
