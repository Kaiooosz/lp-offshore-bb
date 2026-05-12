"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Loader2 } from "lucide-react"
import { useState } from "react"

type Plan = {
  name: string
  badge: string
  price: string
  amount: number
  priceId: string
  meta: string
  description: string
  features: string[]
  highlight?: boolean
  guarantee?: string
  revert: string
}

const layer1: Plan[] = [
  {
    name: "Consulta com Advogado Especialista",
    badge: "JURÍDICO",
    price: "US$ 150",
    amount: 15000,
    priceId: "prod_UT5KgwGakIoh6V",
    meta: "45 min · memorando estratégico incluso",
    description: "Dúvidas jurídicas específicas: estrutura societária, compliance, BACEN, obrigações legais. Memorando escrito com respostas e próximos passos sugeridos.",
    features: [],
    revert: "Crédito integral em contratação elegível",
  },
  {
    name: "Consulta com Contador Especialista",
    badge: "TRIBUTÁRIO",
    price: "US$ 150",
    amount: 15000,
    priceId: "prod_UT5KGCAIeANpe9",
    meta: "45 min · parecer técnico incluso",
    description: "Dúvidas fiscais: IRPF, Lei 14.754, DCBE, ganhos no exterior, tributação de lucros offshore e obrigações acessórias.",
    features: [],
    revert: "Crédito integral em contratação elegível",
  },
  {
    name: "Consulta Jurídico-Tributária",
    badge: "INTEGRATIVA",
    price: "US$ 250",
    amount: 25000,
    priceId: "prod_UT5Lwsd4wWyHIM",
    meta: "60 min · advogado + contador · entregável",
    description: "Dois especialistas, uma sessão. Ideal para casos que cruzam estrutura societária, fiscalidade brasileira e operação internacional.",
    features: [],
    revert: "Crédito integral em contratação elegível",
  },
]

const layer2: Plan[] = [
  {
    name: "Diagnóstico de Internacionalização",
    badge: "OPERACIONAL",
    price: "US$ 450",
    amount: 45000,
    priceId: "prod_UT5M8mBZWzLnGy",
    meta: "Para quem quer abrir ou reorganizar estrutura offshore",
    description: "Análise do perfil, objetivos e exposição fiscal. Mapa de jurisdições recomendadas, tipo de estrutura e estimativa de custo total.",
    features: ["Relatório estratégico entregável"],
    revert: "Crédito aplicável na abertura",
  },
  {
    name: "Diagnóstico de Regularização de Ativos",
    badge: "COMPLIANCE / REGULARIZAÇÃO",
    price: "US$ 600",
    amount: 60000,
    priceId: "prod_UT5M9uZ61x73uw",
    meta: "Para quem já tem estrutura no exterior e precisa regularizar",
    description: "Análise das obrigações vigentes (DCBE, DIRPF, CBE), identificação de exposições e roadmap de regularização. Alta demanda pós-Lei 14.754/2023.",
    features: ["Roadmap de regularização entregável"],
    revert: "Crédito aplicável na contratação",
  },
  {
    name: "Diagnóstico Patrimonial",
    badge: "PATRIMONIAL",
    price: "US$ 880",
    amount: 88000,
    priceId: "prod_UT5VHx00jrKTvx",
    meta: "Para holding, sucessão e proteção de ativos",
    description: "Mapeamento do patrimônio, riscos jurídicos e tributários, estratégia de holding + offshore integrada e planejamento sucessório inicial.",
    features: ["Relatório completo + proposta estruturada"],
    revert: "Crédito aplicável na estruturação",
  },
  {
    name: "Revisão e Análise de Viabilidade — Otimização",
    badge: "PRODUTO ÂNCORA PREMIUM",
    price: "US$ 1.600",
    amount: 160000,
    priceId: "prod_UT5WQX1dDX4syA",
    meta: "Para quem já tem estrutura operacional ou patrimonial no exterior",
    description: "Auditamos a estrutura existente para mapear oportunidades documentadas de economia fiscal, eficiência operacional, banking, governança e redução de exposição.",
    features: [],
    highlight: true,
    guarantee:
      "Se o relatório final não identificar oportunidades documentadas de economia ou ganho operacional anual estimado igual ou superior a US$ 1.600, o cliente pode solicitar devolução conforme termo: escopo contratado, documentos completos, prazo de 7 dias após a entrega e não utilização do material para implementação.",
    revert: "Crédito aplicável em contratação adicional",
  },
]

