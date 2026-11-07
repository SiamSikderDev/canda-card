import { useState } from "react"

const faqs = [
  {
    question: "Is Chanda Card real?",
    answer:
      "No. Chanda Card is an entirely fictional, artistic parody and social satire project. It is created to bring humorous awareness to the real issue of extortion and informal tolls in daily life.",
  },
  {
    question: "Does it actually stop extortion?",
    answer:
      "Absolutely not. Flashing this card at a real extortionist or criminal provides 0% protection and will likely just confuse them. Please contact law enforcement if you face real illegal demands.",
  },
  {
    question: "Can I use it during an emergency?",
    answer:
      "No. In any real-world emergency, always call local emergency services (such as 999 in Bangladesh) or the police. Chanda Card has no emergency response capability or legal authority.",
  },
  {
    question: "What does “Unlimited Protection” mean?",
    answer:
      "It means unlimited laughs within the fictional boundaries of this web application. It gives you infinite theoretical swagger and zero practical immunity.",
  },
  {
    question: "Is this a real government card?",
    answer:
      "No. Chanda Card has no affiliation with the government of Bangladesh, law enforcement agencies, municipal authorities, or any official administrative bodies.",
  },
  {
    question: "Can I purchase one?",
    answer:
      "Chanda Card is completely free to customize and enjoy digitally as part of this parody project. No real currency is ever accepted or requested.",
  },
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 border-t border-[#1E293B]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[#F5B942] text-xs font-bold tracking-widest uppercase">
          ANSWERS & CLARIFICATIONS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base">
          Everything you need to know about the fictional universe of Chanda Card.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#0F172A] border-[#F5B942]/40 shadow-lg shadow-[#F5B942]/5"
                  : "bg-[#0F172A]/70 border-[#1E293B] hover:border-[#334155]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
              >
                <span className="text-base sm:text-lg font-bold text-white pr-4">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base font-bold transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#F5B942] text-black rotate-45"
                      : "bg-[#1E293B] text-[#94A3B8]"
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#94A3B8] leading-relaxed border-t border-[#1E293B]/60">
                  {item.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
