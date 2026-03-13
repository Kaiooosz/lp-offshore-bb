import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ObjectionsSection } from "@/components/objections-section"
import { WhyOffshoreSection } from "@/components/why-offshore-section"
import { StepsSection } from "@/components/steps-section"
import { JurisdictionsDetailed } from "@/components/jurisdictions-detailed"
import { JurisdictionGrid } from "@/components/jurisdiction-grid"
import { PricingSection } from "@/components/pricing-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { FAQ } from "@/components/faq"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function OffshoreLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-titanium/30 selection:text-foreground">
      <Header />
      <HeroSection />
      <ObjectionsSection />
      <WhyOffshoreSection />
      <StepsSection />
      <JurisdictionsDetailed />
      <JurisdictionGrid />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
