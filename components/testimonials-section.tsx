import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Data Doesn't Lie. People Do.</h2>
          <p className="text-gray-600">Read what our users have to say about CheatScanner</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="testimonial-card bg-white p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 h-10 w-10 rounded-full flex items-center justify-center text-red-500">
                <span className="font-bold">S</span>
              </div>
              <div className="ml-3">
                <h4 className="font-bold">Sarah T.</h4>
                <p className="text-xs text-gray-500">Verified User</p>
              </div>
            </div>
            <div className="mb-2 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>
            <p className="text-gray-600">
              "After using Cheater Scanner, I discovered my boyfriend had three different dating profiles. I was
              devastated but grateful for the truth. This app saved me from wasting more years with someone who didn't
              respect me."
            </p>
          </div>

          <div className="testimonial-card bg-white p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 h-10 w-10 rounded-full flex items-center justify-center text-red-500">
                <span className="font-bold">M</span>
              </div>
              <div className="ml-3">
                <h4 className="font-bold">Michael R.</h4>
                <p className="text-xs text-gray-500">Atlanta</p>
              </div>
            </div>
            <div className="mb-2 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>
            <p className="text-gray-600">
              "I had suspicions but no proof. Cheater Scanner found his hidden profiles within minutes. The facial
              recognition technology is impressive - it even found photos where he looked different. Worth every penny."
            </p>
          </div>

          <div className="testimonial-card bg-white p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 h-10 w-10 rounded-full flex items-center justify-center text-red-500">
                <span className="font-bold">J</span>
              </div>
              <div className="ml-3">
                <h4 className="font-bold">Jennifer K.</h4>
                <p className="text-xs text-gray-500">Relationship Coach</p>
              </div>
            </div>
            <div className="mb-2 flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
              <Star className="text-yellow-400" size={16} fill="none" />
            </div>
            <p className="text-gray-600">
              "My friend convinced me to try Cheater Scanner when I had doubts about my partner. Turns out my instincts
              were right - he was active on multiple sites with a completely different persona. The detailed location
              reports were eye-opening."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
