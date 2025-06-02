"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Lock, Star, StarHalf, Search, User } from "lucide-react" // Added User for age icon
import { startScan as trackStartScan } from "@/lib/analytics" // Renamed to avoid conflict
import { useLanguage } from "@/contexts/language-context"
import PhotoUpload from "./photo-upload"

interface HeroSectionProps {
  onStartScan: (name?: string, age?: string) => void // Added age
  onPhotoUpload: (file: File) => void
}

export default function HeroSection({ onStartScan, onPhotoUpload }: HeroSectionProps) {
  const [searchInput, setSearchInput] = useState("")
  const [ageInput, setAgeInput] = useState("") // New state for age
  const { t } = useLanguage()

  const handleStartScan = () => {
    trackStartScan() // Use renamed import
    onStartScan(searchInput || undefined, ageInput || undefined) // Pass age
  }

  return (
    <section className="hero-gradient text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <Shield className="mr-2" size={16} />
              <span className="text-sm">{t("hero.secure")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("hero.title")}</h1>

            <p className="text-lg mb-8">{t("hero.subtitle")}</p>

            <div className="space-y-4">
              <div className="relative">
                <Input
                  id="searchInput"
                  type="text"
                  placeholder={t("hero.inputPlaceholder")}
                  className="w-full px-5 py-6 rounded-lg text-gray-800 focus:outline-none"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button
                  onClick={handleStartScan}
                  className="absolute right-0 top-0 bottom-0 bg-red-500 hover:bg-red-600 text-white px-4 rounded-tr-lg rounded-br-lg"
                  aria-label="Search by name"
                >
                  <Search size={20} />
                </Button>
              </div>

              {/* Age Input */}
              <div className="relative">
                <Input
                  id="ageInput"
                  type="number"
                  placeholder={t("hero.ageInputPlaceholder")}
                  className="w-full px-5 py-6 rounded-lg text-gray-800 focus:outline-none"
                  value={ageInput}
                  onChange={(e) => setAgeInput(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <User size={20} />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">{t("hero.uploadPhoto")}</h3>
              <div className="bg-red-500/80 backdrop-blur-sm rounded-lg p-4">
                <PhotoUpload onPhotoUpload={onPhotoUpload} />
                <p className="text-xs text-white mt-2 flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  {t("hero.uploadPhotoDesc")}
                </p>
              </div>
            </div>

            <Button
              onClick={handleStartScan}
              className="bg-white text-red-500 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg mt-6 transition-colors duration-300 shadow-md hover:shadow-lg w-full"
            >
              {t("hero.startScan")}
            </Button>

            <div className="flex flex-wrap items-center mt-4 gap-4">
              <div className="flex items-center">
                <Lock className="text-gray-200 mr-2" size={14} />
                <span className="text-sm">{t("hero.secureLabel")}</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-gray-200 mr-2" size={14} />
                <span className="text-sm">{t("hero.encryptedLabel")}</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <StarHalf className="text-yellow-300 mr-2" size={14} />
                </div>
                <span className="text-sm">{t("hero.reviews")}</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <div className="bg-white rounded-lg shadow-lg p-6 text-black">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="bg-red-500 h-10 w-10 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">{t("hero.profileFound")}</h3>
                    <p className="text-sm text-gray-500">{t("hero.activeAgo")}</p>
                  </div>
                </div>
                <div className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("hero.alert")}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-500">{t("hero.location")}</p>
                  <p className="font-medium">{t("hero.milesAway")}</p>

                  <p className="text-sm text-gray-500 mt-3">{t("hero.lastActive")}</p>
                  <p className="font-medium">{t("hero.today")}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t("hero.datingApps")}</p>
                  <p className="font-medium">{t("hero.apps")}</p>

                  <p className="text-sm text-gray-500 mt-3">{t("hero.profileStatus")}</p>
                  <p className="font-medium text-red-500">{t("hero.currentlyActive")}</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" className="text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("hero.viewDetails")}
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("hero.downloadReport")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
