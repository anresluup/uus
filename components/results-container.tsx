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
  Shield,
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
  const { t, currency, userLocation } = useLanguage()

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
    <div className="results-container">
      <div className="results-content">
        <div className="result-header">
          <div className="search-summary">
            <div className="bg-red-500 h-10 w-10 rounded-full flex items-center justify-center text-white">
              <Search size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {t("results.title")} <span className="text-red-500 text-3xl">{searchName}</span>
                {searchAge && (
                  <span className="text-gray-600 text-xl ml-2">
                    ({t("results.ageLabel")} {searchAge})
                  </span>
                )}
              </h2>
              <div className="location-match-tag mt-2">
                <MapPin className="mr-2" size={14} />
                {t("results.location")} {userLocation.city}
              </div>
            </div>
          </div>

          <div className="search-insight">
            <AlertCircle size={20} />
            <div className="search-insight-text ml-2">
              {t("results.found")} <span className="search-insight-bold">{t("results.activeProfiles")}</span>{" "}
              {t("results.matching")}
            </div>
          </div>

          <div className="match-details-grid">
            <div className="match-detail-item">
              <div className="text-sm text-gray-500">{t("results.appsSearched")}</div>
              <div className="font-medium">{t("results.platforms")}</div>
              <div className="dating-apps-scanned mt-1 flex items-center text-green-600">
                <CheckCircle size={14} className="mr-1" /> {t("results.scanComplete")}
              </div>
            </div>
            <div className="match-detail-item">
              <div className="text-sm text-gray-500">{t("results.recentActivity")}</div>
              <div className="font-medium">{t("results.today")}</div>
            </div>
            <div className="match-detail-item">
              <div className="text-sm text-gray-500">{t("results.locationActivity")}</div>
              <div className="font-medium">{t("results.within")}</div>
            </div>
          </div>
        </div>

        {/* Primary Match */}
        <div className="result-card premium">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="profile-icon bg-red-100 text-red-500">
                <User size={20} />
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-dark text-xl">{searchName}</h4>
                <p className="text-sm text-gray-600">{displayAge(searchAge)}</p>
                <div className="flex items-center mt-1">
                  <MapPin className="mr-1 text-red-500" size={14} />
                  <span className="text-sm mr-2">{userLocation.city}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm ml-2">5 km away</span>
                </div>
              </div>
            </div>
            <div className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center">
              <AlertCircle size={12} className="mr-1" />
              {t("results.highMatch")}
            </div>
          </div>

          <div className="mt-4 activity-indicator online">
            <div className="activity-dot online"></div>
            {t("results.active")}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-500">{t("results.datingApps")}</p>
              <p className="font-medium">{t("results.apps")}</p>
              <div className="apps-plus-more">{t("results.others")}</div>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t("results.confidence")}</p>
              <p className="font-medium">{t("results.match")}</p>
              <div className="match-confidence">
                <div className="match-confidence-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>

          {/* Blurred Personal Information */}
          <div className="personal-info-section mt-4">
            <div className="personal-info-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.email")}</div>
                  <div className="blurred-info-value bg-gray-200 h-5 rounded blur-sm">
                    <span className="invisible">andrus.kukk@example.com</span>
                  </div>
                </div>
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.phone")}</div>
                  <div className="blurred-info-value bg-gray-200 h-5 rounded blur-sm">
                    <span className="invisible">+372 5123 4567</span>
                  </div>
                </div>
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.address")}</div>
                  <div className="blurred-info-value">
                    <span>
                      {userLocation.city}, {userLocation.country_code}
                    </span>
                  </div>
                </div>
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.age")}</div>
                  <div className="blurred-info-value">
                    <span>{searchAge ? `${searchAge} years old` : "N/A"}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4 mb-2">{t("results.photos")}</p>
              <div className="flex gap-2">
                <div className="w-20 h-20 bg-gray-200 rounded-md blur-sm"></div>
                <div className="w-20 h-20 bg-gray-200 rounded-md blur-sm"></div>
                <div className="w-20 h-20 bg-gray-200 rounded-md blur-sm"></div>
              </div>
            </div>

            <div className="personal-info-lock">
              <Lock size={24} />
              <div className="personal-info-lock-text">{t("results.locked")}</div>
              <a
                href="https://www.google.com"
                className="mt-2 bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 py-2 px-4 rounded-lg text-sm"
                onClick={handleUnlockClick}
              >
                <Unlock size={16} />
                {t("results.unlock")}
              </a>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={scrollToPayment} className="text-sm">
              <Eye className="mr-1" size={16} /> {t("results.viewDetails")}
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm">
              <Download className="mr-1" size={16} /> {t("results.basicReport")}
            </Button>
          </div>
        </div>

        {/* Second Match */}
        <div className="result-card basic">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="profile-icon bg-blue-100 text-blue-500">
                <User size={20} />
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-dark text-xl">{searchName}</h4>
                <p className="text-sm text-gray-600">{displayAgeVariation(searchAge)}</p>
                <div className="flex items-center mt-1">
                  <MapPin className="mr-1 text-gray-500" size={14} />
                  <span className="text-sm mr-2">{userLocation.city}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm ml-2">20 miles away</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center">
              <Info size={12} className="mr-1" />
              {t("results.basicMatch")}
            </div>
          </div>

          <div className="mt-4 activity-indicator recent">
            <div className="activity-dot recent"></div>
            {t("results.activeYesterday")}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-500">{t("results.datingApps")}</p>
              <p className="font-medium">{t("results.apps")}</p>
              <div className="apps-plus-more">{t("results.others")}</div>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t("results.confidence")}</p>
              <p className="font-medium">30% match</p>
              <div className="match-confidence">
                <div className="match-confidence-bar" style={{ width: "30%" }}></div>
              </div>
            </div>
          </div>

          {/* Blurred Personal Information */}
          <div className="personal-info-section mt-4">
            <div className="personal-info-blur">
              <div className="grid grid-cols-2 gap-4">
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.email")}</div>
                  <div className="blurred-info-value bg-gray-200 h-5 rounded blur-sm">
                    <span className="invisible">andrus.k@gmail.com</span>
                  </div>
                </div>
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.phone")}</div>
                  <div className="blurred-info-value bg-gray-200 h-5 rounded blur-sm">
                    <span className="invisible">+372 5987 6543</span>
                  </div>
                </div>
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.address")}</div>
                  <div className="blurred-info-value">
                    <span>
                      {userLocation.city}, {userLocation.country_code}
                    </span>
                  </div>
                </div>
                <div className="blurred-info-item">
                  <div className="blurred-info-label">{t("results.age")}</div>
                  <div className="blurred-info-value">
                    <span>
                      {searchAge
                        ? `${Number.parseInt(searchAge, 10) + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2)} years old`
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="personal-info-lock">
              <Lock size={24} />
              <div className="personal-info-lock-text">{t("results.locked")}</div>
              <a
                href="https://www.google.com"
                className="mt-2 bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 py-2 px-4 rounded-lg text-sm"
                onClick={handleUnlockClick}
              >
                <Unlock size={16} />
                {t("results.unlock")}
              </a>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={scrollToPayment} className="text-sm">
              <Eye className="mr-1" size={16} /> {t("results.viewDetails")}
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm">
              <Download className="mr-1" size={16} /> {t("results.basicReport")}
            </Button>
          </div>
        </div>

        {/* Unlock Panel */}
        <div id="payment-section" className="unlock-panel">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center text-red-500">
              <Lock size={24} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-dark mb-2">{t("results.accessDetails")}</h3>
          <p className="text-gray-600 mb-4">{t("results.oneTime")}</p>

          <div className="unlock-feature-list">
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature1")}</span>
            </div>
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature2")}</span>
            </div>
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature3")}</span>
            </div>
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature4")}</span>
            </div>
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature5")}</span>
            </div>
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature6")}</span>
            </div>
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature7")}</span>
            </div>
            <div className="unlock-feature-item">
              <CheckCircle className="text-red-500 mr-2" size={16} />
              <span>{t("results.feature8")}</span>
            </div>
          </div>

          <div className="unlock-price">
            <span>{t("pricing.price")}</span>
          </div>

          <a
            href="https://www.google.com"
            className="unlock-cta flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg w-full max-w-[280px] mx-auto"
            onClick={handleUnlockClick}
          >
            <Unlock size={18} />
            {t("results.unlock")}
          </a>

          <div className="security-badges mt-5">
            <div className="security-badge">
              <Lock size={14} className="mr-1" />
              {t("results.securePayment")}
            </div>
            <div className="security-badge">
              <Shield size={14} className="mr-1" />
              {t("results.encrypted")}
            </div>
            <div className="security-badge">
              <Clock size={14} className="mr-1" />
              {t("results.lifetimeAccess")}
            </div>
          </div>

          <div className="countdown-timer mt-4">
            <Clock size={14} className="mr-1 text-red-500" />
            {t("results.countdown")}
          </div>
        </div>

        {/* Users Viewing */}
        <div className="users-viewing">
          <div className="users-viewing-dot"></div>
          <span>{formatLocationText(t("results.viewing"))}</span>
        </div>

        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
          <X size={24} />
        </button>
      </div>
    </div>
  )
}
