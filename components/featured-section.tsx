const FeaturedSection = () => {
  return (
    <div className="bg-transparent py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Featured In</p>
          <p className="text-lg text-gray-600">
            We've been fortunate to be recognized by leading publications and platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img
            src="/product-hunt-logo-transparent.png"
            alt="Product Hunt"
            className="h-16 md:h-20 lg:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/forbes-logo-transparent.png"
            alt="Forbes"
            className="h-16 md:h-20 lg:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/lifehacker-logo-transparent.png"
            alt="Lifehacker"
            className="h-16 md:h-20 lg:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/fox-news-logo-transparent.png"
            alt="Fox News"
            className="h-16 md:h-20 lg:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
