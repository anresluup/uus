import { CheckCircle, Info } from "lucide-react"

export default function PrivacySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl font-bold text-dark mb-6">Important Privacy Information</h2>
            <p className="text-gray-600 mb-6">
              We understand the sensitive nature of our service. CheatScanner is designed to provide factual information
              while respecting privacy and legal boundaries:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-3" size={20} />
                <span>We only search publicly available information on dating platforms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-3" size={20} />
                <span>Your search details and results are encrypted and never shared</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-3" size={20} />
                <span>We recommend using this information for honest conversations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-3" size={20} />
                <span>Our service complies with all relevant data protection laws</span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-dark mb-6">When to Use This Service</h2>
            <p className="text-blue-600 mb-6">
              While discovering the truth can be difficult, it's important to approach relationship concerns with care:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Info className="text-blue-500 mt-1 mr-3" size={20} />
                <span>Use this as one tool for gathering information, not as definitive proof</span>
              </li>
              <li className="flex items-start">
                <Info className="text-blue-500 mt-1 mr-3" size={20} />
                <span>Consider open communication with your partner about your concerns</span>
              </li>
              <li className="flex items-start">
                <Info className="text-blue-500 mt-1 mr-3" size={20} />
                <span>Remember that some dating apps retain inactive profiles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
