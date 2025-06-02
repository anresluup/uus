"use client"

import { Button } from "@/components/ui/button"
import { startScan } from "@/lib/analytics"
import { useLanguage } from "@/contexts/language-context"

interface CtaSectionProps {
  onStartScan: () => void
}

export default function CtaSection({ onStartScan }: CtaSectionProps) {
  const { t } = useLanguage()

  const handleStartScan = () => {
    startScan()
    onStartScan()
  }

  return (
    <section className="py-16 bg-red-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
        <p className="mb-8 text-lg">{t("cta.subtitle")}</p>
        <Button
          onClick={handleStartScan}
          className="bg-white text-red-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition duration-300 shadow-lg"
        >
          {t("cta.button")}
        </Button>
      </div>
    </section>
  )
}
