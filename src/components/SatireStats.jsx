const stats = [
  {
    value: "0%",
    title: "Real-World Protection",
    subtitle: "Guaranteed non-functional",
    color: "text-red-400",
  },
  {
    value: "100%",
    title: "Fictional Confidence",
    subtitle: "Psychological satire boost",
    color: "text-white",
  },
  {
    value: "24H",
    title: "Maximum Duration",
    subtitle: "Popular plan fictional span",
    color: "text-[#F5B942]",
  },
  {
    value: "∞",
    title: "Premier Coverage",
    subtitle: "Abstract theoretical limits",
    color: "text-emerald-400",
  },
]

export const SatireStats = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-[#1E293B]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-[#0F172A]/70 border border-[#1E293B] rounded-2xl p-6 text-center flex flex-col justify-center items-center hover:border-[#334155] transition-colors"
          >
            <div className={`text-4xl sm:text-5xl font-black ${s.color} tracking-tight mb-2`}>
              {s.value}
            </div>
            <div className="text-sm sm:text-base font-bold text-white mb-1">
              {s.title}
            </div>
            <div className="text-xs text-[#94A3B8]">
              {s.subtitle}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-[#64748B] text-center mt-8 italic max-w-lg mx-auto">
        *Statistics are completely fictional and should not be used for making real-world personal or business safety decisions.
      </p>
    </section>
  )
}
