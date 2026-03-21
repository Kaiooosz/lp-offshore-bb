"use client"

import type React from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Calendar, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative" id="contato">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="slide-left" className="pt-8">
            <span className="text-[10px] font-light text-white/50 uppercase tracking-[0.2em] mb-4 block">
              Contato VIP
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20 mb-6">
              INICIE SUA JORNADA GLOBAL
            </h2>
            <p className="text-lg text-white/50 mb-12 leading-relaxed font-light max-w-md">
              Dê o primeiro passo para a estruturação do seu patrimônio. Estamos prontos para oferecer soluções estratégicas para o seu contexto específico.
            </p>
          </ScrollAnimation>

          {/* Right Content - 2x2 Grid */}
          <ScrollAnimation animation="slide-right" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-t border-white/10">
              
              <a href="#consultoria" className="flex flex-col items-start p-10 border-r border-b border-white/10 group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 mb-8 bg-[#0a0a0a] group-hover:border-white/30 transition-all">
                  <Calendar className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-light text-xl text-white mb-2 tracking-tight">Agende uma Consulta</h3>
                <p className="text-sm font-light text-white/50 mb-8">Online com especialistas</p>
                <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.2em] mt-auto flex items-center gap-2 group-hover:text-white transition-colors">
                  Agendar <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="tel:+5521979901686" className="flex flex-col items-start p-10 border-r border-b border-white/10 group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 mb-8 bg-[#0a0a0a] group-hover:border-white/30 transition-all">
                  <Phone className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-light text-xl text-white mb-2 tracking-tight">Ligue para nós</h3>
                <p className="text-sm font-light text-white/50 mb-8">+55 (21) 97990-1686</p>
                <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.2em] mt-auto flex items-center gap-2 group-hover:text-white transition-colors">
                  Ligar <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="mailto:contato@bezerraborges.com" className="flex flex-col items-start p-10 border-r border-b border-white/10 group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 mb-8 bg-[#0a0a0a] group-hover:border-white/30 transition-all">
                  <Mail className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-light text-xl text-white mb-2 tracking-tight">Envie um e-mail</h3>
                <p className="text-sm font-light text-white/50 mb-8">contato@bezerraborges.com</p>
                <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.2em] mt-auto flex items-center gap-2 group-hover:text-white transition-colors">
                  Enviar <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=5521979901686&text=Olá, gostaria de agendar um diagnóstico estratégico com a Bezerra Borges Advogados" target="_blank" rel="noreferrer" className="flex flex-col items-start p-10 border-r border-b border-white/10 group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 mb-8 bg-[#0a0a0a] group-hover:border-white/30 transition-all">
                  <MessageCircle className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-light text-xl text-white mb-2 tracking-tight">WhatsApp</h3>
                <p className="text-sm font-light text-white/50 mb-8">Atendimento rápido e direto</p>
                <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.2em] mt-auto flex items-center gap-2 group-hover:text-white transition-colors">
                  Conversar <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
