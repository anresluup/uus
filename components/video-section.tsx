"use client"

import { useState } from "react"
import { Play, Tv, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useLanguage()

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Tv className="text-red-500" size={28} />
            <h2 className="text-2xl md:text-4xl font-black text-gray-900">AS SEEN ON NATIONAL TV</h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Featured on Good Morning America - The revolutionary app that's helping millions discover the truth about
            their relationships
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Red gradient background matching the reference */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500 via-red-600 to-red-700">
            {!isPlaying ? (
              <>
                {/* Video Thumbnail with Overlay */}
                <div className="relative aspect-video">
                  {/* Background image from the news segment */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                      backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-27%20at%2014.13.56.png-rem8y11c4gTvnstatlwoECF5QmQKrR.jpeg')`,
                      backgroundPosition: "center 30%", // Adjust vertical position to ensure content fits
                    }}
                  />

                  {/* Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 text-white">
                    {/* Play Button */}
                    <button
                      onClick={handlePlayClick}
                      className="mb-4 md:mb-6 bg-black/50 backdrop-blur-sm rounded-full p-4 md:p-6 hover:bg-black/70 transition-all duration-300 transform hover:scale-110 group"
                      aria-label="Play video"
                    >
                      <Play size={32} className="ml-1 group-hover:scale-110 transition-transform" fill="white" />
                    </button>

                    {/* Title Text */}
                    <h3 className="text-xl md:text-3xl font-bold text-center mb-2">Watch CheatScanner on</h3>
                    <div className="bg-black/60 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg mb-4">
                      <p className="text-2xl md:text-4xl font-black">Good Morning America</p>
                    </div>

                    {/* News Ticker Style Banner */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 p-2 md:p-4">
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="bg-white text-red-600 px-2 py-1 md:px-4 md:py-2 rounded font-bold text-xs md:text-sm flex items-center gap-1 md:gap-2">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse animation-delay-200"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse animation-delay-400"></div>
                          </div>
                          CHEATSCANNER
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-white font-bold text-xs md:text-base whitespace-nowrap animate-scroll">
                            NEW THIS MORNING: NEW WEBSITE TO BUST CHEATING PARTNERS? "CHEATSCANNER" TRACKS DATING APP
                            ACTIVITY • BREAKING: MILLIONS OF USERS DISCOVERING THE TRUTH
                          </p>
                        </div>
                        <div className="hidden md:block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">
                          GMA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* YouTube Embed */
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/0IfitNPg3v4?autoplay=1"
                  title="CheatScanner on Good Morning America"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

          {/* Trust Indicators Below Video */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="bg-red-50 rounded-lg p-3 md:p-4">
                <Star className="text-red-500 mx-auto mb-2" size={24} />
                <p className="font-bold text-gray-900">5.2M Viewers</p>
                <p className="text-sm text-gray-600">Watched on GMA</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-red-50 rounded-lg p-3 md:p-4">
                <div className="text-red-500 font-bold text-2xl mb-2">#1</div>
                <p className="font-bold text-gray-900">Trending App</p>
                <p className="text-sm text-gray-600">After TV Feature</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-red-50 rounded-lg p-3 md:p-4">
                <div className="text-red-500 font-bold text-2xl mb-2">93%</div>
                <p className="font-bold text-gray-900">Success Rate</p>
                <p className="text-sm text-gray-600">Finding Profiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-block;
          padding-left: 100%;
          animation: scroll 20s linear infinite;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </section>
  )
}
