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
    <section className="py-24 bg-background" id="artigos">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-sm font-medium text-titanium uppercase tracking-wider">Curadoria de Conteúdo</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Artigos e Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conteúdo educativo e atualizado sobre estruturação internacional e proteção patrimonial.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <Link href="#" className="group block h-full">
                <article className="bg-muted/30 rounded-xl overflow-hidden border border-border hover:border-titanium/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime} de leitura</span>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-titanium transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-medium text-titanium group-hover:text-foreground transition-colors">
                      Ler artigo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-titanium hover:text-foreground font-medium transition-colors"
          >
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
