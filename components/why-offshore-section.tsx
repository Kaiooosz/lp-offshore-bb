"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

const features = [
  {
    tag: "PROTEÇÃO",
    title: "Blindagem Patrimonial",
    desc: "Separe seu patrimônio pessoal dos riscos empresariais. Uma parede legal contra processos, credores e instabilidades.",
    image: "/international-finance-documents-global-business.jpg", 
    isLogoBackground: false,
    className: "md:col-span-2 aspect-[16/9] md:aspect-auto md:h-[400px]"
  },
  {
    tag: "EXPANSÃO",
    title: "Acesso a investimentos e moedas fortes",
    desc: "Abra contas nos maiores bancos do mundo e dolarize seu capital com facilidade.",
    image: "/world-map-with-financial-centers-global.jpg",
    isLogoBackground: false,
    className: "md:col-span-1 aspect-square md:aspect-auto md:h-[400px]"
  },
  {
    tag: "OTIMIZAÇÃO",
    title: "Eficiência fiscal internacional",
    desc: "Aproveite regimes tributários favoráveis e dobre a rentabilidade do seu negócio.",
    image: "/LogoBranco.svg", 
    isLogoBackground: true,
    className: "md:col-span-1 aspect-square md:aspect-auto md:h-[400px]"
  },
  {
    tag: "SUCESSÃO",
    title: "Transferência de riqueza sem atritos",
    desc: "Sistemas em trust ou holdings que garantem a passagem segura para a próxima geração.",
    image: "/modern-city-skyline-at-dusk-with-glass-buildings-a.jpg",
    isLogoBackground: false,
    className: "md:col-span-2 aspect-[16/9] md:aspect-auto md:h-[400px]"
  }
]

export function WhyOffshoreSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation className="mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter uppercase mb-6 leading-none max-w-4xl">
            CONSTRUÍDO PARA QUEM EXIGE PROTEGER O QUE É SEU
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimation 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 shadow-2xl shadow-black hover:border-white/20 transition-all duration-300 ${feature.className}`}
              delay={index * 100}
            >
              {/* Background Image / Overlay */}
              {feature.image && !feature.isLogoBackground && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105 opacity-50 grayscale mix-blend-luminosity"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </>
              )}
              {feature.isLogoBackground && (
                <>
                  <div 
                    className="absolute inset-0 opacity-[0.05] bg-no-repeat bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url(${feature.image})`,
                      backgroundSize: '150% auto'
                    }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </>
              )}
              
              {/* Glass Tag */}
              <div className="absolute top-6 left-6 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                <span className="text-white/70 text-[10px] sm:text-xs font-light tracking-widest uppercase">
                  {feature.tag}
                </span>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <h3 className="text-white text-2xl sm:text-3xl font-light mb-3 tracking-tighter leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light max-w-sm">
                  {feature.desc}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
