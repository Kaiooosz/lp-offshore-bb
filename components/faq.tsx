"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollAnimation } from "./scroll-animation"

const faqs = [
  {
    question: "É legal abrir uma empresa fora do Brasil?",
    answer: "Sim, desde que a estrutura seja lícita, tenha finalidade econômica real e seja devidamente declarada à Receita Federal e, quando aplicável, ao Banco Central.",
  },
  {
    question: "Eu preciso ir para fora do Brasil para abrir essa empresa?",
    answer: "Muitos processos são digitais. Em algumas jurisdições, bancos ou licenças específicas podem exigir verificação facial, entrevista, documentos adicionais ou presença física.",
  },
  {
    question: "Com essa empresa eu posso continuar prestando serviços para clientes no Brasil?",
    answer: "Depende do modelo operacional, contratos, residência fiscal, substância e tributação aplicável. O desenho correto evita improviso e reduz risco de questionamento.",
  },
  {
    question: "Ter dívidas no Brasil afeta a empresa offshore ou os ativos fora do país?",
    answer: "Pode afetar, conforme origem da dívida, momento da estruturação, fraude contra credores, cooperação internacional e decisões judiciais. A análise preventiva é essencial.",
  },
  {
    question: "A offshore me protege de processos trabalhistas no Brasil?",
    answer: "Uma estrutura internacional pode ajudar na segregação patrimonial, mas não elimina responsabilidade nem substitui defesa jurídica, compliance trabalhista e governança adequada.",
  },
  {
    question: "Ter uma offshore reduz risco de bloqueios judiciais no Brasil?",
    answer: "Pode reduzir exposição a bloqueios automáticos domésticos, mas ordens judiciais, cooperação internacional e análise de fraude podem alcançar estruturas mal desenhadas.",
  },
  {
    question: "Eu posso usar o dinheiro dessa empresa no Brasil?",
    answer: "Sim, desde que a movimentação respeite contratos, regras cambiais, tributação, distribuição de lucros e documentação adequada.",
  },
  {
    question: "É possível ter privacidade ao abrir uma offshore?",
    answer: "Algumas jurisdições oferecem maior privacidade perante registros públicos. Isso não significa anonimato perante bancos, agentes registrados, autoridades fiscais ou órgãos de compliance.",
  },
  {
    question: "Como ficam os impostos no Brasil se eu for residente fiscal e tiver uma offshore?",
    answer: "A Lei 14.754/2023 trouxe tributação periódica para determinados rendimentos no exterior. A estrutura precisa considerar IRPF, declarações, DCBE/CBE e natureza dos ativos.",
  },
  {
    question: "Qual a diferença prática entre abrir nos EUA, Névis, Dubai e Bahamas?",
    answer: "EUA costuma ser uma porta de entrada operacional. Névis e Bahamas são mais patrimoniais. Dubai exige análise de substância, licença, residência e banking. O melhor caminho depende do objetivo e do perfil fiscal.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-black relative" id="faq">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
          <ScrollAnimation animation="slide-left" className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
              FAQS
            </h2>
            <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
              Dúvidas comuns
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-right">
            <Accordion type="single" collapsible className="space-y-0 w-full text-white border-t border-white/5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="bg-transparent border-0 border-b border-white/5 px-0 delay-75 group"
                >
                  <AccordionTrigger className="text-left text-white/80 hover:text-white hover:no-underline py-8 text-sm md:text-base font-light tracking-wide transition-colors [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 leading-relaxed font-light pb-8 text-sm md:text-[15px] pr-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
