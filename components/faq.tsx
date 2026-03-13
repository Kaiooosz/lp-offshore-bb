"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

const faqs = [
  {
    question: "É totalmente legal abrir uma empresa fora do Brasil?",
    answer: "Sim, é 100% legal. A legislação brasileira permite que residentes possuam empresas e ativos no exterior, desde que devidamente declarados à Receita Federal e, dependendo do valor, ao Banco Central.",
  },
  {
    question: "Eu preciso ir para fora do Brasil para abrir essa empresa?",
    answer: "Não. Todo o processo é feito de forma digital. Em algumas jurisdições específicas (como Dubai) e dependendo do banco, pode haver necessidade de verificação facial ou, raramente, viagem para abertura de conta física, mas a abertura da empresa é 100% online.",
  },
  {
    question: "Com essa empresa eu posso continuar prestando serviços para clientes no Brasil?",
    answer: "Sim, sem problemas. Sua offshore pode faturar serviços para clientes em qualquer lugar do mundo, inclusive no Brasil. É uma forma excelente de internacionalizar sua receita.",
  },
  {
    question: "Ter dívidas no Brasil afeta a empresa offshore ou os ativos fora do país?",
    answer: "Ativos no exterior possuem uma camada significativa de proteção. Dívidas no Brasil dificilmente atingem ativos em jurisdições como Névis ou Ilhas Cook sem um processo internacional complexo e caro.",
  },
  {
    question: "A offshore me protege de processos trabalhistas no Brasil?",
    answer: "Sim, as estruturas offshore (especialmente Trusts e LLCs em certas jurisdições) criam uma separação jurídica forte, protegendo seu patrimônio pessoal contra execuções vindas de processos no Brasil.",
  },
  {
    question: "Ter uma offshore me protege contra bloqueios judiciais no Brasil?",
    answer: "Bloqueios via Bacenjud ou Sisbajud atingem apenas contas em território nacional. O capital depositado em bancos internacionais não é alcançado por ordens de bloqueio automático da justiça brasileira.",
  },
  {
    question: "Eu posso usar o dinheiro dessa empresa no Brasil?",
    answer: "Sim. Você pode utilizar cartões de débito internacionais da sua empresa para despesas correntes ou realizar transferências de dividendos para sua conta pessoal no Brasil, seguindo as regras de tributação vigentes.",
  },
  {
    question: "É possível manter total anonimato ao abrir uma offshore?",
    answer: "Sim, jurisdições como Wyoming e Névis permitem um altíssimo grau de privacidade através de diretores indicados ou simplesmente por não possuírem registros públicos de sócios. O anonimato é perante terceiros, mas a transparência com o fisco deve ser mantida.",
  },
  {
    question: "Como ficam os impostos no Brasil se eu for residente fiscal e tiver uma offshore?",
    answer: "Com a nova lei de offshores (Lei 14.754/23), os rendimentos são tributados anualmente. No entanto, a estrutura ainda oferece diferimento em certas condições e uma proteção patrimonial que vai muito além da questão tributária.",
  },
  {
    question: "Qual a diferença prática entre abrir nos EUA, Nevis, Dubai e Bahamas?",
    answer: "EUA é ideal para baixo custo e serviços digitais. Névis é o 'padrão ouro' de proteção jurídica. Dubai é excelente para quem busca isenção total e substância física. Bahamas é perfeita para holdings familiares de longo prazo.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-black relative" id="faq">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
          {/* Section header */}
          <ScrollAnimation animation="slide-left" className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-widest leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
              FAQS
            </h2>
            <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
              Dúvidas comuns
            </p>
          </ScrollAnimation>

          {/* FAQ Accordion */}
          <ScrollAnimation animation="slide-right">
            <Accordion type="single" collapsible className="space-y-0 w-full text-white border-t border-white/5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
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
  );
}
