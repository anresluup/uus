"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Camera } from "lucide-react"

interface ScanOverlayProps {
  searchName: string
  searchAge?: string
  onCancel: () => void
  hasPhoto?: boolean
}

export default function ScanOverlay({ searchName, searchAge, onCancel, hasPhoto = false }: ScanOverlayProps) {
  const [progress, setProgress] = useState(0)
  const [profileCount, setProfileCount] = useState(0)
  const [currentAppIndex, setCurrentAppIndex] = useState(0)
  const [scanStatus, setScanStatus] = useState("Initializing scan...")
  const { t } = useLanguage()

  const scanApps = ["Tinder", "Bumble", "Hinge", "OkCupid", "Match.com", "Zoosk", "POF", "Badoo", "Grindr"]

  const scanInterval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Start scan simulation
    scanInterval.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2 // Faster progress for demo

        // Update status messages based on progress
        if (newProgress < 15) {
          setScanStatus(t("scan.status.connecting"))
        } else if (newProgress < 30 && hasPhoto) {
          setScanStatus(t("scan.photoAnalysis"))
        } else if (newProgress < 40 && hasPhoto) {
          setScanStatus(t("scan.faceRecognition"))
        } else if (newProgress < 50) {
          setScanStatus(t("scan.status.searching"))
        } else if (newProgress < 70) {
          setScanStatus(t("scan.status.analyzing"))
        } else if (newProgress < 85) {
          setScanStatus(t("scan.status.crossReferencing"))
        } else {
          setScanStatus(t("scan.status.finalizing"))
        }

        // Increment profile count randomly
        setProfileCount((prevCount) => prevCount + Math.floor(Math.random() * 5) + 1)

        // Highlight different dating apps during scan
        if (newProgress % 10 === 0) {
          setCurrentAppIndex((prevIndex) => (prevIndex + 1) % scanApps.length)
        }

        return newProgress > 100 ? 100 : newProgress
      })
    }, 50)

    // Cleanup interval on unmount
    return () => {
      if (scanInterval.current) {
        clearInterval(scanInterval.current)
      }
    }
  }, [scanApps.length, t, hasPhoto])

  // Complete scan when progress reaches 100%
  useEffect(() => {
    if (progress >= 100 && scanInterval.current) {
      clearInterval(scanInterval.current)
      setScanStatus(t("scan.status.complete"))
    }
  }, [progress, t])

  const searchingText = searchAge
    ? `${t("scan.searchingWithAge")} "${searchName}" (${t("results.ageLabel")} ${searchAge})`
    : `${t("scan.searching")} "${searchName}"`

  return (
    <div className="scan-overlay">
      <div className="scan-content">
        <div className="scan-radar"></div>
        <h2 className="text-2xl font-bold mb-2">{t("scan.scanning")}</h2>
        <p className="text-gray-300 mb-4">{searchingText}</p>

        {hasPhoto && (
          <div className="bg-black/30 rounded-lg p-3 mb-4 flex items-center">
            <Camera className="text-green-400 mr-2" size={18} />
            <span className="text-green-400 text-sm font-medium">{t("scan.enhancedSearch")}</span>
            <div className="ml-auto bg-green-400/20 text-green-400 text-xs px-2 py-1 rounded-full">
              {t("upload.accuracy")}
            </div>
          </div>
        )}

        <div className="scan-progress">
          <div className="scan-progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="scan-progress-pulse"></div>
        </div>

        <div className="flex justify-between text-sm">
          <span>0%</span>
          <span>100%</span>
        </div>

        <div className="scan-sites-counter">
          <span className="scan-sites-number">120+</span>
          <span className="scan-sites-text">{t("scan.sites")}</span>
        </div>

        <div className="scan-app-list">
          {scanApps.map((app, index) => (
            <div key={app} className={`scan-app-item ${index === currentAppIndex ? "active" : ""}`}>
              {app}
            </div>
          ))}
        </div>

        <div className="scan-status">{scanStatus}</div>

        <div className="scan-counter">
          {t("scan.profilesChecked")} <span className="scan-counter-number">{profileCount}</span>
        </div>

        <Button onClick={onCancel} variant="outline" className="scan-cancel">
          {t("scan.cancel")}
        </Button>
      </div>
    </div>
  )
}
