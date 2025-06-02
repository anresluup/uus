"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface PhotoUploadProps {
  onPhotoUpload: (file: File) => void
  className?: string
}

export default function PhotoUpload({ onPhotoUpload, className = "" }: PhotoUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { t } = useLanguage()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const processFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert(t("upload.invalidFileType"))
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert(t("upload.fileTooLarge"))
      return
    }

    // Create preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewUrl(reader.result as string)
      setIsUploaded(true)
      onPhotoUpload(file)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemovePhoto = () => {
    setPreviewUrl(null)
    setIsUploaded(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={`photo-upload ${className}`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-label={t("upload.selectPhoto")}
      />

      {!previewUrl ? (
        <div
          className={`upload-area border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
            isDragging ? "border-white bg-red-600/50" : "border-white hover:border-white hover:bg-red-600/30"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleButtonClick}
          role="button"
          tabIndex={0}
          aria-label={t("upload.dropZoneLabel")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleButtonClick()
            }
          }}
        >
          <div className="flex flex-col items-center justify-center py-4">
            <Upload className="w-10 h-10 text-white mb-2" />
            <p className="text-sm font-medium mb-1 text-white">{t("upload.dragDrop")}</p>
            <p className="text-xs text-white/80 mb-3">{t("upload.orClickToUpload")}</p>
            <Button size="sm" className="text-xs bg-white text-red-500 hover:bg-white/90 hover:text-red-600">
              {t("upload.selectPhoto")}
            </Button>
            <p className="text-xs text-white/80 mt-3">{t("upload.maxFileSize")}</p>
          </div>
        </div>
      ) : (
        <div className="preview-container relative rounded-lg overflow-hidden border border-gray-200">
          <img
            src={previewUrl || "/placeholder.svg"}
            alt={t("upload.uploadedPhoto")}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              onClick={handleRemovePhoto}
              className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
              aria-label={t("upload.removePhoto")}
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <div className="flex items-center text-white">
              <Check className="w-4 h-4 mr-1 text-green-400" />
              <span className="text-sm font-medium">{t("upload.photoUploaded")}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
