"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

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
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black pt-40 pb-20">
      
      {/* Abstract Gradient Glows similar to Kast */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-center">
        
        {/* Main Titles */}
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-light leading-[0.9] tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20">
            É UM MUNDO<br />SELVAGEM.
          </h1>
          <h2 className="text-xl sm:text-3xl lg:text-6xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white/50 via-white/30 to-white/10">
            PROTEJA SEU PATRIMÔNIO.
          </h2>
        </div>

        {/* Subtitle */}
        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-lg md:text-xl text-white/40 max-w-2xl text-center mb-12 leading-relaxed tracking-wide font-light">
          Para empresários com faturamento acima de R$ 500 mil/ano ou patrimônio investível no exterior — estruturamos a blindagem jurídica e tributária que protege o que voce construiu.
        </p>

        {/* CTA */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
          <Button
            className="btn-shimmer bg-transparent hover:bg-white text-white hover:text-black rounded-full px-12 py-8 text-sm font-light tracking-widest uppercase transition-all border border-white/30 backdrop-blur-md"
            onClick={handleConsultationCheckout}
          >
            AGENDAR CONSULTORIA
          </Button>
        </div>


        {/* Stats Strip */}
        <div className="w-full mt-24 border-t border-white/10 pt-12 pb-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { tag: "JURISDIÇÕES", value: "15+" },
            { tag: "ESTRUTURAS", value: "500+" },
            { tag: "PROTEÇÃO", value: "MÁXIMA" },
            { tag: "COMPLIANCE", value: "100%" }
          ].map((stat, i) => (
             <div key={i} className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000" style={{ transitionDelay: `${i * 100 + 400}ms` }}>
                <p className="text-[10px] sm:text-xs text-white/40 tracking-[0.2em] font-light mb-2 uppercase">{stat.tag}</p>
                <p className="text-2xl sm:text-3xl text-white font-light tracking-tighter">{stat.value}</p>
             </div>
          ))}
        </div>

      </div>
    </section>
  )
}
