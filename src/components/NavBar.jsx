import { useState } from "react"
import LOGO from "../assets/Background.png"
import { Button } from "./Button"
import { useMediaQuery } from "react-responsive"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Plans", href: "#plans" },
  { name: "Why Chanda Card", href: "#why-chanda" },
  { name: "Preview", href: "#preview" },
  { name: "FAQ", href: "#faq" },
]

export const NavBar = () => {
  const [navDrawer, setNavDrawer] = useState(false)
  const isSmall = useMediaQuery({ query: "(max-width: 988px)" })

  const handleScroll = (href) => {
    setNavDrawer(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="w-full bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1E293B] sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Brand Logo & Badges */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5B942]/30 to-[#F59E0B]/10 p-1 flex items-center justify-center border border-[#F5B942]/40 shadow-sm shadow-[#F5B942]/20">
            <img src={LOGO} alt="Chanda Card Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[20px] text-white font-bold tracking-tight">
                Chanda<span className="text-[#F5B942]">Card</span>
              </span>
              <span className="text-[#F5B942] text-[9px] font-semibold bg-[#F59E0B]/15 border border-[#F59E0B]/30 py-[2px] px-[6px] rounded-md tracking-wider">
                PARODY
              </span>
            </div>
            <p className="text-[10px] text-[#94A3B8] tracking-widest font-medium uppercase">
              Fictional Protection Suite
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        {!isSmall && (
          <nav>
            <ul className="flex items-center gap-7">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-[#94A3B8] hover:text-[#F5B942] transition-colors text-[14px] font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Header Action / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            title={"Get Your Card"}
            icon={"arrow-forward-outline"}
            background={"#FBBF24"}
            onClick={() => handleScroll("#plans")}
          />

          {isSmall && (
            <button
              onClick={() => setNavDrawer((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="text-white text-2xl p-2 rounded-lg bg-[#1E293B] border border-[#334155] cursor-pointer flex items-center justify-center"
            >
              <ion-icon name={navDrawer ? "close-outline" : "menu-outline"}></ion-icon>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isSmall && navDrawer && (
        <div className="bg-[#0B0F19] border-b border-[#1E293B] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href)}
              className="text-left text-[#CBD5E1] hover:text-[#F5B942] py-2 text-[15px] font-medium border-b border-[#1E293B]/40"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}