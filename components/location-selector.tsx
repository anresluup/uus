"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

interface LocationSelectorProps {
  defaultLocation: string
  onLocationChange: (location: string) => void
}

export default function LocationSelector({ defaultLocation, onLocationChange }: LocationSelectorProps) {
  const [location, setLocation] = useState(defaultLocation)
  const [showMap, setShowMap] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLocation(defaultLocation)
  }, [defaultLocation])

  useEffect(() => {
    // Handle clicks outside the map to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setShowMap(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = e.target.value
    setLocation(newLocation)
    onLocationChange(newLocation)
  }

  const handleMapClick = (city: string) => {
    setLocation(city)
    onLocationChange(city)
    setShowMap(false)
  }

  return (
    <div className="relative">
      <div className="relative">
        <Input
          type="text"
          value={location}
          onChange={handleLocationInputChange}
          className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none text-base font-medium pr-10"
          placeholder="Enter location..."
        />
        <button
          type="button"
          onClick={() => setShowMap(!showMap)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <MapPin size={18} />
        </button>
      </div>

      {showMap && (
        <div ref={mapRef} className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-2 border-b border-gray-200">
            <p className="text-xs text-gray-500">Select your location:</p>
          </div>
          <div className="p-2 max-h-48 overflow-y-auto">
            <div className="relative w-full h-32 bg-gray-100 rounded mb-2">
              {/* Simple map visualization */}
              <div className="absolute inset-0 bg-blue-50 rounded">
                <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full"></div>

                  {/* Map grid lines */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-blue-100"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1">
              {["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"].map((city) => (
                <button
                  key={city}
                  onClick={() => handleMapClick(city)}
                  className="text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
