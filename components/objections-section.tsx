"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { ShieldAlert, Globe2, Wallet2, FileLock2, Briefcase, LineChart } from "lucide-react"

const features = [
  {
    icon: ShieldAlert,
    title: "Planejamento patrimonial",
    desc: "Segregue patrimônio pessoal e riscos empresariais com estruturas lícitas e documentadas.",
  },
  {
    icon: Wallet2,
    title: "Eficiência fiscal",
    desc: "Avalie jurisdições e regimes aplicáveis ao seu perfil, sempre com transparência fiscal e regulatória.",
  },
  {
    icon: Globe2,
    title: "Diversificação global",
    desc: "Acesse contas multimoedas, bancos internacionais e mercados fora do Brasil com planejamento operacional.",
  },
  {
    icon: FileLock2,
    title: "Confidencialidade",
    desc: "Busque maior privacidade societária conforme a jurisdição, os registros públicos e as regras de compliance aplicáveis.",
  },
  {
    icon: Briefcase,
    title: "Planejamento sucessório",
    desc: "Organize holdings, trusts ou estruturas equivalentes para reduzir atritos na transferência de patrimônio.",
  },
  {
    icon: LineChart,
    title: "Expansão operacional",
    desc: "Estruture banking, gateways e hubs internacionais para receber, pagar e operar com mais previsibilidade.",
  },
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
            <ScrollAnimation key={item.title} delay={index * 100}>
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
