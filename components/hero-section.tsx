"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/modern-city-skyline-at-dusk-with-glass-buildings-a.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/90">Mais de 500 estruturas implementadas</span>
          </div>

          {/* Main Title */}
          <h1 className="animate-on-scroll opacity-0 animation-delay-200 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Proteja seu patrimônio.
            <br />
            <span className="text-titanium-light">Expanda globalmente.</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll opacity-0 animation-delay-400 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Estruturação offshore personalizada para proteção patrimonial, planejamento tributário e expansão
            internacional do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base px-8 py-6"
            >
              <Link href="https://api.whatsapp.com/send/?phone=5511982712025&text=Ol%C3%A1%2C+gostaria+de+agendar+um+diagn%C3%B3stico+estrat%C3%A9gico+com+a+Bezerra+Borges+Advogados" target="_blank">
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 bg-transparent"
            >
              <Link href="#processo">Conhecer o Processo</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll opacity-0 animation-delay-800 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Shield, value: "100%", label: "Conformidade Legal" },
              { icon: Globe, value: "15+", label: "Jurisdições" },
              { icon: TrendingUp, value: "R$2Bi+", label: "Patrimônio Estruturado" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-background/5 backdrop-blur-sm rounded-lg border border-background/10"
              >
                <stat.icon className="h-8 w-8 text-titanium-light mb-3" />
                <span className="text-3xl font-bold text-primary-foreground mb-1">{stat.value}</span>
                <span className="text-sm text-primary-foreground/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
