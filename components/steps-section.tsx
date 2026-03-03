"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Target, Search, Settings, FileText, CreditCard, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Entenda o seu objetivo",
    description: "Isenção de impostos? Blindagem patrimonial? Alinhamos o objetivo para definir a melhor jurisdição.",
  },
  {
    number: "02",
    icon: Search,
    title: "Escolha o país ideal",
    description: "Analisamos custos, proteção jurídica e facilidade de compliance para priorizar o que realmente importa.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Defina o serviço ideal",
    description: "Escolha o escopo: Abertura simples ou Pacote Completo (conta, gateways, suporte humanizado).",
  },
  {
    number: "04",
    icon: FileText,
    title: "Formulário rápido",
    description: "Escolha o serviço na página do país e preencha um formulário curto (~2 min) com os dados necessários.",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Faça o pagamento",
    description: "Conclua o pagamento 100% online. Você receberá confirmação e um gestor entrará em contato.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Até a conclusão",
    description: "Tratamos de tudo. Prazo de 5 a 90 dias. Para a conta, enviaremos instruções para verificação facial.",
  },
]

export function StepsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" id="processo">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-titanium-light/5 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-titanium-light/5 rounded-full -ml-48 -mb-48 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollAnimation className="text-center mb-20">
          <span className="text-sm font-bold text-titanium-light uppercase tracking-[0.3em] bg-primary-foreground/5 px-6 py-2 rounded-full border border-primary-foreground/10">Metodologia</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mt-10 mb-8 leading-[1.1]">
            Monte a sua Offshore <br className="hidden md:block" /> em 6 Passos!
          </h2>
          <p className="text-xl text-primary-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Sem viajar para fora, faça tudo 100% online através da nossa plataforma exclusiva.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="group relative">
                <div className="flex items-start gap-6">
                  <div className="flex-none">
                    <div className="relative">
                      <div className="absolute inset-0 bg-titanium-light/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-16 h-16 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center group-hover:border-titanium-light/50 group-hover:bg-primary-foreground/10 transition-all duration-500 transform group-hover:-rotate-6">
                        <step.icon className="w-8 h-8 text-titanium-light" />
                      </div>
                      <span className="absolute -top-3 -left-3 font-serif text-sm font-bold text-primary-foreground/20 italic">{step.number}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold tracking-tight group-hover:text-titanium-light transition-colors duration-300">{step.title}</h3>
                    <p className="text-primary-foreground/50 leading-relaxed text-sm lg:text-base">{step.description}</p>
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
