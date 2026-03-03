"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Dr. Vinicius",
    role: "Sócio Fundador",
    specialty: "Direito Internacional e Tributário",
    image: "/vinicius 1.jpg",
    linkedin: "#",
  },
  {
    name: "Dra. Mariana",
    role: "Sócia",
    specialty: "Planejamento Patrimonial",
    image: "/mariana.jpg",
    linkedin: "#",
  },
  {
    name: "Fabiano",
    role: "Especialista",
    specialty: "Consultoria Internacional",
    image: "/fabiano.jpg",
    linkedin: "#",
  },
  {
    name: "Kaio",
    role: "Full-Stack Developer",
    specialty: "Tecnologia e Operações",
    image: "/kaio.jpg",
    linkedin: "#",
  },
  {
    name: "Alice",
    role: "Consultora",
    specialty: "Compliance",
    image: "/alice.jpg",
    linkedin: "#",
  },
  {
    name: "Allan",
    role: "Especialista",
    specialty: "Legal",
    image: "/allan.jpg",
    linkedin: "#",
  },
  {
    name: "Boaz",
    role: "Consultor",
    specialty: "Estratégia",
    image: "/boaz.jpg",
    linkedin: "#",
  },
  {
    name: "Clara",
    role: "Atendimento",
    specialty: "Suporte Especializado",
    image: "/clara.jpg",
    linkedin: "#",
  },
  {
    name: "Micaelle",
    role: "Consultora",
    specialty: "Projetos",
    image: "/micaelle.jpg",
    linkedin: "#",
  },
  {
    name: "Roberto",
    role: "Especialista",
    specialty: "Tributário",
    image: "/roberto.jpg",
    linkedin: "#",
  },
  {
    name: "Tomas",
    role: "Consultor",
    specialty: "Jurisdições",
    image: "/tomas.jpg",
    linkedin: "#",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-background" id="equipe">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-medium text-titanium uppercase tracking-wider">Nossa Equipe</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Especialistas dedicados ao seu sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Profissionais com vasta experiência em estruturação internacional e planejamento patrimonial.
          </p>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                  <Link
                    href={member.linkedin}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Linkedin className="h-5 w-5 text-foreground" />
                  </Link>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-titanium font-medium text-sm mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.specialty}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Company Info */}
        <ScrollAnimation className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-muted/30 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Sobre o Escritório</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com mais de 15 anos de experiência em direito internacional e estruturação patrimonial, nosso escritório
              já assessorou centenas de famílias e empresas na internacionalização de seus ativos. Somos referência no
              mercado brasileiro em soluções offshore seguras e em conformidade com todas as legislações aplicáveis.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <span className="block text-3xl font-bold text-foreground">15+</span>
                <span className="text-sm text-muted-foreground">Anos de Experiência</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-foreground">500+</span>
                <span className="text-sm text-muted-foreground">Estruturas Implementadas</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-foreground">98%</span>
                <span className="text-sm text-muted-foreground">Clientes Satisfeitos</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
