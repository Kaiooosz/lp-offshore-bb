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
      question: "Como as estruturas offshore podem aumentar a minha privacidade?",
      answer:
        "Estruturas offshore em jurisdições estratégicas oferecem maior confidencialidade através de legislações que protegem a identidade dos beneficiários finais. Além disso, permitem a separação legal entre patrimônio pessoal e empresarial, criando camadas de proteção que dificultam o acesso não autorizado a informações sensíveis.",
    },
    {
      question: "Como a internacionalização pode ajudar meu negócio?",
      answer:
        "A internacionalização oferece diversificação de riscos, acesso a mercados globais, otimização tributária legal, proteção cambial e maior credibilidade internacional. Permite também estruturar operações em jurisdições com ambiente regulatório mais favorável e custos operacionais reduzidos.",
    },
    {
      question:
        "Como funciona o cumprimento de obrigações fiscais em estruturas internacionais?",
      answer:
        "Mantemos total conformidade com as legislações brasileiras e internacionais. Todas as estruturas são declaradas conforme exigências da Receita Federal, incluindo Declaração de Capitais Brasileiros no Exterior (CBE) e Imposto de Renda. Nosso planejamento tributário é 100% legal e transparente.",
    },
    {
      question: "Quanto tempo leva para abrir uma empresa offshore?",
      answer:
        "O prazo varia conforme a jurisdição escolhida, mas geralmente leva de 2 a 4 semanas. Jurisdições como Ilhas Virgens Britânicas e Panamá podem ser mais rápidas (7-10 dias), enquanto outras como Suíça ou Singapura podem levar até 6 semanas. Cuidamos de todo o processo para você.",
    },
    {
      question: "Quais são os custos envolvidos?",
      answer:
        "Os custos variam conforme a complexidade da estrutura, jurisdição escolhida e serviços necessários. Incluem taxas de constituição, registro, agente residente, manutenção anual e nossos honorários advocatícios. Fornecemos orçamento detalhado e transparente após análise do seu caso.",
    },
    {
      question: "É legal ter uma empresa offshore?",
      answer:
        "Sim, é completamente legal. Empresas offshore são utilizadas por milhões de pessoas e empresas no mundo todo para fins legítimos como internacionalização de negócios, proteção patrimonial e planejamento sucessório. O importante é manter total transparência e conformidade com as obrigações fiscais brasileiras.",
    },
  ];
  
  export function FAQ() {
    return (
      <section className="py-24 px-6 bg-backgroud mb-20">
        <div className="container mx-auto">
          <ScrollAnimation className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foregroung mb-4 tracking-tight">
                Perguntas frequentes
              </h2>
              <p className="text-base sm:text-lg text--chart-1 leading-relaxed">
                Respostas para as dúvidas mais comuns sobre nossos serviços
              </p>
            </div>
  
            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-lg px-6 data-[state=open]:bg-backgroud">
                  <AccordionTrigger className="text-left text-foregroung hover:--ring py-6 text-base md:text-lg font-serif">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text--chart-2 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
  