"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

export function StepsSection() {
  return (
    <section className="py-24 bg-black relative" id="business">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Large Kast-style promo card */}
        <ScrollAnimation className="relative w-full rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden flex items-center justify-center min-h-[500px] p-8 md:p-20 shadow-2xl shadow-black">
          
          {/* Logo Watermark Background */}
          <div 
            className="absolute inset-0 opacity-[0.03] bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url(/LogoBranco.svg)',
              backgroundSize: '150% auto'
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-2xl mx-auto text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tighter uppercase mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
              BEZERRA BORGES PARA <br/>GRANDES VOLUMES
            </h2>
            <p className="text-white/50 text-xl md:text-2xl font-light max-w-xl leading-relaxed mb-8 mx-auto md:mx-0">
              Desenvolvido para empresários que movimentam alto volume de capital e exigem estruturas multi-jurisdicionais complexas.
            </p>
            <a href="https://api.whatsapp.com/send/?phone=5521979901686&text=Olá, tenho interesse na estruturação Bezerra Borges Para Grandes Volumes" target="_blank" rel="noreferrer" className="btn-shimmer inline-flex items-center justify-center text-white text-[10px] font-light tracking-[0.2em] uppercase hover:opacity-70 transition-opacity bg-transparent border border-white/30 px-8 py-4 rounded-full">
              Falar com Sócio Diretor <span className="ml-2">→</span>
            </a>
          </div>



        </ScrollAnimation>

      </div>
    </section>
  )
}
