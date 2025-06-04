"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Search,
  MapPin,
  CheckCircle,
  User,
  AlertCircle,
  Info,
  Eye,
  Download,
  Lock,
  Unlock,
  Clock,
  X,
} from "lucide-react"
import { clickPayment } from "@/lib/analytics"
import { useLanguage } from "@/contexts/language-context"

interface ResultsContainerProps {
  searchName: string
  searchAge?: string
  onClose: () => void
  hasPhoto?: boolean
}

export default function ResultsContainer({ searchName, searchAge, onClose, hasPhoto }: ResultsContainerProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const { t, currency, paymentLink, userLocation } = useLanguage()

  const handleUnlockClick = () => {
    clickPayment()
  }

  const formatLocationText = (text: string) => {
    return text.replace("{city}", userLocation.city)
  }

  const displayAge = (baseAge?: string) => {
    if (!baseAge) return "N/A"
    const ageNum = Number.parseInt(baseAge, 10)
    if (isNaN(ageNum)) return baseAge
    return `${ageNum} years old`
  }
  const displayAgeVariation = (baseAge?: string) => {
    if (!baseAge) return "N/A"
    const ageNum = Number.parseInt(baseAge, 10)
    if (isNaN(ageNum)) return baseAge
    return `${ageNum + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3)} years old`
  }

  const scrollToPayment = () => {
    const paymentSection = document.getElementById("payment-section")
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#f5f1e8] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
        <div className="p-6">
          {/* Header */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-[#e8e0d0]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-[#dc2626] h-12 w-12 rounded-full flex items-center justify-center text-white">
                  <Search size={24} />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {t("results.title")} <span className="text-[#dc2626] text-3xl">{searchName}</span>
                    {searchAge && (
                      <span className="text-gray-600 text-xl ml-2">
                        ({t("results.ageLabel")} {searchAge})
                      </span>
                    )}
                  </h2>
                  <div className="flex items-center mt-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                    <MapPin className="mr-2" size={14} />
                    {t("results.location")} {userLocation.city}
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-[#dc2626] transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="bg-[#fef3f2] border border-[#fecaca] rounded-lg p-4 flex items-center">
              <AlertCircle size={20} className="text-[#dc2626] mr-3" />
              <div className="text-[#dc2626]">
                {t("results.found")} <span className="font-bold">{t("results.activeProfiles")}</span>{" "}
                {t("results.matching")}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">{t("results.appsSearched")}</div>
                <div className="font-semibold text-gray-800">{t("results.platforms")}</div>
                <div className="flex items-center justify-center mt-1 text-green-600 text-sm">
                  <CheckCircle size={14} className="mr-1" /> {t("results.scanComplete")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">{t("results.recentActivity")}</div>
                <div className="font-semibold text-gray-800">{t("results.today")}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">{t("results.locationActivity")}</div>
                <div className="font-semibold text-gray-800">{t("results.within")}</div>
              </div>
            </div>
          </div>

          {/* Primary Match */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-[#e8e0d0]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="bg-[#dc2626] bg-opacity-10 text-[#dc2626] h-12 w-12 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-xl">{searchName}</h4>
                  <p className="text-gray-600">{displayAge(searchAge)}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="mr-1 text-[#dc2626]" size={14} />
                    <span className="mr-2">{userLocation.city}</span>
                    <span>•</span>
                    <span className="ml-2">5 km away</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#dc2626] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                <AlertCircle size={12} className="mr-1" />
                {t("results.highMatch")}
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-600 font-medium">{t("results.active")}</span>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">{t("results.datingApps")}</p>
                <p className="font-semibold text-gray-800">{t("results.apps")}</p>
                <div className="text-xs text-gray-500 mt-1">{t("results.others")}</div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{t("results.confidence")}</p>
                <p className="font-semibold text-gray-800">{t("results.match")}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-[#dc2626] h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>

            {/* Blurred Personal Information */}
            <div className="relative bg-gray-50 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 blur-sm">
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.email")}</div>
                  <div className="bg-gray-200 h-4 rounded"></div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.phone")}</div>
                  <div className="bg-gray-200 h-4 rounded"></div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.address")}</div>
                  <div className="text-sm">
                    {userLocation.city}, {userLocation.country_code}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.age")}</div>
                  <div className="text-sm">{searchAge ? `${searchAge} years old` : "N/A"}</div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg">
                <div className="text-center">
                  <Lock size={32} className="text-[#dc2626] mx-auto mb-2" />
                  <div className="font-semibold text-gray-800 mb-2">{t("results.locked")}</div>
                  <a
                    href={paymentLink}
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center gap-2"
                    onClick={handleUnlockClick}
                  >
                    <Unlock size={16} />
                    {t("results.unlock")}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={scrollToPayment}
                className="flex-1 border-[#e8e0d0] hover:bg-[#f5f1e8]"
              >
                <Eye className="mr-2" size={16} /> {t("results.viewDetails")}
              </Button>
              <Button className="flex-1 bg-[#22c55e] hover:bg-[#16a34a] text-white">
                <Download className="mr-2" size={16} /> {t("results.basicReport")}
              </Button>
            </div>
          </div>

          {/* Second Match */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-[#e8e0d0]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-600 h-12 w-12 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-xl">{searchName}</h4>
                  <p className="text-gray-600">{displayAgeVariation(searchAge)}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="mr-1" size={14} />
                    <span className="mr-2">{userLocation.city}</span>
                    <span>•</span>
                    <span className="ml-2">20 miles away</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                <Info size={12} className="mr-1" />
                {t("results.basicMatch")}
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-yellow-600 font-medium">{t("results.activeYesterday")}</span>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">{t("results.datingApps")}</p>
                <p className="font-semibold text-gray-800">{t("results.apps")}</p>
                <div className="text-xs text-gray-500 mt-1">{t("results.others")}</div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{t("results.confidence")}</p>
                <p className="font-semibold text-gray-800">30% match</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>

            {/* Blurred Personal Information */}
            <div className="relative bg-gray-50 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 blur-sm">
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.email")}</div>
                  <div className="bg-gray-200 h-4 rounded"></div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.phone")}</div>
                  <div className="bg-gray-200 h-4 rounded"></div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.address")}</div>
                  <div className="text-sm">
                    {userLocation.city}, {userLocation.country_code}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{t("results.age")}</div>
                  <div className="text-sm">
                    {searchAge
                      ? `${Number.parseInt(searchAge, 10) + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2)} years old`
                      : "N/A"}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg">
                <div className="text-center">
                  <Lock size={32} className="text-[#dc2626] mx-auto mb-2" />
                  <div className="font-semibold text-gray-800 mb-2">{t("results.locked")}</div>
                  <a
                    href={paymentLink}
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center gap-2"
                    onClick={handleUnlockClick}
                  >
                    <Unlock size={16} />
                    {t("results.unlock")}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={scrollToPayment}
                className="flex-1 border-[#e8e0d0] hover:bg-[#f5f1e8]"
              >
                <Eye className="mr-2" size={16} /> {t("results.viewDetails")}
              </Button>
              <Button className="flex-1 bg-[#22c55e] hover:bg-[#16a34a] text-white">
                <Download className="mr-2" size={16} /> {t("results.basicReport")}
              </Button>
            </div>
          </div>

          {/* Unlock Panel */}
          <div id="payment-section" className="bg-white rounded-lg p-8 shadow-sm border border-[#e8e0d0]">
            <div className="text-center mb-6">
              <div className="bg-[#dc2626] bg-opacity-10 h-16 w-16 rounded-full flex items-center justify-center text-[#dc2626] mx-auto mb-4">
                <Lock size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t("results.accessDetails")}</h3>
              <p className="text-gray-600">{t("results.oneTime")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature1")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature2")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature3")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature4")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature5")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature6")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature7")}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#22c55e] mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">{t("results.feature8")}</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-[#dc2626] mb-2">{t("pricing.price")}</div>
              <div className="text-gray-600">{t("results.oneTime")}</div>
            </div>

            <div className="text-center mb-8">
              <a
                href={paymentLink}
                className="inline-flex items-center justify-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl text-lg"
                onClick={handleUnlockClick}
              >
                <Unlock size={20} />
                {t("results.unlock")}
              </a>
            </div>

            {/* Security badges with provided icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="flex items-center bg-[#f5f1e8] px-4 py-2 rounded-lg border border-[#e8e0d0]">
                <img src="/secure-icon-2.png" alt="SSL Secure" className="w-8 h-8 mr-2" />
                <span className="text-sm font-medium text-gray-700">{t("results.securePayment")}</span>
              </div>
              <div className="flex items-center bg-[#f5f1e8] px-4 py-2 rounded-lg border border-[#e8e0d0]">
                <img src="/secure-icon-3.png" alt="Encrypted" className="w-8 h-8 mr-2" />
                <span className="text-sm font-medium text-gray-700">{t("results.encrypted")}</span>
              </div>
              <div className="flex items-center bg-[#f5f1e8] px-4 py-2 rounded-lg border border-[#e8e0d0]">
                <img src="/satisfaction-icon.png" alt="100% Satisfaction" className="w-8 h-8 mr-2" />
                <span className="text-sm font-medium text-gray-700">100% Satisfaction</span>
              </div>
              <div className="flex items-center bg-[#f5f1e8] px-4 py-2 rounded-lg border border-[#e8e0d0]">
                <img src="/cs-icon.png" alt="Customer Service" className="w-8 h-8 mr-2" />
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center text-[#dc2626] text-sm font-medium">
                <Clock size={16} className="mr-2" />
                {t("results.countdown")}
              </div>
            </div>
          </div>

          {/* Users Viewing */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center bg-[#fef3f2] border border-[#fecaca] text-[#dc2626] px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-[#dc2626] rounded-full mr-2 animate-pulse"></div>
              <span>{formatLocationText(t("results.viewing"))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
