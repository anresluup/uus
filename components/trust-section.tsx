import {
  BotIcon as Robot,
  UserIcon as UserSecret,
  Fingerprint,
  Shield,
  PieChart,
  Lock,
  Key,
  History,
} from "lucide-react"

export default function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Why Trust Us?</h2>
        <p className="text-center text-gray-600 mb-12">
          CheatScanner uses advanced technology to provide accurate results with full discretion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center text-red-500 mb-6 mx-auto">
              <Robot className="text-2xl" />
            </div>
            <h3 className="font-bold text-lg text-center mb-3">AI Bot Network</h3>
            <p className="text-gray-600 text-center">
              Our bots scan multiple locations 24/7 to ensure comprehensive coverage across all major dating platforms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center text-red-500 mb-6 mx-auto">
              <UserSecret className="text-2xl" />
            </div>
            <h3 className="font-bold text-lg text-center mb-3">Complete Anonymity</h3>
            <p className="text-gray-600 text-center">
              Our AI bots operate discreetly, ensuring your partner never knows they've been searched.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center text-red-500 mb-6 mx-auto">
              <Fingerprint className="text-2xl" />
            </div>
            <h3 className="font-bold text-lg text-center mb-3">Advanced Detection</h3>
            <p className="text-gray-600 text-center">
              AI-powered profile matching technology with 92-95% accuracy across various dating platforms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-red-100 h-16 w-16 rounded-full flex items-center justify-center text-red-500 mb-6 mx-auto">
              <Shield className="text-2xl" />
            </div>
            <h3 className="font-bold text-lg text-center mb-3">End-to-End Encryption</h3>
            <p className="text-gray-600 text-center">
              Secure hot connection encryption protects your data and search history at all times.
            </p>
          </div>
        </div>

        {/* Accuracy Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 h-10 w-10 rounded-full flex items-center justify-center text-red-500 mr-4">
                <PieChart />
              </div>
              <h3 className="font-bold text-lg">Accuracy Statistics</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Profile Detection</span>
                  <span className="font-bold text-red-500">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Location Accuracy</span>
                  <span className="font-bold text-red-500">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 h-10 w-10 rounded-full flex items-center justify-center text-red-500 mr-4">
                <Lock />
              </div>
              <h3 className="font-bold text-lg">Our Security Promise</h3>
            </div>

            <p className="text-gray-600 mb-4">
              Your privacy and security are our top priorities. We've implemented multiple layers of protection to
              ensure your data and searches remain completely confidential:
            </p>

            <div className="flex items-start mb-3">
              <div className="bg-green-100 h-8 w-8 rounded-full flex items-center justify-center text-green-500 mr-3">
                <Key />
              </div>
              <div>
                <h4 className="font-medium">256-bit Encryption</h4>
                <p className="text-sm text-gray-500">Military-grade encryption for all data</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 h-8 w-8 rounded-full flex items-center justify-center text-green-500 mr-3">
                <History />
              </div>
              <div>
                <h4 className="font-medium">No Search History</h4>
                <p className="text-sm text-gray-500">Searches are never stored after completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
