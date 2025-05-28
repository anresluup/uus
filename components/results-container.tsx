"use client"

import { useState, useEffect } from "react"
import { X, Lock, Check, Clock, MapPin, Shield, AlertCircle, Info } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { clickPayment } from "@/lib/analytics"
import { getRedTrackUrl } from "@/lib/redtrack-url"

interface ResultsContainerProps {
  searchName: string
  onClose: () => void
  hasPhoto: boolean
  blurredPhotoUrl: string | null
}

export default function ResultsContainer({ searchName, onClose, hasPhoto, blurredPhotoUrl }: ResultsContainerProps) {
  const [countdown, setCountdown] = useState(600) // 10 minutes
  const { userLocation, pricing } = useLanguage()
  const [redTrackUrl] = useState(getRedTrackUrl())

  useEffect(() => {
    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    // Cleanup
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePaymentClick = () => {
    clickPayment()
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Close results"
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div className="bg-red-500 text-white p-6 rounded-t-xl">
            <h2 className="text-2xl font-bold mb-2">Search Results for "{searchName}"</h2>
            <p className="flex items-center text-sm">
              <MapPin size={16} className="mr-2" />
              Showing results near {userLocation.city}
            </p>
          </div>

          {/* Results content */}
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">We found</h3>
                    <p className="text-green-600 font-bold text-lg">3 strong matches & 33 potential leads</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium mb-1">
                    SCAN COMPLETE
                  </div>
                  <p className="text-xs text-gray-600">Searched 120+ dating platforms</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">matching your search within the last 24 hours</p>
            </div>

            {/* Profile cards */}
            <div className="space-y-6 mb-6">
              {/* High match profile */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-green-50 p-3 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">High Match</span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock size={14} className="mr-1" /> Active 15 minutes ago
                    </span>
                  </div>
                  <span className="text-sm font-medium text-green-600">80% match</span>
                </div>

                <div className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 relative">
                        <img
                          src={blurredPhotoUrl || "/blurred-profile.png"}
                          alt="Blurred Profile"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Lock size={32} className="text-white" />
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <span className="text-xs text-gray-500 flex items-center justify-center">
                          <Lock size={10} className="mr-1" /> Blurred for privacy
                        </span>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-sm bg-red-50">
                          <img src="/tinder-icon.png" alt="Tinder" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-sm bg-yellow-50">
                          <img src="/bumble-icon.png" alt="Bumble" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-sm bg-blue-50">
                          <img src="/hinge-icon.png" alt="Hinge" className="w-6 h-6" />
                        </div>
                        <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center">
                          <Info size={10} className="mr-1" /> +3 other platforms
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Email:</p>
                          <p className="font-medium text-gray-800 blur-sm">a****@gmail.com</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Phone:</p>
                          <p className="font-medium text-gray-800 blur-sm">+372 5** ** ***</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Location:</p>
                          <p className="font-medium text-gray-800">
                            {userLocation.city}, {userLocation.country}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Age/DOB:</p>
                          <p className="font-medium text-gray-800 blur-sm">3* years old</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500 text-sm">
                          <AlertCircle size={14} className="mr-1 text-amber-500" />
                          <span>6 profile details hidden</span>
                        </div>
                        <a
                          href={redTrackUrl}
                          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md font-medium transition-colors"
                          onClick={handlePaymentClick}
                        >
                          Unlock Full Profile ({pricing.formatted})
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic match profiles (simplified) */}
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">Match</span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock size={14} className="mr-1" /> Active yesterday
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">65% match</span>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 mr-3 relative">
                      <img src="/dating-profile-2.png" alt="Profile" className="w-full h-full object-cover blur-sm" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Lock size={16} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <img src="/tinder-icon.png" alt="Tinder" className="w-4 h-4 mr-1" />
                        <img src="/hinge-icon.png" alt="Hinge" className="w-4 h-4" />
                      </div>
                      <p className="text-xs text-gray-500">2.8 miles away</p>
                    </div>
                  </div>
                  <a
                    href={redTrackUrl}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1.5 px-3 rounded-md transition-colors"
                    onClick={handlePaymentClick}
                  >
                    Unlock ({pricing.formatted})
                  </a>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">Match</span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock size={14} className="mr-1" /> Active 2 days ago
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">55% match</span>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 mr-3 relative">
                      <img src="/dating-profile-3.png" alt="Profile" className="w-full h-full object-cover blur-sm" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Lock size={16} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <img src="/bumble-icon.png" alt="Bumble" className="w-4 h-4 mr-1" />
                      </div>
                      <p className="text-xs text-gray-500">5.1 miles away</p>
                    </div>
                  </div>
                  <a
                    href={redTrackUrl}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1.5 px-3 rounded-md transition-colors"
                    onClick={handlePaymentClick}
                  >
                    Unlock ({pricing.formatted})
                  </a>
                </div>
              </div>
            </div>

            {/* Countdown and CTA */}
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-amber-700 flex items-center">
                  <Clock size={16} className="mr-2" />
                  Results expire in {formatTime(countdown)}
                </h3>
                <div className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded animate-pulse">LIMITED TIME</div>
              </div>
              <p className="text-sm text-amber-700 mb-2">
                7 people from {userLocation.city} are viewing these results right now
              </p>
            </div>

            {/* Payment CTA */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-center">Unlock Complete Profile</h3>
              <p className="text-sm text-gray-600 text-center mb-6">
                One-time payment of {pricing.formatted}, lifetime access
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Full Name & Age</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Verified Contact Info</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Home Address</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Clear Profile Photos</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">All Social Media Profiles</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Dating App Activity History</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">All Dating Profile Links</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Last Known Locations</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                {pricing.promotional ? (
                  <div className="mb-2">
                    <span className="text-gray-500 text-lg line-through mr-2">
                      {pricing.symbol}
                      {pricing.promotional.originalPrice}
                    </span>
                    <span className="text-green-600 text-2xl font-bold">
                      {pricing.symbol}
                      {pricing.promotional.discountedPrice}
                    </span>
                  </div>
                ) : (
                  <div className="text-green-600 text-2xl font-bold mb-2">{pricing.formatted}</div>
                )}
              </div>

              <a
                href={redTrackUrl}
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center mb-4"
                onClick={handlePaymentClick}
              >
                UNLOCK ALL PROFILES NOW
              </a>

              <div className="flex justify-center space-x-6">
                <div className="flex items-center text-xs text-gray-500">
                  <Shield className="mr-1" size={12} />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Lock className="mr-1" size={12} />
                  <span>Encrypted</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Check className="mr-1" size={12} />
                  <span>Lifetime Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
