"use client"
import { useTranslation } from "react-i18next"

const PricingSection = () => {
  const { t } = useTranslation()

  const handlePaymentClick = () => {
    // Track the click event (replace with your actual tracking logic)
    console.log("Payment button clicked!")
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("pricing.title")}</h2>
        <p className="text-gray-700 mb-8">{t("pricing.subtitle")}</p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
            <h3 className="text-xl font-semibold mb-4">{t("pricing.basic.title")}</h3>
            <div className="text-4xl font-bold mb-4">${t("pricing.basic.price")}</div>
            <p className="text-gray-600 mb-4">{t("pricing.basic.description")}</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>{t("pricing.basic.feature1")}</li>
              <li>{t("pricing.basic.feature2")}</li>
              <li>{t("pricing.basic.feature3")}</li>
            </ul>
            <a
              href="https://www.craftybyte42.com/22B69BC/2G6JLLWJ/?sub1=1tst"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center justify-center"
              onClick={handlePaymentClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("pricing.cta")}
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
            <h3 className="text-xl font-semibold mb-4">{t("pricing.pro.title")}</h3>
            <div className="text-4xl font-bold mb-4">${t("pricing.pro.price")}</div>
            <p className="text-gray-600 mb-4">{t("pricing.pro.description")}</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>{t("pricing.pro.feature1")}</li>
              <li>{t("pricing.pro.feature2")}</li>
              <li>{t("pricing.pro.feature3")}</li>
            </ul>
            <a
              href="https://www.craftybyte42.com/22B69BC/2G6JLLWJ/?sub1=1tst"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center justify-center"
              onClick={handlePaymentClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("pricing.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
