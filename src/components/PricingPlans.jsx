import { Button } from "./Button"

const plans = [
  {
    name: "BASIC",
    badge: "Starter Tier",
    duration: "2 HOURS",
    durationLabel: "FICTIONAL PROTECTION DURATION",
    description:
      "For those brief moments when you just need a little fictional peace of mind while crossing the market.",
    featured: false,
    buttonText: "Choose Basic",
    features: [
      { text: "2 hours fictional protection", included: true },
      { text: "Digital Chanda Card", included: true },
      { text: "QR verification (parody)", included: true },
      { text: "Basic fictional support", included: true },
      { text: "Satirical protection status badge", included: true },
      { text: "Shop & studio coverage", included: false },
    ],
  },
  {
    name: "POPULAR",
    badge: "★ Recommended Choice",
    duration: "24 HOURS",
    durationLabel: "FULL DAY IMAGINARY COVERAGE",
    description:
      "For shops, creative studios, commercial offices, and anyone who wants a full day of uninterrupted imaginary protection.",
    featured: true,
    tag: "MOST POPULAR",
    buttonText: "Choose Popular",
    features: [
      { text: "24-hour fictional protection", included: true },
      { text: "Physical-style digital card asset", included: true },
      { text: "QR verification badge", included: true },
      { text: "Shop & studio imaginary coverage", included: true },
      { text: "Priority fictional support hotline", included: true },
      { text: "Live parody status dashboard", included: true },
    ],
  },
  {
    name: "PREMIER",
    badge: "Enterprise Elite",
    duration: "UNLIMITED",
    durationLabel: "MAXIMUM SATIRICAL COVERAGE",
    description:
      "Maximum fictional coverage for your shop, studio, vacant land, and everything else you wish could be protected by a shiny card.",
    featured: false,
    buttonText: "Go Premier",
    footnote: "“Unlimited refers to the fictional concept only.”",
    features: [
      { text: "Unlimited fictional protection", included: true },
      { text: "Shop & commercial office coverage", included: true },
      { text: "Media studio & shoot coverage", included: true },
      { text: "Vacant land boundary coverage", included: true },
      { text: "Priority humorous support", included: true },
      { text: "Unlimited “Peace of Mind”", included: true },
    ],
  },
]

const comparisonData = [
  { feature: "Protection Duration", basic: "2 Hours", popular: "24 Hours", premier: "Unlimited" },
  { feature: "Digital Card", basic: "✓", popular: "✓", premier: "✓" },
  { feature: "QR Verification", basic: "✓", popular: "✓", premier: "✓" },
  { feature: "Shop Protection", basic: "—", popular: "✓", premier: "✓" },
  { feature: "Studio Coverage", basic: "—", popular: "✓", premier: "✓" },
  { feature: "Vacant Land", basic: "—", popular: "—", premier: "✓ (Parody)" },
  { feature: "Priority Support", basic: "—", popular: "✓ 24/7", premier: "✓ 24/7" },
  { feature: "Unlimited Coverage", basic: "—", popular: "—", premier: "✓*" },
]

export const PricingPlans = () => {
  return (
    <section id="plans" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 border-t border-[#1E293B]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#F5B942] text-xs font-bold tracking-widest uppercase">
          SUBSCRIPTION TIERS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3 tracking-tight">
          Choose Your Chanda Plan
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base">
          Because apparently even imaginary protection needs modern tiered SaaS pricing.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
        {plans.map((p, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              p.featured
                ? "bg-[#0F172A] border-2 border-[#F5B942] shadow-[0_0_40px_rgba(245,185,66,0.15)] -translate-y-2 lg:-translate-y-4"
                : "bg-[#0F172A]/70 border border-[#1E293B] hover:border-[#334155]"
            }`}
          >
            {/* Featured Ribbon Tag */}
            {p.tag && (
              <div className="absolute -top-3.5 right-6 bg-[#F5B942] text-black text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-md">
                {p.tag}
              </div>
            )}

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#F5B942] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-3 py-1 rounded-full">
                  {p.badge}
                </span>
                <span className="text-sm font-bold text-[#CBD5E1] tracking-wider">
                  {p.name}
                </span>
              </div>

              {/* Duration Heading */}
              <div className="mb-2">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {p.duration}
                </div>
                <div className="text-[11px] font-bold text-[#94A3B8] tracking-widest uppercase mt-1">
                  {p.durationLabel}
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed my-5">
                {p.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 pt-4 border-t border-[#1E293B] mb-8">
                {p.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    {f.included ? (
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    ) : (
                      <span className="text-[#475569] font-bold shrink-0">—</span>
                    )}
                    <span className={f.included ? "text-[#E2E8F0]" : "text-[#64748B] line-through"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action Button */}
            <div>
              {p.featured ? (
                <Button
                  title={p.buttonText}
                  icon="arrow-forward-outline"
                  background="#FBBF24"
                  fontSize="14px"
                />
              ) : (
                <button className="w-full bg-[#1E293B] hover:bg-[#334155] border border-[#334155] text-white py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer">
                  {p.buttonText}
                </button>
              )}
              {p.footnote && (
                <p className="text-[10px] text-[#64748B] text-center mt-3 italic">
                  {p.footnote}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comprehensive Comparison Table */}
      <div className="w-full bg-[#0F172A]/90 border border-[#1E293B] rounded-3xl p-6 sm:p-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center sm:text-left">
          Detailed Tier Comparison
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#1E293B] text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                <th className="py-4 px-4">Feature</th>
                <th className="py-4 px-4 text-center">Basic</th>
                <th className="py-4 px-4 text-center text-[#F5B942]">Popular</th>
                <th className="py-4 px-4 text-center">Premier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]/60 text-xs sm:text-sm">
              {comparisonData.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#1E293B]/30 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">{row.feature}</td>
                  <td className="py-3.5 px-4 text-center text-[#CBD5E1]">{row.basic}</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-[#F5B942] bg-[#F59E0B]/5">
                    {row.popular}
                  </td>
                  <td className="py-3.5 px-4 text-center text-[#CBD5E1]">{row.premier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
