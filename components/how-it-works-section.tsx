import { UserCheckIcon as UserEdit, ImageIcon, Search, FileText } from "lucide-react"

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-dark mb-2">How Does It Work?</h2>
        <p className="text-center text-gray-600 mb-12">
          Our AI-powered system carefully scans popular dating apps to verify activity with industry-leading accuracy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="step-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center text-red-500 mx-auto mb-4">
              <span className="font-semibold">1</span>
            </div>
            <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center text-gray-500 mx-auto mb-4">
              <UserEdit className="text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-3">Enter Details</h3>
            <p className="text-gray-600 text-sm">
              Provide basic information to help our AI bots target the right profiles. Your search details remain
              private and encrypted.
            </p>
          </div>

          <div className="step-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center text-red-500 mx-auto mb-4">
              <span className="font-semibold">2</span>
            </div>
            <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center text-gray-500 mx-auto mb-4">
              <ImageIcon className="text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-3">Upload a Photo</h3>
            <p className="text-gray-600 text-sm">
              Our AI uses advanced facial recognition technology to match profiles across multiple platforms with 95%
              accuracy.
            </p>
          </div>

          <div className="step-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center text-red-500 mx-auto mb-4">
              <span className="font-semibold">3</span>
            </div>
            <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center text-gray-500 mx-auto mb-4">
              <Search className="text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-3">AI Bots Scan Apps</h3>
            <p className="text-gray-600 text-sm">
              Our secure bots create temporary profiles to scan dating apps across multiple locations within a 50-mile
              radius.
            </p>
          </div>

          <div className="step-card bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center text-red-500 mx-auto mb-4">
              <span className="font-semibold">4</span>
            </div>
            <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center text-gray-500 mx-auto mb-4">
              <FileText className="text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-3">Get Detailed Results</h3>
            <p className="text-gray-600 text-sm">
              Receive a comprehensive report with activity data, timestamps, and location information from our 24/7
              monitoring system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