function PlanCard({
  plan,
  loading,
  onCheckout,
}: {
  plan: Plan
  loading: string | null
  onCheckout: (plan: Plan) => void
}) {
  const isLoading = loading === plan.priceId

  if (plan.highlight) {
    return (
      <div className="relative flex flex-col h-full p-8 md:p-10 rounded-lg border-2 border-white/30 bg-gradient-to-b from-[#181818] to-black shadow-2xl shadow-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
          Produto Âncora Premium
        </div>

        <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block mb-3">{plan.badge}</span>
        <h3 className="text-xl font-light text-white mb-5 tracking-tight leading-snug">{plan.name}</h3>

        <div className="mb-2">
          <div className="text-4xl md:text-5xl font-light text-white tracking-tighter">{plan.price}</div>
        </div>
        <p className="text-[11px] text-white/40 uppercase tracking-wider font-light mb-6">{plan.meta}</p>

        <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
          {plan.description}
        </p>

        {plan.guarantee && (
          <div className="mb-8 p-4 rounded-lg border border-white/10 bg-white/5">
            <p className="text-xs text-white/70 leading-relaxed font-light">
              <span className="text-white font-medium">Garantia condicionada: </span>
              {plan.guarantee}
            </p>
          </div>
        )}

        <div className="mt-auto space-y-3">
          <button
            className="w-full rounded-full h-14 text-[10px] font-light tracking-[0.2em] uppercase bg-white text-black hover:bg-white/90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            onClick={() => onCheckout(plan)}
            disabled={loading !== null}
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            Contratar Agora
          </button>
          <p className="text-[10px] text-white/30 text-center uppercase tracking-wider">{plan.revert}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col h-full p-8 rounded-lg border border-white/8 bg-[#0a0a0a] hover:border-white/20 transition-all duration-300">
      <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.25em] block mb-3">{plan.badge}</span>
      <h3 className="text-lg font-light text-white mb-4 tracking-tight leading-snug">{plan.name}</h3>

      <div className="mb-1">
        <div className="text-3xl md:text-4xl font-light text-white tracking-tighter">{plan.price}</div>
      </div>
      <p className="text-[10px] text-white/35 uppercase tracking-wider font-light mb-5">{plan.meta}</p>

      <p className="text-sm text-white/55 leading-relaxed font-light mb-5 flex-1">
        {plan.description}
      </p>

      {plan.features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="text-[11px] text-white/40 font-light uppercase tracking-wider">
              + {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto space-y-3">
        <button
          className="w-full rounded-full h-12 text-[10px] font-light tracking-[0.2em] uppercase bg-transparent border border-white/20 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          onClick={() => onCheckout(plan)}
          disabled={loading !== null}
        >
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          Contratar Agora
        </button>
        <p className="text-[10px] text-white/25 text-center uppercase tracking-wider">{plan.revert}</p>
      </div>
    </div>
  )
}

export function PricingSection() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (plan: Plan) => {
    try {
      setLoading(plan.priceId)
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: plan.amount,
          name: plan.name,
          priceId: plan.priceId,
        }),
      })

      const { url, error } = await response.json()
      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Erro ao iniciar pagamento. Tente novamente.")
    } finally {
      setLoading(null)
    }
  }

  return (
    <section className="py-24 bg-black relative" id="consultoria">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollAnimation className="mb-16">
          <span className="text-xs font-light text-white/50 uppercase tracking-[0.2em] block mb-4">Consultoria Estratégica</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
            O PRIMEIRO PASSO PARA ESTRUTURAR COM SEGURANÇA
          </h2>
          <p className="text-lg text-white/50 max-w-2xl font-light leading-relaxed">
            A escada de oferta separa dúvida pontual, diagnóstico técnico e implementação. Valores de consulta podem ser creditados em contratações elegíveis, conforme escopo e termo comercial.
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="mb-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-light text-white/30 uppercase tracking-[0.25em]">Camada 1</span>
            <div className="h-px flex-1 bg-white/8" />
            <span className="text-[10px] font-light text-white/30 uppercase tracking-[0.2em]">Consultas especializadas — ponto de entrada</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {layer1.map((plan) => (
              <PlanCard key={plan.name} plan={plan} loading={loading} onCheckout={handleCheckout} />
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-light text-white/30 uppercase tracking-[0.25em]">Camada 2</span>
            <div className="h-px flex-1 bg-white/8" />
            <span className="text-[10px] font-light text-white/30 uppercase tracking-[0.2em]">Diagnósticos estratégicos — núcleo do funil</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {layer2.slice(0, 2).map((plan) => (
              <PlanCard key={plan.name} plan={plan} loading={loading} onCheckout={handleCheckout} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {layer2.slice(2).map((plan) => (
              <PlanCard key={plan.name} plan={plan} loading={loading} onCheckout={handleCheckout} />
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="mt-16 pt-16 border-t border-white/8">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-6">Progressão natural do funil</p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "Consultas", value: "US$ 150–250" },
              { label: "Diagnósticos", value: "US$ 450–880" },
              { label: "Otimização", value: "US$ 1.600 + termo" },
              { label: "Estruturação / Abertura", value: "A partir de US$ 990" },
            ].map((step, index, arr) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="px-5 py-3 rounded-lg border border-white/10 bg-white/4">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider font-light">{step.label}</p>
                  <p className="text-xs text-white/70 font-light mt-0.5">{step.value}</p>
                </div>
                {index < arr.length - 1 && (
                  <span className="text-white/20 text-sm">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-white/30 font-light mt-4 leading-relaxed max-w-xl">
            Cada camada qualifica melhor o cliente: WhatsApp para urgência, formulário para triagem, consulta para dúvida específica, diagnóstico para mapa técnico e fechamento para execução.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
