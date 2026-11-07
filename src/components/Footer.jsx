import LOGO from "../assets/Background.png"

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-[#070B14] border-t border-[#1E293B] pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Col 1: Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5B942]/30 to-[#F59E0B]/10 p-1 flex items-center justify-center border border-[#F5B942]/40">
                <img src={LOGO} alt="Chanda Card" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl text-white font-extrabold tracking-tight">
                Chanda<span className="text-[#F5B942]">Card</span>
              </span>
            </div>

            <p className="text-base text-[#F5B942] font-semibold italic">
              “Show the Card. Save the Joke.”
            </p>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              A high-concept satirical parody landing page exploring the humorous absurdities of fictional security subscriptions.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
                EXPLORE
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
                <li>
                  <button onClick={() => scrollTo("#hero")} className="hover:text-[#F5B942] transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("#how-it-works")} className="hover:text-[#F5B942] transition-colors cursor-pointer">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("#plans")} className="hover:text-[#F5B942] transition-colors cursor-pointer">
                    Protection Plans
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("#why-chanda")} className="hover:text-[#F5B942] transition-colors cursor-pointer">
                    Why Chanda Card
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
                LEGAL & PARODY
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
                <li>
                  <button onClick={() => scrollTo("#faq")} className="hover:text-[#F5B942] transition-colors cursor-pointer">
                    FAQ
                  </button>
                </li>
                <li className="hover:text-[#F5B942] transition-colors cursor-pointer">
                  Satire Policy
                </li>
                <li className="hover:text-[#F5B942] transition-colors cursor-pointer">
                  Terms of Parody
                </li>
                <li className="hover:text-[#F5B942] transition-colors cursor-pointer">
                  Disclaimer Notice
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Community & Satire Tier */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              COMMUNITY
            </h4>

            {/* Placeholder social icons */}
            <div className="flex items-center gap-3">
              {["logo-github", "logo-twitter", "logo-discord"].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-lg text-[#CBD5E1] hover:text-[#F5B942] hover:border-[#F5B942]/40 transition-colors cursor-pointer"
                >
                  <ion-icon name={icon}></ion-icon>
                </div>
              ))}
            </div>

            <div className="mt-2 bg-[#1E293B]/60 border border-[#334155] rounded-xl p-3 text-xs text-[#CBD5E1]">
              <span className="text-[#F5B942] font-semibold block mb-0.5">Satire Tier: Premium High-Fi</span>
              <span>100% Guaranteed safe for laughs.</span>
            </div>
          </div>
        </div>

        {/* Full Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col gap-5 text-xs text-[#64748B] leading-relaxed">
          <p>
            <strong className="text-[#94A3B8]">Legal Satire Disclaimer:</strong> Chanda Card is an explicitly fictional satire/parody concept. It does not provide physical security, legal protection, protection from extortion, protection from vandalism, protection from theft, or any other real-world security service. It is not affiliated with any government, political party, law-enforcement agency, paramilitary organization, or private security provider in Bangladesh or abroad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#1E293B]/60 text-[#94A3B8]">
            <p>© 2026 Chanda Card. Fictional Concept. All Parody Rights Reserved.</p>
            <div className="flex items-center gap-2 text-xs">
              <span>Made with Satirical Intent</span>
              <span>•</span>
              <span className="text-[#F5B942]">100% Joke Protection</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
