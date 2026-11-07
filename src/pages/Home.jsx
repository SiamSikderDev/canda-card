import { HeroSection } from "../components/HeroSection"
import { SatireNoticeBanner } from "../components/SatireNoticeBanner"
import { WhyChandaCard } from "../components/WhyChandaCard"
import { UseCases } from "../components/UseCases"
import { HowItWorks } from "../components/HowItWorks"
import { PricingPlans } from "../components/PricingPlans"
import { SatireStats } from "../components/SatireStats"
import { InteractivePreview } from "../components/InteractivePreview"
import { FAQSection } from "../components/FAQSection"
import { CTASection } from "../components/CTASection"

export const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <SatireNoticeBanner />
      <WhyChandaCard />
      <UseCases />
      <HowItWorks />
      <PricingPlans />
      <SatireStats />
      <InteractivePreview />
      <FAQSection />
      <CTASection />
    </main>
  )
}