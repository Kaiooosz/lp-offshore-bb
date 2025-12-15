"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Check, X } from "lucide-react"

const objections = [
  {
    myth: "Offshore é ilegal",
    truth: "Estruturas offshore são 100% legais quando declaradas corretamente à Receita Federal",
    icon: "legal",
  },
  {
    myth: "Só serve para sonegar impostos",
    truth: "É uma ferramenta de planejamento tributário legal, utilizada por grandes empresas globais",
    icon: "tax",
  },
  {
    myth: "É muito complexo de administrar",
    truth: "Com assessoria especializada, a gestão é simples e totalmente delegável",
    icon: "simple",
  },
  {
    myth: "Precisa de muito dinheiro",
    truth: "Existem estruturas adequadas para diferentes perfis de patrimônio",
    icon: "money",
  },
]

export function ObjectionsSection() {
  return (
    <section className="py-24 bg-muted/30" id="beneficios">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-medium text-titanium uppercase tracking-wider">Desmistificando</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Quebrando objeções sobre Offshore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Entenda a verdade por trás dos mitos mais comuns e tome decisões baseadas em fatos.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {objections.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="bg-background rounded-xl p-6 border border-border hover:border-titanium/50 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <X className="h-6 w-6 text-destructive" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 line-through decoration-destructive/50">
                      {item.myth}
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4 pt-4 border-t border-border">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground leading-relaxed">{item.truth}</p>
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
