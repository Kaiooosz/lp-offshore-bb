"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Shield, Globe, Landmark, Scale, Users, LineChart } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Proteção Patrimonial",
    description: "Blindagem legal contra riscos empresariais, processos e instabilidades econômicas do país de origem.",
  },
  {
    icon: Globe,
    title: "Diversificação Global",
    description: "Acesso a investimentos internacionais, moedas fortes e mercados de capitais globais.",
  },
  {
    icon: Landmark,
    title: "Planejamento Tributário",
    description: "Otimização fiscal legal através de estruturas em jurisdições com tratados favoráveis.",
  },
  {
    icon: Scale,
    title: "Segurança Jurídica",
    description: "Jurisdições com sistemas jurídicos estáveis, common law e proteção ao investidor.",
  },
  {
    icon: Users,
    title: "Planejamento Sucessório",
    description: "Facilitação da transferência de patrimônio entre gerações com menor impacto tributário.",
  },
  {
    icon: LineChart,
    title: "Expansão de Negócios",
    description: "Estrutura para operações internacionais, importação/exportação e captação de investimentos.",
  },
]

export function WhyOffshoreSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-medium text-titanium uppercase tracking-wider">Vantagens</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Por que estruturar Offshore?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubra como uma estrutura offshore pode transformar a gestão do seu patrimônio e negócios.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="group p-8 bg-muted/30 rounded-xl border border-transparent hover:border-titanium/30 hover:bg-muted/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
