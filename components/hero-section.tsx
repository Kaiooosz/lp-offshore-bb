"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const stats = [
  { tag: "JURISDIÇÕES", value: "15+" },
  { tag: "ESTRUTURAS", value: "500+" },
  { tag: "MITIGAÇÃO", value: "ROBUSTA" },
  { tag: "CONFORMIDADE", value: "ORIENTADA" },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleConsultationCheckout = () => {
    const section = document.getElementById("consultoria")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden bg-black pt-40 pb-12"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 grayscale"
        style={{ backgroundImage: "url(/modern-city-skyline-at-dusk-with-glass-buildings-a.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-center">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <span className="text-[10px] md:text-xs text-white/50 tracking-[0.28em] uppercase font-light mb-5 block">
            Bezerra Borges Advogados
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-light leading-[0.9] tracking-tighter mb-5 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30">
            ESTRUTURAÇÃO<br />INTERNACIONAL OFFSHORE
          </h1>
          <p className="text-lg md:text-xl text-white/45 max-w-3xl mx-auto leading-relaxed tracking-wide font-light">
            Para empresários, investidores e profissionais digitais que precisam de uma estrutura lícita,
            personalizada e defensável para patrimônio, recebimentos e operação global.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
          <Button
            className="btn-shimmer bg-transparent hover:bg-white text-white hover:text-black rounded-full px-12 py-8 text-sm font-light tracking-widest uppercase transition-all border border-white/30 backdrop-blur-md"
            onClick={handleConsultationCheckout}
          >
            AGENDAR CONSULTORIA
          </Button>
        </div>

        <div className="w-full mt-24 border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.tag}
              className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <p className="text-[10px] sm:text-xs text-white/40 tracking-[0.2em] font-light mb-2 uppercase">{stat.tag}</p>
              <p className="text-2xl sm:text-3xl text-white font-light tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
