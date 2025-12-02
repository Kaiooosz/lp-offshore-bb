import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ObjectionsSection } from "@/components/objections-section"
import { WhyOffshoreSection } from "@/components/why-offshore-section"
import { ProcessSection } from "@/components/process-section"
import { StepsSection } from "@/components/steps-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"

export default function OffshoreLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ObjectionsSection />
      <WhyOffshoreSection />
      <StepsSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
