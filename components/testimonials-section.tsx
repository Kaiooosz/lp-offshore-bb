"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    content:
      "A estruturação offshore transformou completamente a gestão do meu patrimônio. A equipe foi excepcional em cada etapa do processo, sempre com total transparência.",
    author: "Carlos M.",
    role: "Empresário",
    rating: 5,
    image: "/testimonial_carlos.png",
  },
  {
    content:
      "Depois de anos procurando uma solução segura para internacionalizar meus investimentos, finalmente encontrei profissionais que entendem profundamente do assunto.",
    author: "Patricia R.",
    role: "Investidora",
    rating: 5,
    image: "/testimonial_patricia.png",
  },
  {
    content:
      "O planejamento sucessório que fizemos através da estrutura offshore trouxe tranquilidade para toda a família. Processo claro, legal e muito bem documentado.",
    author: "Roberto S.",
    role: "Médico",
    rating: 5,
    image: "/testimonial_roberto.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-black relative" id="depoimentos">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollAnimation className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter uppercase leading-tight mb-8">
            CONFIADO POR QUEM CONSTRÓI PATRIMÔNIO
          </h2>
          <p className="text-lg text-white/50 font-light max-w-xl mx-auto">
            Histórias reais de quem já transformou seu contexto financeiro e globalizou seus negócios com a nossa assessoria.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <div className="bg-[#0f0f0f] p-10 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col h-full group shadow-2xl shadow-black">
                <p className="text-white/60 leading-relaxed mb-8 flex-1 text-sm md:text-base font-light tracking-wide">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-white text-white opacity-80" />
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                  <div>
                    <p className="font-light text-white uppercase tracking-wider text-sm mb-1">{testimonial.author}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
