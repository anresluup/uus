"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import Link from "next/link"

interface FaqItem {
  question: string
  answer: string
  isOpen: boolean
}

export default function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "Is it legal to use CheaterScanner?",
      answer:
        "Yes, CheaterScanner is legal to use. We only search for publicly available information on dating platforms that anyone could find manually. However, how you use this information is your responsibility—we recommend open and honest conversations about your concerns. Learn more about our terms of service and privacy policy.",
      isOpen: true,
    },
    {
      question: "How accurate are the results?",
      answer:
        "Our results are highly accurate with a 92-95% match rate. We use advanced AI algorithms to scan and match profiles across multiple dating platforms. However, we always recommend using our service as one tool among many for gathering information.",
      isOpen: false,
    },
    {
      question: "How long does a search take?",
      answer:
        "Most searches complete within 2-5 minutes. The exact time depends on the complexity of the search and the number of platforms being scanned. Our AI bots work quickly to provide you with comprehensive results.",
      isOpen: false,
    },
    {
      question: "What if I think the results are inaccurate?",
      answer:
        "If you believe the results are inaccurate, you can contact our support team for a review. We take accuracy very seriously and will investigate any concerns thoroughly.",
      isOpen: false,
    },
    {
      question: "How will this appear on my payment statement?",
      answer:
        "Your payment will appear as a generic business transaction labeled as 'Web Services' or similar discreet description. We understand the sensitive nature of our service and ensure complete privacy in all aspects.",
      isOpen: false,
    },
  ])

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen }
        }
        return faq
      }),
    )
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <div
                className="flex justify-between items-center border-b pb-3 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                {faq.isOpen ? (
                  <Minus className="text-red-500" size={18} />
                ) : (
                  <Plus className="text-red-500" size={18} />
                )}
              </div>
              {faq.isOpen && (
                <div className="pt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Have more questions?{" "}
              <Link href="#" className="text-red-500 hover:underline">
                Visit our complete FAQ page.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
