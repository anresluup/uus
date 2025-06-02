const FeaturedSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Featured In</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We've been fortunate to be recognized by leading publications and platforms.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="/product-hunt-logo.png" alt="Product Hunt" className="h-8 md:h-10 object-contain" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="/placeholder-bl91s.png" alt="Forbes" className="h-8 md:h-10 object-contain" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="/placeholder-6ifjw.png" alt="TechCrunch" className="h-8 md:h-10 object-contain" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="/generic-tech-logo.png" alt="Wired" className="h-8 md:h-10 object-contain" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img src="/lifehacker-logo.png" alt="Lifehacker" className="h-8 md:h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
