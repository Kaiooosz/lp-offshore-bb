"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Dr. Vinicius",
    role: "Sócio Fundador",
    specialty: "Direito Internacional e Tributário",
    image: "/vinicius.jpg",
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
]

export function TeamSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="equipe">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <ScrollAnimation className="mb-20 text-center">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full inline-block mb-8">
            Equipe
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white uppercase tracking-tighter leading-tight mb-8">
            Especialistas em estruturação global
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Profissionais dedicados a estruturação internacional, conformidade fiscal, banking e operação de capitais complexos.
          </p>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <ScrollAnimation key={member.name} delay={index * 75}>
              <div className="group/card bg-[#0f0f0f] rounded-lg overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 shadow-2xl shadow-black h-full">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex justify-end">
                    <Link
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-4 w-4 text-black" />
                    </Link>
                  </div>
                </div>
                <div className="p-8 text-left bg-black relative z-10 border-t border-white/5">
                  <h3 className="text-xl font-light text-white mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm font-light">{member.specialty}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="mt-32">
          <div className="max-w-5xl mx-auto p-12 md:p-20 bg-gradient-to-b from-[#141414] to-black rounded-lg border border-white/5 relative overflow-hidden shadow-2xl shadow-black">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-light text-white mb-8 text-center tracking-tighter uppercase">
                Referência em estruturação global
              </h3>
              <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-16 text-center max-w-3xl mx-auto">
                Assessoramos famílias, empresários e empresas na internacionalização de capitais, com foco em documentação, conformidade e previsibilidade operacional.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center pt-16 border-t border-white/8">
                <div>
                  <span className="block text-5xl md:text-6xl font-light text-white mb-4 tracking-tighter">15+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Anos de experiência</span>
                </div>
                <div>
                  <span className="block text-5xl md:text-6xl font-light text-white mb-4 tracking-tighter">500+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Estruturas assessoradas</span>
                </div>
                <div>
                  <span className="block text-5xl md:text-6xl font-light text-white mb-4 tracking-tighter">15+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Jurisdições atendidas</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
