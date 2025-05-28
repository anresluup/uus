"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Lock, Star, StarHalf, Search, AlertTriangle, Users, Clock, TrendingUp } from "lucide-react"
import { startScan } from "@/lib/analytics"
import { useLanguage } from "@/contexts/language-context"
import PhotoUpload from "./photo-upload"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import LocationSelector from "./location-selector"

interface HeroSectionProps {
  onStartScan: (
    name?: string,
    age?: string,
    sex?: string,
    location?: string,
    phone?: string,
    email?: string,
    fullName?: string,
  ) => void
  onPhotoUpload: (file: File) => void
}

export default function HeroSection({ onStartScan, onPhotoUpload }: HeroSectionProps) {
  const [searchInput, setSearchInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
  const [sexInput, setSexInput] = useState("")
  const [locationInput, setLocationInput] = useState("")
  const [phoneInput, setPhoneInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [fullNameInput, setFullNameInput] = useState("")
  const [formErrors, setFormErrors] = useState<{ name?: string; age?: string; sex?: string; location?: string }>({})
  const [urgencyTimer, setUrgencyTimer] = useState(600) // 10 minutes
  const { t, pricing, userLocation } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Set default location based on user's IP
    setLocationInput(userLocation.city)
  }, [userLocation.city])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleStartScan = () => {
    // Run validation
    const errors: { name?: string; age?: string; sex?: string; location?: string } = {}

    if (!searchInput.trim()) {
      errors.name = "Name is required"
    }

    if (!ageInput.trim()) {
      errors.age = "Age is required"
    } else if (isNaN(Number(ageInput)) || Number(ageInput) < 18 || Number(ageInput) > 100) {
      errors.age = "Please enter a valid age (18-100)"
    }

    if (!sexInput) {
      errors.sex = "Sex is required"
    }

    if (!locationInput.trim()) {
      errors.location = "Location is required"
    }

    // Set form errors state
    setFormErrors(errors)

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      // No errors, proceed with scan
      startScan()
      onStartScan(searchInput, ageInput, sexInput, locationInput, phoneInput, emailInput, fullNameInput)
    } else {
      // There are errors, scroll to the first error field
      const firstErrorField = Object.keys(errors)[0]
      let elementId = ""

      switch (firstErrorField) {
        case "name":
          elementId = "nameInput"
          break
        case "age":
          elementId = "ageInput"
          break
        case "sex":
          elementId = "sexInput"
          break
        case "location":
          elementId = "locationInput"
          break
      }

      if (elementId) {
        setTimeout(() => {
          const element = document.getElementById(elementId)
          if (element) {
            // Scroll to the element
            element.scrollIntoView({ behavior: "smooth", block: "center" })
            // Add a brief flash effect to highlight the field
            element.classList.add("ring-2", "ring-yellow-400", "ring-opacity-100")
            setTimeout(() => {
              element.classList.remove("ring-2", "ring-yellow-400", "ring-opacity-100")
              // Focus the input after scrolling and highlighting
              element.focus()
            }, 1000)
          }
        }, 100) // Small delay to ensure DOM is updated
      }
    }
  }

  const handleLocationChange = (location: string) => {
    setLocationInput(location)
  }

  return (
    <section className="bg-red-500 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Urgency Banner */}
        <div className="bg-yellow-500 text-black py-2 px-4 rounded-lg mb-6 flex items-center justify-center gap-2 animate-pulse">
          <AlertTriangle size={20} />
          <span className="font-bold">
            LIMITED TIME OFFER:{" "}
            {pricing.promotional ? `${pricing.promotional.discountPercentage}% OFF` : "SPECIAL PRICE"} - Ends in{" "}
            {formatTime(urgencyTimer)}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            {/* Trust indicators */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Shield className="mr-2" size={16} />
                <span className="text-sm">Private & Secure Scanning</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <Users className="mr-2" size={16} />
                <span className="text-sm">2.3M+ Users</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              FIND OUT IF THEY'RE CHEATING
              <span className="block text-yellow-400 text-3xl md:text-4xl mt-2">IN JUST 30 SECONDS</span>
            </h1>

            <p className="text-xl mb-8 font-medium">
              Instantly scan dating apps to discover if your partner is active on Tinder, Bumble, Hinge & more. Get
              peace of mind with our secure, discreet service.
            </p>

            {/* Social proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      src="/profile-avatar-1.png"
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="/profile-avatar-2.png"
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="/profile-avatar-3.png"
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-red-500 flex items-center justify-center text-xs font-bold">
                      +99
                    </div>
                  </div>
                  <span className="ml-3 text-sm">Active searches right now</span>
                </div>
                <div className="flex items-center text-green-400">
                  <TrendingUp size={16} className="mr-1" />
                  <span className="text-sm font-bold">LIVE</span>
                </div>
              </div>
              <div className="text-xs opacity-80">
                <Clock size={12} className="inline mr-1" />
                Last profile found: 12 seconds ago in {userLocation.city}
              </div>
            </div>

            {/* Search inputs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="text-sm font-bold mb-3 flex items-center">
                <Search className="mr-2" size={16} />
                Enter Target Information
              </h3>

              {/* Name input */}
              <div className="mb-3">
                <label htmlFor="nameInput" className="block text-xs mb-1 font-medium">
                  Name (required)
                </label>
                <Input
                  id="nameInput"
                  type="text"
                  placeholder="Enter their name..."
                  className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none text-base font-medium"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                {formErrors.name && <p className="text-yellow-300 text-xs mt-1">{formErrors.name}</p>}
              </div>

              {/* Age and Sex inputs */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label htmlFor="ageInput" className="block text-xs mb-1 font-medium">
                    Age (required)
                  </label>
                  <Input
                    id="ageInput"
                    type="number"
                    placeholder="Age"
                    min="18"
                    max="100"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none text-base font-medium"
                    value={ageInput}
                    onChange={(e) => setAgeInput(e.target.value)}
                  />
                  {formErrors.age && <p className="text-yellow-300 text-xs mt-1">{formErrors.age}</p>}
                </div>
                <div>
                  <label htmlFor="sexInput" className="block text-xs mb-1 font-medium">
                    Sex (required)
                  </label>
                  <Select value={sexInput} onValueChange={setSexInput}>
                    <SelectTrigger
                      id="sexInput"
                      className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none text-base font-medium bg-white"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {formErrors.sex && <p className="text-yellow-300 text-xs mt-1">{formErrors.sex}</p>}
                </div>
              </div>

              {/* Location input */}
              <div className="mb-3">
                <label htmlFor="locationInput" className="block text-xs mb-1 font-medium">
                  Location (required)
                </label>
                <div className="relative">
                  <LocationSelector defaultLocation={userLocation.city} onLocationChange={handleLocationChange} />
                  {formErrors.location && <p className="text-yellow-300 text-xs mt-1">{formErrors.location}</p>}
                </div>
              </div>

              {/* Optional fields - always visible */}
              <div className="space-y-3 mt-4 border-t border-white/20 pt-3">
                <h4 className="text-xs font-medium text-yellow-300 mb-2">Optional Information (increases accuracy)</h4>

                <div>
                  <label htmlFor="phoneInput" className="block text-xs mb-1 font-medium">
                    Phone Number (optional)
                  </label>
                  <Input
                    id="phoneInput"
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none text-base font-medium"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="emailInput" className="block text-xs mb-1 font-medium">
                    Email (optional)
                  </label>
                  <Input
                    id="emailInput"
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none text-base font-medium"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="fullNameInput" className="block text-xs mb-1 font-medium">
                    Full Name (optional)
                  </label>
                  <Input
                    id="fullNameInput"
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none text-base font-medium"
                    value={fullNameInput}
                    onChange={(e) => setFullNameInput(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Photo upload with urgency */}
            <div className="bg-red-600/80 backdrop-blur-sm rounded-lg p-4 mb-6 border-2 border-yellow-400">
              <h3 className="text-sm font-bold mb-2 flex items-center">
                <AlertTriangle className="mr-2 text-yellow-400" size={16} />
                Upload a Photo (Optional) - BOOST ACCURACY TO 95%!
              </h3>
              <PhotoUpload onPhotoUpload={onPhotoUpload} />
              <p className="text-xs text-white mt-2 flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                Adding a photo increases match accuracy by 95%
              </p>
            </div>

            {/* CTA Button with pricing */}
            <Button
              onClick={handleStartScan}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black py-5 px-6 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl w-full transform hover:scale-105"
            >
              START SCANNING NOW - ONLY{" "}
              {pricing.promotional ? (
                <>
                  <span className="line-through opacity-60 text-xs sm:text-sm md:text-base">
                    {pricing.symbol}
                    {pricing.promotional.originalPrice}
                  </span>
                  <span className="ml-2 text-base sm:text-lg md:text-xl lg:text-2xl">
                    {pricing.symbol}
                    {pricing.promotional.discountedPrice}
                  </span>
                </>
              ) : (
                <span>{pricing.formatted}</span>
              )}
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center mt-6 gap-4">
              <div className="flex items-center">
                <Lock className="text-gray-200 mr-2" size={14} />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-gray-200 mr-2" size={14} />
                <span className="text-sm">Encrypted</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <Star className="text-yellow-300 mr-1" size={14} />
                  <StarHalf className="text-yellow-300 mr-2" size={14} />
                </div>
                <span className="text-sm">4.8/5 (2,305 reviews)</span>
              </div>
            </div>
          </div>

          {/* Enhanced profile preview */}
          <div className="w-full md:w-1/2 md:pl-10">
            <div className="relative max-w-md mx-auto md:mx-0">
              {/* Pulsing effect */}
              <div className="absolute inset-0 bg-red-500 rounded-lg animate-pulse opacity-20"></div>

              <div className="bg-white rounded-lg shadow-2xl p-6 text-black relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src="/profile-avatar-main.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">Profile Found</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Clock size={12} className="mr-1" />
                        Active 2 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dating app icons */}
                <div className="flex gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-red-50">
                    <img src="/tinder-icon.png" alt="Tinder" className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-yellow-50">
                    <img src="/bumble-icon.png" alt="Bumble" className="w-6 h-6" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-green-50">
                    <img src="/hinge-icon.png" alt="Hinge" className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-8 rounded-lg shadow-md bg-gray-200 flex items-center justify-center text-xs font-bold">
                    +5
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500">Location:</p>
                    <p className="font-bold text-red-600">2.3 miles away</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500">Last Active:</p>
                    <p className="font-bold text-red-600">Today, 5:37 PM</p>
                  </div>
                </div>

                {/* Profile images preview */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Profile Photos Found:</p>
                  <div className="flex gap-2">
                    <div className="w-15 h-15 rounded-lg overflow-hidden">
                      <img src="/dating-profile-1.png" alt="Photo 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-15 h-15 rounded-lg overflow-hidden">
                      <img src="/dating-profile-2.png" alt="Photo 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-15 h-15 rounded-lg overflow-hidden">
                      <img src="/dating-profile-3.png" alt="Photo 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-15 h-15 rounded-lg bg-gray-200 flex items-center justify-center">
                      <Lock size={20} className="text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 text-sm font-bold">
                    View Details
                  </Button>
                  <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-bold">
                    Download Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom urgency banner */}
        <div className="mt-8 bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <p className="text-lg font-bold">
            🔥 {Math.floor(Math.random() * 50) + 100} people from {userLocation.city} searched in the last hour
          </p>
          <p className="text-sm opacity-80 mt-1">Don't let doubt destroy your relationship - Get answers now!</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
