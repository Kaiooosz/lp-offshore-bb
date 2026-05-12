"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Jurisdiction = {
  id: string
  name: string
  tagline: string
  image: string
  features: string[]
  price: string
  amount?: number
  priceId?: string
  buttonText: string
  href?: string
  note?: string
}

const jurisdictions: Jurisdiction[] = [
  {
    id: "dubai",
    name: "DUBAI (UAE)",
    tagline: "Ideal para internacionalização operacional com substância local.",
    image: "/dubai.png",
    features: [
      "Possível residência fiscal e empresarial conforme elegibilidade, substância e documentação.",
      "Regime corporativo competitivo, com alíquotas e isenções condicionadas às regras locais.",
      "Acesso facilitado ao sistema bancário internacional.",
      "Abertura em bancos e provedores financeiros globais conforme análise de compliance.",
      "Integração com gateways de pagamento quando o perfil operacional é aprovado.",
      "Maior privacidade societária dentro das regras regulatórias aplicáveis.",
      "Estrutura útil para negociação internacional e expansão operacional.",
      "Registro de empresa normalmente conduzido em semanas, conforme licença e emirado.",
      "Conta bancária e gateways dependem de KYC, atividade, documentação e eventual presença física.",
    ],
    price: "A partir de US$ 6.500",
    buttonText: "Falar com Especialista",
    href: "https://api.whatsapp.com/send/?phone=5521979901686&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20estrutura%20de%20Dubai.",
  },
  {
    id: "usa",
    name: "ESTADOS UNIDOS",
    tagline: "Ideal para prestadores de serviço e empreendedores digitais.",
    image: "/modern-office-with-city-view-corporate-finance.jpg",
    features: [
      "Estruturas em estados como Wyoming, Delaware e Novo México com baixa burocracia relativa.",
      "Porta de entrada ao sistema bancário americano.",
      "Abertura de contas e gateways sujeita a KYC, atividade e documentação.",
      "Maior privacidade perante registros públicos, preservada a transparência com autoridades competentes.",
      "Registro empresarial normalmente ágil quando a documentação está completa.",
      "Número Fiscal Federal (EIN) com prazo variável conforme processamento do IRS.",
      "Conta bancária e gateways dependem de análise do provedor financeiro.",
    ],
    price: "A partir de US$ 990",
    amount: 99000,
    priceId: "price_1TF0fvGmjEN0TRBb9tXpPiUs",
    buttonText: "Iniciar abertura nos EUA",
    note: "A elegibilidade tributária depende de sócios, residência fiscal, clientes, substância, fonte de renda e obrigações brasileiras. A análise individual é indispensável.",
  },
  {
    id: "nevis",
    name: "SÃO CRISTÓVÃO E NÉVIS",
    tagline: "Ideal para estruturação patrimonial com foco em mitigação de riscos.",
    image: "/international-finance-documents-global-business.jpg",
    features: [
      "Jurisdição caribenha usada em estruturas patrimoniais internacionais.",
      "Potencial eficiência fiscal conforme residência, atividade e regras de declaração aplicáveis.",
      "Maior privacidade societária dentro das exigências de compliance.",
      "Registro empresarial conduzido conforme documentação e due diligence.",
      "Abertura de conta bancária e conexão com gateways sujeitas à aprovação de provedores.",
      "Regras locais podem elevar o custo e a complexidade de litígios contra certas estruturas.",
    ],
    price: "US$ 2.900",
    amount: 290000,
    priceId: "price_1TF0eMGmjEN0TRBbAp1DyNuX",
    buttonText: "Iniciar abertura em Névis",
  },
  {
    id: "bahamas",
    name: "BAHAMAS",
    tagline: "Ideal para holdings patrimoniais e empresas de serviços com mais de um sócio.",
    image: "/world-map-with-financial-centers-global.jpg",
    features: [
      "Aplicável a holdings patrimoniais e estruturas familiares de longo prazo.",
      "Planejamento sucessório com análise de regras locais e brasileiras.",
      "Alto grau de privacidade societária, condicionado a compliance e registros aplicáveis.",
      "Acesso a bancos e provedores internacionais conforme perfil do cliente.",
      "Gateway de recebimento sujeito a atividade, jurisdição e KYC.",
      "Registro empresarial conduzido conforme documentação e due diligence.",
      "Prazos de banking variam conforme banco, setor e país de residência dos sócios.",
    ],
    price: "US$ 2.900",
    amount: 290000,
    priceId: "price_1TF0djGmjEN0TRBbVTqgmq9P",
    buttonText: "Iniciar abertura nas Bahamas",
  },
]

