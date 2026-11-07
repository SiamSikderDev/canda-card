const useCases = [
  {
    emoji: "🏪",
    title: "Shop Owners",
    description:
      "Because apparently your grocery store, tea stall, or pharmacy needs a tiered monthly subscription plan to exist in peace.",
  },
  {
    emoji: "🏢",
    title: "Office Owners",
    description:
      "Protect your corporate workplace with premium fictional security passes so meetings can run without impromptu committee visits.",
  },
  {
    emoji: "🎬",
    title: "Studio Owners",
    description:
      "Keep your film sets, music recordings, and photography shoots “safeguarded” with our Popular 24-hour shoot day pass.",
  },
  {
    emoji: "🏞️",
    title: "Land Owners",
    description:
      "Premier plan includes fictional unlimited vacant land coverage. Plants a theoretical golden flag across your boundary lines.",
  },
  {
    emoji: "🏠",
    title: "Homeowners",
    description:
      "Because your residential gate deserves a shiny fintech card sticker to signal that you take social satire very seriously.",
  },
  {
    emoji: "🎪",
    title: "Event Organizers",
    description:
      "Hosting a cultural evening? Flash your collective Chanda Card whenever a local youth delegation comes asking for sponsorship.",
  },
]

export const UseCases = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 border-t border-[#1E293B]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[#F5B942] text-xs font-bold tracking-widest uppercase">
          TAILORED ABSURDITY
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3 tracking-tight">
          Made For Every Situation
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base">
          Customized fictional protection packages engineered for every modern sector.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0F172A]/80 hover:bg-[#1E293B]/60 border border-[#1E293B] hover:border-[#334155] rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {item.emoji}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F5B942] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
