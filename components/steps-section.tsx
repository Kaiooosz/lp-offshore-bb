"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

const steps = [
  {
    number: "01",
    title: "Entenda o seu objetivo",
    description: "Isenção de impostos? Blindagem patrimonial? Expansão internacional? Alinhamos o objetivo para definir a melhor jurisdição.",
  },
  {
    number: "02",
    title: "Escolha o país ideal",
    description: "Analisamos custos, proteção jurídica e facilidade de compliance bancário para priorizar o que realmente importa.",
  },
  {
    number: "03",
    title: "Defina o serviço ideal",
    description: "Escolha o escopo: Abertura simples ou Pacote Completo (conta, gateways, suporte humanizado).",
  },
  {
    number: "04",
    title: "Formulário rápido",
    description: "Escolha o serviço na página do país e preencha um formulário curto (~2 min) com os dados necessários.",
  },
  {
    number: "05",
    title: "Faça o pagamento",
    description: "Conclua o pagamento 100% online. Você receberá confirmação e um gestor de contas entrará em contato.",
  },
  {
    number: "06",
    title: "Até a conclusão",
    description: "Tratamos de tudo. Prazo de 5 a 90 dias. Para a conta, enviaremos instruções para verificação facial.",
  },
]

export function StepsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground" id="processo">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-medium text-titanium-light uppercase tracking-wider">Metodologia</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-balance">
            Monte a sua Offshore em 6 Passos!
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto text-pretty">
            Sem viajar para fora, faça tudo 100% online aqui no site!
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
