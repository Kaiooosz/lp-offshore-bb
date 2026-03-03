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
        <ScrollAnimation className="text-center mb-28 md:mb-40">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-titanium-light rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-titanium-light uppercase tracking-[0.4em] leading-none">Nossa Metodologia</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-bold leading-[0.9] mb-10 tracking-tighter">
            A sua jornada <br className="hidden md:block" /> em <span className="text-titanium-light italic">6 Passos.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-primary-foreground/40 max-w-2xl mx-auto leading-relaxed font-light tracking-tight px-4">
            Uma estruturação estratégica, <span className="text-white">100% digital</span> e focada na proteção perpétua do seu patrimônio.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32 md:gap-y-40 max-w-7xl mx-auto relative px-6 child:mx-auto">
          {/* Connector Lines (Desktop Only) */}
          <div className="hidden lg:block absolute top-[60px] left-32 right-32 h-[1px] bg-gradient-to-r from-transparent via-titanium-light/20 to-transparent pointer-events-none" />

          {steps.map((step, index) => (
            <ScrollAnimation key={index} delay={index * 100} className="relative group w-full">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-12">
                  {/* Glowing Aura */}
                  <div className="absolute inset-0 bg-titanium-light/5 blur-[50px] rounded-full scale-[2] opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  {/* Main Circle */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary border-2 border-white/5 flex items-center justify-center group-hover:border-titanium-light/50 group-hover:scale-110 transition-all duration-700 shadow-2xl">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-titanium-light italic group-hover:text-white transition-colors">{step.number}</span>

                    {/* Floating Detail */}
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-titanium-light flex items-center justify-center shadow-xl translate-x-3 -translate-y-3 group-hover:scale-110 transition-transform">
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>
                  <div className="w-10 h-1 bg-titanium-light/20 mx-auto rounded-full group-hover:w-24 group-hover:bg-titanium-light transition-all duration-1000" />
                  <p className="text-primary-foreground/40 leading-relaxed text-sm sm:text-lg font-light max-w-[300px] mx-auto group-hover:text-primary-foreground/70 transition-colors">
                    {step.description}
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
