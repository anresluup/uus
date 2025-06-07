"use client"

import { useState, useEffect, useRef } from "react"
import { Progress } from "@/components/ui/progress"
import { Shield, Database, CheckCircle, Cpu, Network, Zap, Brain, Lock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ScanOverlayProps {
  searchName: string
  searchAge?: string
  searchSex?: string
  searchLocation?: string
  searchPhone?: string
  searchEmail?: string
  searchFullName?: string
  onCancel: () => void
  hasPhoto?: boolean
}

export default function ScanOverlay({
  searchName,
  searchAge,
  searchSex,
  searchLocation,
  searchPhone,
  searchEmail,
  searchFullName,
  onCancel,
  hasPhoto = false,
}: ScanOverlayProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [scanLogs, setScanLogs] = useState<string[]>([])
  const logsEndRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const scanSteps = [
    { id: 0, label: "Initializing AI scan engine...", icon: <Cpu className="animate-pulse" /> },
    { id: 1, label: "Connecting to dating app networks...", icon: <Network className="text-blue-400" /> },
    { id: 2, label: "Running deep profile analysis...", icon: <Brain className="text-purple-400" /> },
    { id: 3, label: "Cross-referencing identity markers...", icon: <Database className="text-green-400" /> },
    { id: 4, label: "Generating comprehensive report...", icon: <CheckCircle className="text-red-400" /> },
  ]

  // Simulated scan logs with user information
  const generateLogMessages = () => {
    const messages = [
      "Initializing secure connection...",
      "Establishing encrypted tunnel to database...",
      "Loading neural network models...",
      "AI scan engine initialized successfully",
      `Searching for profiles with name: ${searchName}`,
    ]

    if (searchAge) {
      messages.push(`Filtering by age: ${searchAge}`)
    }

    if (searchSex) {
      messages.push(`Filtering by gender: ${searchSex}`)
    }

    if (searchLocation) {
      messages.push(`Scanning profiles in location: ${searchLocation}`)
    }

    messages.push(
      ...[
        "Connecting to Tinder API...",
        "Connecting to Bumble API...",
        "Connecting to Hinge API...",
        "Connecting to OkCupid API...",
        "Connecting to Match.com API...",
        "All connections established successfully",
        "Starting deep profile analysis...",
      ],
    )

    if (searchPhone) {
      messages.push(`Cross-referencing phone number: ${searchPhone.replace(/(\d{3})(\d{3})(\d{4})/, "***-***-$3")}`)
    }

    if (searchEmail) {
      const [username, domain] = searchEmail.split("@")
      messages.push(`Cross-referencing email: ${username.substring(0, 2)}***@${domain}`)
    }

    if (searchFullName) {
      messages.push(`Searching for full name variations: ${searchFullName}`)
    }

    messages.push(
      ...[
        "Analyzing profile metadata...",
        hasPhoto ? "Running facial recognition algorithms..." : "Analyzing name patterns...",
        "Checking activity timestamps...",
        "Analyzing messaging patterns...",
        "Detecting location patterns...",
        "Cross-referencing with social media data...",
        "Verifying identity markers...",
        "Analyzing profile authenticity...",
        "Checking for profile duplicates...",
        "Compiling digital footprint data...",
        "Generating activity timeline...",
        "Analyzing relationship status indicators...",
        "Compiling final report data...",
        "Encrypting sensitive information...",
        "Preparing visualization data...",
        "Report generation complete",
      ],
    )

    return messages
  }

  // Initialize log messages
  const [logMessages, setLogMessages] = useState<string[]>(generateLogMessages())

  useEffect(() => {
    // Scroll to bottom of logs when new logs are added
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [scanLogs])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        // Slightly faster increment to make animation 1 second shorter
        const newProgress = prevProgress + 1.05

        // Update current step based on progress
        if (newProgress > 20 && newProgress <= 40) {
          setCurrentStep(1)
        } else if (newProgress > 40 && newProgress <= 60) {
          setCurrentStep(2)
        } else if (newProgress > 60 && newProgress <= 80) {
          setCurrentStep(3)
        } else if (newProgress > 80) {
          setCurrentStep(4)
        }

        return newProgress
      })
    }, 200) // 200ms * 100 steps / 1.05 = ~19 seconds total animation

    return () => clearInterval(interval)
  }, [])

  // Add log messages at appropriate intervals
  useEffect(() => {
    const logInterval = setInterval(() => {
      const currentLogIndex = scanLogs.length
      if (currentLogIndex < logMessages.length) {
        setScanLogs((prev) => [...prev, logMessages[currentLogIndex]])
      } else {
        clearInterval(logInterval)
      }
    }, 300)

    return () => clearInterval(logInterval)
  }, [scanLogs, logMessages])

  // Animated background effect
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = []
    const particleCount = 50

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance / 500})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl w-full max-w-2xl p-3 sm:p-6 text-white relative">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center mr-4 relative">
              <Zap className="text-red-500 z-10" size={24} />
              <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">AI-Powered Dating App Scan</h2>
              <p className="text-gray-400">
                Searching for <span className="font-semibold text-red-400">{searchName}</span>
                {hasPhoto && " with advanced photo recognition"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>LIVE SCAN</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4">
            <h3 className="text-sm font-bold mb-3 text-gray-300">Scan Progress</h3>

            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 mb-4" />
            </div>

            <div className="space-y-3">
              {scanSteps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center py-1 ${
                    currentStep === step.id
                      ? "text-red-400 font-medium"
                      : currentStep > step.id
                        ? "text-green-400"
                        : "text-gray-500"
                  }`}
                >
                  <div className="mr-3 w-5 h-5 flex items-center justify-center">
                    {currentStep > step.id ? <CheckCircle size={16} /> : step.icon}
                  </div>
                  <span className="text-sm">{step.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center">
                  <Shield size={12} className="mr-1" />
                  <span>Encrypted Scan</span>
                </div>
                <div className="flex items-center">
                  <Lock size={12} className="mr-1" />
                  <span>Private & Secure</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-black/50 rounded-lg p-2 sm:p-3 h-48 sm:h-64 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-300">Scan Logs</h3>
                <div className="flex items-center text-xs text-gray-500">
                  <Cpu size={12} className="mr-1 animate-pulse" />
                  <span>AI Engine v4.2</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto font-mono text-xs text-green-400 bg-black/70 p-2 rounded">
                {scanLogs.map((log, index) => (
                  <div key={index} className="mb-1">
                    <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {log}
                  </div>
                ))}
                <div ref={logsEndRef} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2 sm:mt-3">
              <div className="bg-gray-800/50 rounded-lg p-3 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-red-400">{Math.floor(progress / 3)}</div>
                <div className="text-xs text-gray-400">Profiles Scanned</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-yellow-400">{Math.floor(progress / 10)}</div>
                <div className="text-xs text-gray-400">Potential Matches</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-green-400">{Math.floor(progress / 20)}</div>
                <div className="text-xs text-gray-400">Verified Profiles</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400 mb-4 text-center">
          This advanced scan may take up to 30 seconds. Please don't close this window.
        </div>

        <button
          onClick={onCancel}
          className="mx-auto block text-gray-400 hover:text-white text-sm font-medium transition-colors"
        >
          Cancel Scan
        </button>
      </div>
    </div>
  )
}
