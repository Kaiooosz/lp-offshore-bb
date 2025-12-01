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
  },
  {
    content:
      "Depois de anos procurando uma solução segura para internacionalizar meus investimentos, finalmente encontrei profissionais que entendem profundamente do assunto.",
    author: "Patricia R.",
    role: "Investidora",
    rating: 5,
  },
  {
    content:
      "O planejamento sucessório que fizemos através da estrutura offshore trouxe tranquilidade para toda a família. Processo claro, legal e muito bem documentado.",
    author: "Roberto S.",
    role: "Médico",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30" id="depoimentos">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-medium text-titanium uppercase tracking-wider">Depoimentos</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Histórias reais de quem já transformou seu patrimônio com nossa assessoria.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <div className="bg-background p-8 rounded-xl border border-border hover:border-titanium/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <Quote className="h-10 w-10 text-titanium/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 flex-1">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
