import { Button } from "./Button"
import CARD from "../assets/Digital Chanda Card.png"

export const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="w-full relative overflow-hidden py-12 md:py-20 px-4 sm:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column - Copy & Metrics */}
        <div className="w-full lg:max-w-2xl flex flex-col gap-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/25 w-fit">
            <span className="text-yellow-400 text-xs">✨</span>
            <span className="text-[#F5B942] text-xs font-semibold tracking-wider uppercase">
              THE MOST UNEXPECTED CARD IN BANGLADESH
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            When They Ask for{" "}
            <span className="text-[#F5B942] underline decoration-[#F5B942]/30 decoration-wavy">Chanda</span>, Just{" "}
            <span className="text-[#F5B942]">Show Your</span> Card.
          </h1>

          {/* Subtitle / Copy */}
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            Meet <strong className="text-white">Chanda Card</strong> — a fictional solution to a very real problem. Choose your protection plan, flash your golden badge, and enjoy the peace of mind that comes with… well, apparently having the right card.
          </p>

          {/* Satire guarantee tag */}
          <div className="flex items-center gap-2 text-xs text-[#CBD5E1] bg-[#1E293B]/70 border border-[#334155] rounded-xl px-3 py-2 w-fit">
            <span className="text-amber-400">🛡️</span>
            <span>100% fictional. 0% actual protection guarantee.</span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              title="Get Your Chanda Card"
              icon="arrow-forward-outline"
              background="#FBBF24"
              onClick={() => scrollTo("#plans")}
            />
            <button
              onClick={() => scrollTo("#plans")}
              className="bg-[#0F172A] hover:bg-[#1E293B] border border-[#334155] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-sm hover:border-[#F5B942]/40"
            >
              View Protection Plans
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="w-full border-t border-[#1E293B] pt-8 mt-2 grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs sm:text-sm text-[#94A3B8] font-medium mt-0.5">Imaginary Safety</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F5B942]">0.0s</div>
              <div className="text-xs sm:text-sm text-[#94A3B8] font-medium mt-0.5">Extortion Delay</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#34D399]">LOL</div>
              <div className="text-xs sm:text-sm text-[#94A3B8] font-medium mt-0.5">Protection Status</div>
            </div>
          </div>
        </div>

        {/* Right Column - 3D Card Simulation + Floating Badges */}
        <div className="relative w-full lg:w-[480px] flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F5B942]/20 to-transparent rounded-3xl blur-2xl -z-10" />

          {/* Floating Satirical Badges */}
          <div className="absolute -top-3 left-2 sm:-left-4 z-20 bg-[#0F172A]/90 backdrop-blur-md border border-[#334155] shadow-lg rounded-full px-3 py-1.5 text-xs text-[#CBD5E1] flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '4s' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>24H Imaginary Shield</span>
          </div>

          <div className="absolute top-[42%] -right-2 sm:-right-6 z-20 bg-[#0F172A]/90 backdrop-blur-md border border-[#F5B942]/40 shadow-lg shadow-[#F5B942]/10 rounded-full px-3.5 py-1.5 text-xs text-[#F5B942] font-medium flex items-center gap-1.5">
            <span>⚡ QR Fictional Verified</span>
          </div>

          <div className="absolute -bottom-4 left-6 sm:left-10 z-20 bg-[#0F172A]/90 backdrop-blur-md border border-[#334155] shadow-lg rounded-full px-3 py-1.5 text-xs text-[#CBD5E1] flex items-center gap-1.5">
            <span>🛡️ Infinite Peace of Mind*</span>
          </div>

          {/* Card Presentation */}
          <div className="w-full max-w-sm sm:max-w-md transition-transform duration-500 hover:scale-105 hover:-rotate-1">
            <img
              src={CARD}
              alt="Digital Chanda Card Simulation"
              className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(245,185,66,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
