"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Guia Completo: Como Funciona uma Holding Offshore",
    excerpt:
      "Entenda passo a passo como estruturar uma holding internacional e quais são os principais benefícios para proteção patrimonial.",
    image: "/modern-office-with-city-view-corporate-finance.jpg",
    readTime: "8 min",
    category: "Guia",
  },
  {
    title: "CRS e FATCA: O que você precisa saber em 2024",
    excerpt:
      "As regulamentações internacionais de troca de informações fiscais e como elas impactam sua estrutura offshore.",
    image: "/international-finance-documents-global-business.jpg",
    readTime: "6 min",
    category: "Regulamentação",
  },
  {
    title: "As Melhores Jurisdições para Offshore em 2024",
    excerpt:
      "Análise comparativa das principais jurisdições, suas vantagens, custos e adequação para diferentes perfis de investidor.",
    image: "/world-map-with-financial-centers-global.jpg",
    readTime: "10 min",
    category: "Análise",
  },
]

export function ArticlesSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative" id="artigos">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollAnimation className="text-center mb-16 md:mb-24">
          <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-4 block">
            Curadoria de Conteúdo
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 uppercase tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
            Artigos e Insights
          </h2>
          <p className="text-sm md:text-lg text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Conteúdo educativo e atualizado sobre estruturação internacional e proteção patrimonial.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <Link href="https://www.bezerraborges.com.br/artigos" target="_blank" rel="noopener noreferrer" className="group block h-full transition-transform hover:-translate-y-1">
                <article className="h-full flex flex-col border-b border-white/10 pb-8 group hover:border-white/30 transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden rounded-2xl mb-8 border border-white/5 group-hover:border-white/20 transition-all">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 ease-out opacity-50 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 border border-white/10 bg-black/60 backdrop-blur-md text-white/70 text-[10px] uppercase tracking-widest font-light px-3 py-1.5 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-start px-2">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest font-light mb-4">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime} de leitura</span>
                    </div>
                    
                    <h3 className="font-light text-lg md:text-xl mb-4 group-hover:text-white/80 transition-colors tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
                      {article.title}
                    </h3>
                    
                    <p className="text-white/40 text-[13px] md:text-sm font-light leading-relaxed mb-8 flex-1">
                      {article.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center text-[10px] font-light uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors gap-2 mt-auto">
                      Ler artigo
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-16">
          <Link
            href="https://www.bezerraborges.com.br/artigos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-white hover:text-white/70 transition-colors"
          >
            Ver todos os artigos
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}

