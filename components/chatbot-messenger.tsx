"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { clickPayment } from "@/lib/analytics"

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

interface ChatbotMessengerProps {
  searchName: string
  searchAge?: string
}

export default function ChatbotMessenger({ searchName, searchAge }: ChatbotMessengerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { t, paymentLink, userLocation } = useLanguage()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-open and send initial message after 3 seconds
  useEffect(() => {
    if (!hasInitialized) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sendInitialMessage()
        setHasInitialized(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [hasInitialized])

  const sendInitialMessage = () => {
    const initialMessage: Message = {
      id: Date.now().toString(),
      content: `Hi! I see you found results for ${searchName}. I'm here to help you understand what we found and answer any questions about unlocking the full report. Would you like to know more about what's included?`,
      isBot: true,
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }

  const addMessage = (content: string, isBot: boolean) => {
    const message: Message = {
      id: Date.now().toString(),
      content,
      isBot,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, message])
  }

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue("")
    addMessage(userMessage, false)
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          context: {
            searchName,
            searchAge,
            userLocation: userLocation.city,
            paymentLink,
          },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      addMessage(data.response, true)
    } catch (error) {
      console.error("Chat error:", error)
      addMessage(
        "I'm sorry, I'm having trouble responding right now. Please try again or click the unlock button to access your full report.",
        true,
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleUnlockClick = () => {
    clickPayment()
    window.open(paymentLink, "_blank")
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle size={24} />
        </Button>
        {!hasInitialized && (
          <div className="absolute -top-12 -left-20 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-48">
            <div className="text-sm text-gray-700">Need help with your results?</div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-[#dc2626] text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white bg-opacity-20 rounded-full p-1 mr-3">
            <Bot size={20} />
          </div>
          <div>
            <div className="font-semibold">CheatScanner Assistant</div>
            <div className="text-xs opacity-90">Online now</div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white hover:bg-opacity-20 p-1"
        >
          <X size={18} />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isBot ? "bg-gray-100 text-gray-800" : "bg-[#dc2626] text-white"
              }`}
            >
              <div className="flex items-start">
                {message.isBot && <Bot size={16} className="mr-2 mt-0.5 flex-shrink-0 text-[#dc2626]" />}
                <div className="text-sm">{message.content}</div>
                {!message.isBot && <User size={16} className="ml-2 mt-0.5 flex-shrink-0" />}
              </div>
              {message.content.includes("unlock") && message.isBot && (
                <Button
                  onClick={handleUnlockClick}
                  className="mt-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs py-1 px-3 h-auto"
                >
                  Unlock Now
                </Button>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <div className="flex items-center">
                <Bot size={16} className="mr-2 text-[#dc2626]" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent"
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white p-2"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}
