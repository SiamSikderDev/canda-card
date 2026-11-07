import { Button } from "./Button"

export const CTASection = () => {
  const scrollToPlans = () => {
    const el = document.querySelector("#plans")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 border-t border-[#1E293B]">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#1E293B]/80 via-[#0F172A] to-black border-2 border-[#F5B942]/50 p-8 sm:p-14 text-center overflow-hidden shadow-2xl shadow-[#F5B942]/10">
        {/* Golden ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#F5B942]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Shield Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 border border-[#F5B942]/40 flex items-center justify-center text-3xl mx-auto mb-6 shadow-md shadow-[#F5B942]/10 text-[#F5B942]">
          <ion-icon name="shield-checkmark"></ion-icon>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
          Ready to Feel Fictionally Protected?
        </h2>

        <p className="text-[#94A3B8] text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Choose your plan. Get your card. Enjoy the joke.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Button
            title="Get Your Chanda Card"
            icon="arrow-forward-outline"
            background="#FBBF24"
            onClick={scrollToPlans}
          />
          <button
            onClick={scrollToPlans}
            className="bg-[#1E293B] hover:bg-[#334155] border border-[#334155] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          >
            View Plans
          </button>
        </div>

        <p className="text-xs text-[#64748B] italic">
          No real protection. No real guarantees. Just satire.
        </p>
      </div>
    </section>
  )
}
