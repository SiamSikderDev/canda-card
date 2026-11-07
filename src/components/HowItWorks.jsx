const steps = [
  {
    step: "01",
    title: "Choose Your Plan",
    description:
      "Pick the level of fictional protection that matches your daily situation. From a quick 2-hour tea-stall sprint to unlimited vacant land protection.",
    tag: "Tier selection instant & imaginary",
    icon: "layers-outline",
  },
  {
    step: "02",
    title: "Get Your Card",
    description:
      "Receive your premium digital Chanda Card with custom cardholder name, encrypted parody QR code, and instantaneous LOL status activation.",
    tag: "Instantly added to Apple/Google Wallet*",
    icon: "phone-portrait-outline",
  },
  {
    step: "03",
    title: "Show Your Card",
    description:
      "When the imaginary situation arrives, simply show the card with unearned confidence, maintain direct eye contact, and enjoy the imaginary protection.",
    tag: "Confidence +1000% / Practicality 0%",
    icon: "shield-checkmark-outline",
  },
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 border-t border-[#1E293B]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#F5B942] text-xs font-bold tracking-widest uppercase">
          PROTOCOL DEMONSTRATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3 tracking-tight">
          How Chanda Card Works
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base">
          Three extremely simple steps to reach peak fictional tranquility.
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#0F172A]/80 border border-[#1E293B] hover:border-[#F5B942]/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
          >
            {/* Top row with icon & large step number */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-xl text-[#F5B942] group-hover:bg-[#F59E0B]/15 group-hover:border-[#F5B942]/40 transition-colors">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                <span className="text-3xl font-black text-[#334155] group-hover:text-[#F5B942]/40 transition-colors">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F5B942] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Bottom Tag */}
            <div className="pt-4 border-t border-[#1E293B]">
              <span className="text-xs font-medium text-[#CBD5E1] bg-[#1E293B] px-3 py-1.5 rounded-lg inline-block border border-[#334155]">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Satirical Quote */}
      <div className="mt-12 text-center">
        <p className="text-xs sm:text-sm text-[#64748B] italic max-w-xl mx-auto">
          “Results may vary dramatically in the real world. Actually, please do not test this with real extortionists.”
        </p>
      </div>
    </section>
  )
}
