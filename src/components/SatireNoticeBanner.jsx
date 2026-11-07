export const SatireNoticeBanner = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4">
      <div className="w-full rounded-2xl bg-gradient-to-r from-[#F59E0B]/15 via-[#F59E0B]/5 to-transparent border border-[#F59E0B]/30 p-4 sm:p-5 flex items-start sm:items-center gap-3.5 shadow-sm">
        <div className="w-8 h-8 rounded-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center shrink-0 text-base">
          ⚠️
        </div>
        <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
          <strong className="text-[#F5B942] font-semibold">Important Legal & Safety Disclaimer:</strong>{" "}
          Chanda Card is an artistic satire and social commentary concept. It cannot stop crime, prevent violence, deter extortionists, or replace legal law enforcement authorities.
        </p>
      </div>
    </section>
  )
}
