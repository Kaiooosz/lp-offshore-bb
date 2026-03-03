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
  const allMembers = [...team, ...team] // Duplicar para o efeito infinito

  return (
    <section className="py-24 bg-background overflow-hidden" id="equipe">
      <div className="container mx-auto px-4 lg:px-8 mb-16 text-center">
        <ScrollAnimation>
          <span className="text-sm font-medium text-titanium uppercase tracking-widest px-4 py-1.5 bg-muted rounded-full">Nossa Equipe</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6">
            Especialistas dedicados ao seu sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Profissionais com vasta experiência em estruturação internacional e planejamento patrimonial.
          </p>
        </ScrollAnimation>
      </div>

      {/* Esteira de Colaboradores */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-infinite-scroll whitespace-nowrap py-10">
          {allMembers.map((member, index) => (
            <div key={index} className="flex-none w-[280px] md:w-[350px] px-4">
              <div className="group/card bg-muted/30 rounded-2xl overflow-hidden border border-border hover:border-titanium/30 transition-all duration-500 hover:shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover/card:grayscale-0 group-hover/card:scale-105 group-hover/card:brightness-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    <Link
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    >
                      <Linkedin className="h-5 w-5 text-black" />
                    </Link>
                  </div>
                </div>
                <div className="p-8 text-center bg-background/80 backdrop-blur-sm border-t border-border">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 tracking-tight">{member.name}</h3>
                  <p className="text-titanium font-semibold text-sm uppercase tracking-widest mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm font-medium">{member.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      {/* Company Info */}
      <div className="container mx-auto px-4 lg:px-8 mt-24">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto p-12 bg-muted/20 rounded-3xl border border-border/50 relative overflow-hidden backdrop-blur-sm shadow-inner group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-titanium/5 rounded-full -mr-32 -mt-32 blur-3xl transition-colors group-hover:bg-titanium/10" />

            <div className="relative z-10">
              <h3 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">Referência em Soluções Offshore</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Assessoramos centenas de famílias e empresas na internacionalização de ativos, sendo referência absoluta no mercado brasileiro em conformidade legal e segurança patrimonial.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center border-t border-border/30 pt-10">
                <div>
                  <span className="block text-4xl font-bold text-foreground mb-1">15+</span>
                  <span className="text-xs uppercase tracking-widest text-titanium font-bold">Anos de Experiência</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-foreground mb-1">500+</span>
                  <span className="text-xs uppercase tracking-widest text-titanium font-bold">Estruturas Implementadas</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-foreground mb-1">98%</span>
                  <span className="text-xs uppercase tracking-widest text-titanium font-bold">Satisfação do Cliente</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
