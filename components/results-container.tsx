"use client"

import { useState } from "react"
import { Search, MapPin, CheckCircle, User, AlertCircle, Lock, Unlock, Clock, Shield, X } from "lucide-react"
import { clickPayment } from "@/lib/analytics"
import { useLanguage } from "@/contexts/language-context"

interface ResultsContainerProps {
  searchName: string
  searchAge?: string // Added searchAge
  onClose: () => void
  // hasPhoto prop is not used here, can be removed if not needed by parent logic for this component
}

export default function ResultsContainer({ searchName, searchAge, onClose }: ResultsContainerProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null) // Not currently used, but kept from original
  const { t, currency, userLocation } = useLanguage()

  const handleUnlockClick = () => {
    clickPayment()
  }

  const formatLocationText = (text: string) => {
    return text.replace("{city}", userLocation.city)
  }

  const unlockPrice = `${currency}1.99`

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl my-8">
        {/* Header */}
        <div className="result-header p-4 md:p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="bg-red-500 h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-white mr-3">
                <Search size={18} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  {t("results.title")} <span className="text-red-500">{searchName}</span>
                </h2>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md text-sm flex items-center mb-4">
            <AlertCircle size={18} className="mr-2 flex-shrink-0" />
            <span>
              {t("results.found")} <span className="font-semibold">{t("results.activeProfiles")}</span>{" "}
              {t("results.matching")}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="text-gray-500">{t("results.appsSearched")}</p>
              <p className="font-medium text-gray-700">{t("results.platforms")}</p>
              <div className="flex items-center text-green-600 mt-0.5">
                <CheckCircle size={12} className="mr-1" /> {t("results.scanComplete")}
              </div>
            </div>
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="text-gray-500">{t("results.recentActivity")}</p>
              <p className="font-medium text-gray-700">{t("results.today")}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="text-gray-500">{t("results.locationActivity")}</p>
              <p className="font-medium text-gray-700">{t("results.within")}</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Primary Match */}
          <div className="result-card premium border border-red-200 rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="profile-icon bg-red-100 text-red-500 p-2 rounded-full mr-3">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{searchName}</h4>
                  {searchAge && ( // Display age if provided
                    <p className="text-sm text-gray-600">{searchAge} years old</p>
                  )}
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="mr-1 text-red-500" size={14} />
                    <span>
                      {userLocation.city}, {userLocation.country}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                <AlertCircle size={12} className="mr-1" />
                {t("results.highMatch")}
              </div>
            </div>

            <div className="activity-indicator online my-3 text-sm text-green-600 flex items-center">
              <div className="activity-dot online w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
              {t("results.active")}
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <div>
                <p className="text-gray-500 text-xs">{t("results.datingApps")}</p>
                <p className="font-medium text-gray-700">{t("results.apps")}</p>
                <p className="text-xs text-gray-400">{t("results.others")}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">{t("results.confidence")}</p>
                <p className="font-medium text-gray-700">{t("results.match")}</p>
                <div className="match-confidence bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="match-confidence-bar bg-red-500 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>

            {/* Blurred Personal Information */}
            <div className="personal-info-section relative border-t border-gray-200 pt-4">
              <div className="personal-info-blur space-y-2">
                <div className="text-xs text-gray-500">{t("results.email")}</div>
                <div className="bg-gray-200 h-5 rounded blur-sm w-3/4"></div>
                <div className="text-xs text-gray-500 mt-1">{t("results.phone")}</div>
                <div className="bg-gray-200 h-5 rounded blur-sm w-1/2"></div>
                <div className="text-xs text-gray-500 mt-1">{t("results.address")}</div>
                <div className="bg-gray-200 h-5 rounded blur-sm w-full"></div>
                <div className="text-xs text-gray-500 mt-1">{t("results.age")}</div>
                <div className="bg-gray-200 h-5 rounded blur-sm w-1/3"></div>

                <p className="text-xs text-gray-500 pt-2">{t("results.photos")}</p>
                <div className="flex gap-2">
                  <div className="w-16 h-16 bg-gray-200 rounded-md blur-sm"></div>
                  <div className="w-16 h-16 bg-gray-200 rounded-md blur-sm"></div>
                  <div className="w-16 h-16 bg-gray-200 rounded-md blur-sm"></div>
                </div>
              </div>

              <div className="absolute inset-0 bg-white/80 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4 rounded-b-lg">
                <Lock size={28} className="text-red-500 mb-2" />
                <p className="font-semibold text-gray-700 mb-1">{t("results.locked")}</p>
                <p className="text-xs text-gray-500 mb-3">Unlock to view full details and all photos.</p>
                <a
                  href="https://tmpc.trackmyprizecard.com/aff_c?offer_id=89361&aff_id=2049&aff_sub=ss1"
                  className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-semibold"
                  onClick={handleUnlockClick}
                >
                  <Unlock size={16} />
                  {t("results.unlock", { price: unlockPrice })}
                </a>
              </div>
            </div>
          </div>

          {/* Unlock Panel */}
          <div id="payment-section" className="unlock-panel bg-gray-50 p-4 md:p-6 rounded-lg text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center text-red-500">
                <Lock size={24} />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{t("results.accessDetails")}</h3>
            <p className="text-gray-600 text-sm mb-4">{t("results.oneTime")}</p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-left text-sm text-gray-700 mb-4 max-w-xs mx-auto">
              {[
                t("results.feature1"),
                t("results.feature2"),
                t("results.feature3"),
                t("results.feature4"),
                t("results.feature5"),
                t("results.feature6"),
                t("results.feature7"),
                t("results.feature8"),
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-red-500 mr-1.5 flex-shrink-0" size={14} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-3xl md:text-4xl font-extrabold text-red-500 my-3">{unlockPrice}</div>

            <a
              href="https://tmpc.trackmyprizecard.com/aff_c?offer_id=89361&aff_id=2049&aff_sub=ss1"
              className="unlock-cta flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg w-full max-w-xs mx-auto text-base"
              onClick={handleUnlockClick}
            >
              <Unlock size={18} />
              {t("results.unlock", { price: unlockPrice })}
            </a>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-gray-500 mt-4">
              <div className="flex items-center">
                <Lock size={12} className="mr-1" />
                {t("results.securePayment")}
              </div>
              <div className="flex items-center">
                <Shield size={12} className="mr-1" />
                {t("results.encrypted")}
              </div>
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                {t("results.lifetimeAccess")}
              </div>
            </div>

            <div className="text-xs text-red-600 mt-3 flex items-center justify-center">
              <Clock size={12} className="mr-1" />
              {t("results.countdown")}
            </div>
          </div>

          <div className="users-viewing text-xs text-gray-500 text-center mt-4 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
            <span>{formatLocationText(t("results.viewing", { count: Math.floor(Math.random() * 5) + 5 }))}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