export function JurisdictionsDetailed() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (jurisdiction: Jurisdiction) => {
    if (jurisdiction.priceId) {
      try {
        setLoading(jurisdiction.id)
        const response = await fetch("/api/stripe/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: jurisdiction.amount,
            name: `Abertura de Empresa - ${jurisdiction.name}`,
            priceId: jurisdiction.priceId,
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
      return
    }

    window.open(
      jurisdiction.href ||
        `https://api.whatsapp.com/send/?phone=5521979901686&text=${encodeURIComponent(`Olá, gostaria de saber mais sobre a estrutura de ${jurisdiction.name}`)}`,
      "_blank",
    )
  }

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5" id="jurisdicoes-detalhes">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="space-y-40 mx-auto">
          {jurisdictions.map((jurisdiction, index) => (
            <ScrollAnimation key={jurisdiction.id} animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
              <div className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 lg:gap-24 items-center`}>
                <div className="w-full lg:w-1/2 group">
                  <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                    <img
                      src={jurisdiction.image}
                      alt={jurisdiction.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-12">
                      <span className="text-white/50 font-light tracking-[0.3em] uppercase text-[10px] mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                        Explorar Jurisdição
                      </span>
                      <h3 className="text-white text-4xl sm:text-6xl font-light mb-4 leading-none tracking-tighter">{jurisdiction.name}</h3>
                      <p className="text-white/60 text-sm sm:text-base font-light">{jurisdiction.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-10">
                  <div className="space-y-6">
                    <div className="inline-block p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="px-4 py-1 text-[10px] font-light tracking-[0.2em] uppercase text-white/70">Destaques Estratégicos</div>
                    </div>
                    <ul className="grid sm:grid-cols-1 gap-6">
                      {jurisdiction.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-4 group/item">
                          <div className="mt-1 flex-none w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:border-white transition-all duration-300">
                            <Check className="h-3 w-3 text-white/50 group-hover/item:text-black transition-colors" />
                          </div>
                          <span className="text-white/60 text-base sm:text-lg leading-relaxed group-hover/item:text-white transition-colors tracking-wide font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {jurisdiction.note && (
                    <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden group/note">
                      <div className="absolute top-0 left-0 w-1 h-full bg-white/30" />
                      <p className="text-sm text-white/50 leading-relaxed font-light relative z-10">
                        <span className="text-white font-light uppercase text-[10px] tracking-widest block mb-2 opacity-60">Nota Importante</span>
                        {jurisdiction.note}
                      </p>
                    </div>
                  )}

                  <div className="pt-6 flex flex-col sm:flex-row items-center gap-10">
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] font-light text-white/40 uppercase tracking-widest block mb-1">Preço Inicial</span>
                      <div className="text-3xl font-light text-white tracking-tighter">
                        {jurisdiction.price}
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="h-14 px-10 bg-transparent text-white group rounded-full text-[10px] font-light tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all border border-white/20"
                      onClick={() => handleCheckout(jurisdiction)}
                      disabled={loading !== null}
                    >
                      {loading === jurisdiction.id ? <Loader2 className="mr-3 h-5 w-5 animate-spin" /> : null}
                      {jurisdiction.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
