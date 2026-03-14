"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { ShieldAlert, Globe2, Wallet2, FileLock2, Briefcase, LineChart } from "lucide-react"

const features = [
  {
    icon: ShieldAlert,
    title: "Planejamento Proteção Patrimonial",
    desc: "Separe seu patrimônio pessoal dos riscos empresariais. Uma parede legal contra processos, credores e instabilidades."
  },
  {
    icon: Wallet2,
    title: "Otimização Fiscal",
    desc: "Aproveite jurisdições com impostos reduzidos ou zerados sobre ganhos de capital, dividendos e renda global."
  },
  {
    icon: Globe2,
    title: "Diversificação Global",
    desc: "Contas multimoedas nos maiores bancos do mundo e acesso a investimentos restritos ao mercado internacional."
  },
  {
    icon: FileLock2,
    title: "Confidencialidade",
    desc: "Proteja sua identidade. Em jurisdições específicas, diretores e acionistas não constam em registros públicos (anonimato total)."
  },
  {
    icon: Briefcase,
    title: "Planejamento Sucessório",
    desc: "Evite inventários demorados e custos tributários altos na transferência de patrimônio para seus herdeiros através de Trusts ou Holdings."
  },
  {
    icon: LineChart,
    title: "Expansão Operacional",
    desc: "Contrate gateways de pagamentos globais, importe e exporte de forma eficiente utilizando hubs financeiros internacionais."
  }
]

export function ObjectionsSection() {
  return (
    <section className="py-24 bg-black" id="beneficios">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation className="mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
            CONSTRUÍDO PARA QUEM EXIGE PROTEGER O QUE É SEU
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {features.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="flex flex-col items-start text-left h-full pb-8 border-b border-white/10 group">
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a] flex items-center justify-center mb-8 border border-white/5 shadow-lg group-hover:border-white/20 transition-all duration-300">
                  <item.icon className="h-5 w-5 text-white/70" />
                </div>
                <h3 className="font-light text-xl text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
