"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

const steps = [
  {
    number: "01",
    title: "Diagnóstico Inicial",
    description:
      "Análise completa do seu perfil patrimonial, objetivos e necessidades específicas para definir a melhor estratégia.",
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description:
      "Elaboração de um plano personalizado com escolha da jurisdição ideal e estrutura societária adequada.",
  },
  {
    number: "03",
    title: "Implementação",
    description:
      "Abertura da empresa, conta bancária internacional e toda documentação necessária com acompanhamento total.",
  },
  {
    number: "04",
    title: "Gestão Contínua",
    description: "Suporte permanente com compliance, declarações fiscais e assessoria para decisões estratégicas.",
  },
]

export function StepsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground" id="processo">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-medium text-titanium-light uppercase tracking-wider">Metodologia</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Como estruturamos seu Offshore
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto text-pretty">
            Um processo claro, seguro e totalmente acompanhado por especialistas.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <div className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-foreground/20" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-titanium-light mb-6">
                    <span className="font-serif text-3xl font-bold text-titanium-light">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
