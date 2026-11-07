import { useState } from "react"

export const InteractivePreview = () => {
  const [cardHolder, setCardHolder] = useState("VALUED CITIZEN")
  const [inputName, setInputName] = useState("VALUED CITIZEN")
  const [activeTier, setActiveTier] = useState("PREMIER")

  const handleApply = (e) => {
    e.preventDefault()
    if (inputName.trim()) {
      setCardHolder(inputName.trim().toUpperCase())
    }
  }

  return (
    <section id="preview" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 border-t border-[#1E293B]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#F5B942] text-xs font-bold tracking-widest uppercase">
          LIVE CARDHOLDER PORTAL
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3 tracking-tight">
          Your Card. Your Status.
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base">
          Preview your personalized, fictional membership pass before presenting it to an amused extortionist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F172A]/70 border border-[#1E293B] rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        {/* Left Side: The Interactive Digital Card */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-black border-2 border-[#F5B942]/70 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-[#F5B942]/10 relative overflow-hidden">
            {/* Ambient Card Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#F5B942]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Card Header */}
            <div className="flex items-start justify-between border-b border-[#334155]/60 pb-4 mb-5">
              <div>
                <div className="text-xl font-black text-white tracking-wider">
                  CHANDA <span className="text-[#F5B942]">CARD</span>
                </div>
                <div className="text-[10px] text-[#94A3B8] font-bold tracking-widest uppercase mt-0.5">
                  GOVERNMENT-LOOKING PASS
                </div>
              </div>

              {/* Mock QR Code */}
              <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shrink-0 shadow-sm">
                <ion-icon name="qr-code" style={{ fontSize: "36px", color: "#0F172A" }}></ion-icon>
              </div>
            </div>

            {/* Member ID */}
            <div className="mb-5">
              <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest block uppercase">
                MEMBER ID
              </span>
              <span className="text-sm sm:text-base font-mono font-bold text-[#F5B942] tracking-wider">
                CC-8829-0092-PARODY
              </span>
            </div>

            {/* Cardholder & Tier Details */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest block uppercase">
                  CARD HOLDER
                </span>
                <span className="text-base sm:text-lg font-black text-white tracking-wide truncate block">
                  {cardHolder}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest block uppercase">
                  PLAN TIER
                </span>
                <span className="text-base sm:text-lg font-black text-[#F5B942] tracking-wide">
                  {activeTier}
                </span>
              </div>
            </div>

            {/* Status Footer on Card */}
            <div className="pt-4 border-t border-[#334155]/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold text-[#94A3B8] tracking-widest uppercase block">
                  STATUS
                </span>
                <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  PROTECTED*
                </span>
              </div>
              <span className="text-[9px] text-[#64748B] text-right italic max-w-[140px] leading-tight">
                *Status operates exclusively within satirical parameters
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Live Status Panel & Customizer */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#1E293B]/60 border border-[#334155] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#334155]/70">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Card Status Overview
              </h3>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                ● Active
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-[#334155]/40">
                <span className="text-[#94A3B8]">Current Plan</span>
                <span className="text-white font-semibold">Premier Elite</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#334155]/40">
                <span className="text-[#94A3B8]">Coverage Level</span>
                <span className="text-white font-semibold">Unlimited*</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#334155]/40">
                <span className="text-[#94A3B8]">Verification Engine</span>
                <span className="text-[#F5B942] font-semibold">QR Fictional Verified</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#94A3B8]">Peace of Mind Index</span>
                <span className="text-emerald-400 font-semibold">99.9% Laughs</span>
              </div>
            </div>
          </div>

          {/* Customizer Input */}
          <form onSubmit={handleApply} className="bg-[#1E293B]/60 border border-[#334155] rounded-2xl p-6">
            <label className="text-xs font-bold text-[#F5B942] tracking-wider uppercase block mb-3">
              TEST YOUR CARD NAME:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full bg-[#0F172A] border border-[#334155] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F5B942] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#F5B942] hover:bg-[#FBBF24] text-black font-bold px-5 py-2.5 rounded-xl text-sm transition-colors cursor-pointer shrink-0"
              >
                Apply
              </button>
            </div>
            <p className="text-[11px] text-[#64748B] mt-3 italic leading-relaxed">
              *Unlimited within the fictional universe of this website. If anyone in real life demands payment, please contact law enforcement rather than showing this screen.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
