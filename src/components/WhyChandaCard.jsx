const features = [
  {
    number: "01 — SIMPLICITY",
    title: "One Card",
    description: "One card. One identity. Infinite confidence in any imaginary standoff.",
    icon: "card-outline",
  },
  {
    number: "02 — CRYPTOGRAPHY",
    title: "QR Verified",
    description: "Because apparently even fictional protection needs modern cryptographic QR verification.",
    icon: "qr-code-outline",
  },
  {
    number: "03 — AURA",
    title: "Premium Status",
    description: "Look remarkably important and officially covered, even when nobody asked for proof.",
    icon: "sparkles-outline",
  },
  {
    number: "04 — PURE PARODY",
    title: "Peace of Mind",
    description: "The only thing guaranteed is the punchline. Zero actual physical security included.",
    icon: "shield-checkmark-outline",
  },
]

export const WhyChandaCard = () => {
  return (
    <section id="why-chanda" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[#F5B942] text-xs font-bold tracking-widest uppercase">
          VALUE PROPOSITION
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3 tracking-tight">
          Why Chanda Card?
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base">
          Premium fintech aesthetics engineered strictly for conversational relief.
        </p>
      </div>

      {/* 4 Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-[#0F172A]/70 hover:bg-[#0F172A] border border-[#1E293B] hover:border-[#F5B942]/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F5B942]/5"
          >
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] group-hover:bg-[#F59E0B]/15 border border-[#334155] group-hover:border-[#F5B942]/40 flex items-center justify-center text-xl text-[#F5B942] mb-5 transition-colors">
                <ion-icon name={item.icon}></ion-icon>
              </div>

              {/* Number Label */}
              <span className="text-[11px] font-bold text-[#94A3B8] tracking-widest block mb-2">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F5B942] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom accent glow on hover */}
            <div className="w-8 h-1 rounded-full bg-transparent group-hover:bg-[#F5B942] mt-6 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  )
}
