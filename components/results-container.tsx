"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { clickPayment } from "@/lib/analytics"
import ChatbotMessenger from "./chatbot-messenger"

export default function ResultsContainer({
  searchName,
  searchAge,
}: {
  searchName: string
  searchAge?: string
}) {
  const { t, paymentLink, userLocation } = useLanguage()
  const [countdown, setCountdown] = useState(600) // 10 minutes in seconds
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleUnlock = () => {
    clickPayment()
    window.open(paymentLink, "_blank")
  }

  if (!isVisible) return null

  const displayAgeVariation = (age: string | undefined) => {
    if (!age) return t("results.notProvided", "N/A")
    const ageNum = Number.parseInt(age)
    if (isNaN(ageNum)) return t("results.notProvided", "N/A")

    const lowerBound = ageNum - 2 >= 18 ? ageNum - 2 : 18
    const upperBound = ageNum + 2

    return `${lowerBound}-${upperBound} ${t("results.yearsOldSuffix", "years old")}`
  }

  return (
    <div className="bg-[#f5f1e8] py-8 px-4 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#dc2626] text-white p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">
                  {t("results.title")} {searchName}
                  {searchAge && (
                    <span className="ml-2 text-lg font-normal">
                      ({t("results.ageLabel")} {searchAge})
                    </span>
                  )}
                </h2>
                <p className="text-sm md:text-base mt-1">
                  {t("results.location")} {userLocation.city}
                </p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full h-2 w-2 mr-2 animate-pulse"></div>
                <span className="text-sm">{t("results.scanComplete")}</span>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <p className="text-lg font-medium">
                  {t("results.found")} <span className="text-[#dc2626] font-bold">{t("results.activeProfiles")}</span>{" "}
                  {t("results.matching")}
                </p>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <span className="mr-4">
                    {t("results.appsSearched")}: {t("results.platforms")}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 bg-yellow-50 border border-yellow-200 rounded-md p-3 text-sm">
                <div className="flex items-center text-yellow-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("results.countdown")}: {formatTime(countdown)}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Cards */}
          <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Profile 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t("results.highMatch")}
                  </span>
                  <span className="text-xs text-gray-500">{t("results.active")}</span>
                </div>
                <h3 className="mt-2 font-medium">{searchName}</h3>
                <div className="mt-1 text-sm text-gray-600">
                  <p>
                    {t("results.datingApps")} {t("results.apps")}{" "}
                    <span className="text-[#dc2626]">{t("results.others")}</span>
                  </p>
                  <p className="mt-1">
                    {t("results.confidence")} <span className="font-medium">{t("results.match")}</span>
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.email")}</span>
                    <span className="blur-sm">••••••@••••.com</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.phone")}</span>
                    <span className="blur-sm">+•• •• •••• ••••</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.address")}</span>
                    <span>
                      {userLocation.city}, {userLocation.country_code}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.age")}</span>
                    <span>
                      {searchAge
                        ? `${searchAge} ${t("results.yearsOldSuffix", "years old")}`
                        : t("results.notProvided", "N/A")}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium w-24 shrink-0">{t("results.photos")}</span>
                    <div className="flex gap-2">
                      <img
                        src="/blurred-profile-photo-1.png"
                        alt="Blurred profile photo 1"
                        className="w-16 h-16 rounded-md object-cover blur-sm"
                      />
                      <img
                        src="/blurred-profile-photo-2.png"
                        alt="Blurred profile photo 2"
                        className="w-16 h-16 rounded-md object-cover blur-sm"
                      />
                      <img
                        src="/blurred-profile-photo-3.png"
                        alt="Blurred profile photo 3"
                        className="w-16 h-16 rounded-md object-cover blur-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleUnlock}
                  className="mt-4 w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-2 px-4 rounded transition-colors duration-200"
                >
                  {t("results.unlock")}
                </button>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t("results.basicMatch")}
                  </span>
                  <span className="text-xs text-gray-500">{t("results.activeYesterday")}</span>
                </div>
                <h3 className="mt-2 font-medium">{searchName}</h3>
                <div className="mt-1 text-sm text-gray-600">
                  <p>
                    {t("results.datingApps")} {t("results.apps")}
                  </p>
                  <p className="mt-1">
                    {t("results.confidence")}{" "}
                    <span className="font-medium">65% {t("results.match").split(" ")[1]}</span>
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.email")}</span>
                    <span className="blur-sm">••••@••••.com</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.phone")}</span>
                    <span className="blur-sm">+•• •• •••• ••••</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.address")}</span>
                    <span>
                      {userLocation.city}, {userLocation.country_code}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.age")}</span>
                    <span>{displayAgeVariation(searchAge)}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium w-24 shrink-0">{t("results.photos")}</span>
                    <div className="flex gap-2">
                      <img
                        src="/blurred-profile-photo-4.png"
                        alt="Blurred profile photo 4"
                        className="w-16 h-16 rounded-md object-cover blur-sm"
                      />
                      <img
                        src="/blurred-profile-photo-5.png"
                        alt="Blurred profile photo 5"
                        className="w-16 h-16 rounded-md object-cover blur-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleUnlock}
                  className="mt-4 w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-2 px-4 rounded transition-colors duration-200"
                >
                  {t("results.unlock")}
                </button>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {t("results.basicMatch")}
                  </span>
                  <span className="text-xs text-gray-500">{t("results.activeYesterday")}</span>
                </div>
                <h3 className="mt-2 font-medium">{searchName}</h3>
                <div className="mt-1 text-sm text-gray-600">
                  <p>
                    {t("results.datingApps")} {t("results.apps")}
                  </p>
                  <p className="mt-1">
                    {t("results.confidence")}{" "}
                    <span className="font-medium">60% {t("results.match").split(" ")[1]}</span>
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.email")}</span>
                    <span className="blur-sm">••••@••••.com</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.phone")}</span>
                    <span className="blur-sm">+•• •• •••• ••••</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.address")}</span>
                    <span>
                      {userLocation.city}, {userLocation.country_code}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">{t("results.age")}</span>
                    <span>{displayAgeVariation(searchAge)}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium w-24 shrink-0">{t("results.photos")}</span>
                    <div className="flex gap-2">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Blurred profile photo 6"
                        className="w-16 h-16 rounded-md object-cover blur-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleUnlock}
                  className="mt-4 w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-2 px-4 rounded transition-colors duration-200"
                >
                  {t("results.unlock")}
                </button>
              </div>
            </div>
          </div>

          {/* Access Complete Details Section */}
          <div className="p-4 md:p-6 bg-[#f5f1e8] border-t border-gray-200">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold">{t("results.accessDetails")}</h3>
                <p className="text-sm text-gray-600 mt-1">{t("results.oneTime")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature1")}</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature2")}</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature3")}</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature4")}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature5")}</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature6")}</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature7")}</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("results.feature8")}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={handleUnlock}
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  {t("results.unlock")}
                </button>

                <div className="mt-6 flex flex-wrap justify-center gap-6">
                  <div className="flex items-center">
                    <img src="/secure_icon_2.png" alt="SSL Secure" className="h-10 w-auto mr-2" />
                    <span className="text-sm text-gray-600">{t("results.securePayment")}</span>
                  </div>
                  <div className="flex items-center">
                    <img src="/secure_icon_3.png" alt="Encrypted" className="h-10 w-auto mr-2" />
                    <span className="text-sm text-gray-600">{t("results.encrypted")}</span>
                  </div>
                  <div className="flex items-center">
                    <img src="/satisfaction_icon.png" alt="Satisfaction Guaranteed" className="h-10 w-auto mr-2" />
                    <span className="text-sm text-gray-600">{t("results.lifetimeAccess")}</span>
                  </div>
                  <div className="flex items-center">
                    <img src="/cs_icon.png" alt="Customer Support" className="h-10 w-auto mr-2" />
                    <span className="text-sm text-gray-600">24/7 Support</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>{t("results.viewing").replace("{city}", userLocation.city)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Messenger */}
      <ChatbotMessenger searchName={searchName} searchAge={searchAge} />
    </div>
  )
}
