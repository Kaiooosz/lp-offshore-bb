"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Quote } from "lucide-react"

const cases = [
  {
    title: "Empresário digital com receita recorrente",
    jurisdiction: "EUA / Wyoming",
    scope: "LLC + banking + orientação fiscal brasileira",
    before: "Recebimentos internacionais misturados à pessoa física e baixa previsibilidade documental.",
    after: "Segregação de receitas, documentação organizada e trilha fiscal para operação internacional recorrente.",
  },
  {
    title: "Família empresária com patrimônio diversificado",
    jurisdiction: "Bahamas / Brasil",
    scope: "Holding patrimonial + planejamento sucessório inicial",
    before: "Ativos dispersos, múltiplos herdeiros e ausência de governança para expansão internacional.",
    after: "Mapa patrimonial, desenho de governança e estrutura compatível com sucessão e compliance fiscal.",
  },
  {
    title: "Operação internacional em revisão",
    jurisdiction: "Dubai / EUA",
    scope: "Diagnóstico de viabilidade + banking + documentação",
    before: "Estrutura existente sem clareza sobre banking, substância e obrigações no Brasil.",
    after: "Roadmap de regularização, checklist documental e próximos passos para operação defensável.",
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
            PROVA SOCIAL COM CASOS ANONIMIZADOS
          </h2>
          <p className="text-lg text-white/50 font-light max-w-xl mx-auto">
            Em mercado jurídico high-ticket, confidencialidade importa. Por isso, demonstramos contexto, jurisdição, escopo e evolução operacional sem expor clientes.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <ScrollAnimation key={caseItem.title} delay={index * 150}>
              <div className="bg-[#0f0f0f] p-10 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col h-full group shadow-2xl shadow-black">
                <Quote className="h-6 w-6 text-white/30 mb-8" />
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-3">
                  Case anonimizado
                </p>
                <h3 className="text-xl font-light text-white tracking-tight leading-snug mb-6">
                  {caseItem.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-[10px] text-white/35 uppercase tracking-[0.18em] mb-1">Jurisdição</p>
                    <p className="text-sm text-white/65 font-light">{caseItem.jurisdiction}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/35 uppercase tracking-[0.18em] mb-1">Escopo</p>
                    <p className="text-sm text-white/65 font-light">{caseItem.scope}</p>
                  </div>
                </div>

                <div className="mt-auto space-y-4 border-t border-white/10 pt-6">
                  <p className="text-sm text-white/45 leading-relaxed font-light">
                    <span className="text-white/70">Antes: </span>
                    {caseItem.before}
                  </p>
                  <p className="text-sm text-white/45 leading-relaxed font-light">
                    <span className="text-white/70">Depois: </span>
                    {caseItem.after}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
