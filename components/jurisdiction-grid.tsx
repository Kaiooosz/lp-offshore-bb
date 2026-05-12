"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

type GridJurisdiction = {
  name: string
  country: string
  status: string
  description: string
  price: string
  amount?: number
  priceId?: string
}

const allJurisdictions: GridJurisdiction[] = [
  {
    name: "Wyoming",
    country: "EUA",
    status: "Operacional",
    description: "Estrutura de entrada para empresários brasileiros que buscam baixa burocracia e maior privacidade societária.",
    price: "990 USD",
    amount: 99000,
    priceId: "price_1TF0fvGmjEN0TRBb9tXpPiUs",
  },
  {
    name: "Delaware",
    country: "EUA",
    status: "Investimento",
    description: "Jurisdição americana relevante para empresas com captação, sócios internacionais e governança corporativa.",
    price: "990 USD",
    amount: 99000,
    priceId: "price_1TF0fUGmjEN0TRBb5VRVQQTe",
  },
  {
    name: "Novo México",
    country: "EUA",
    status: "Operacional",
    description: "Alternativa para estruturas simples nos EUA, sujeita à análise de atividade, banking e compliance.",
    price: "990 USD",
    amount: 99000,
    priceId: "price_1TF0f3GmjEN0TRBbXxI4SW0e",
  },
  {
    name: "Névis",
    country: "São Cristóvão e Névis",
    status: "Patrimonial",
    description: "Usada em planejamento patrimonial com foco em segregação de ativos e redução de exposição jurídica.",
    price: "2.900 USD",
    amount: 290000,
    priceId: "price_1TF0eMGmjEN0TRBbAp1DyNuX",
  },
  {
    name: "Bahamas",
    country: "Bahamas",
    status: "Holding",
    description: "Aplicável a holdings patrimoniais, empresas com múltiplos sócios e estruturas familiares de longo prazo.",
    price: "2.900 USD",
    amount: 290000,
    priceId: "price_1TF0djGmjEN0TRBbVTqgmq9P",
  },
  {
    name: "Panamá",
    country: "Panamá",
    status: "Comércio",
    description: "Hub logístico e financeiro para operações internacionais, comércio e organização societária.",
    price: "2.900 USD",
    amount: 290000,
    priceId: "price_1TF0cSGmjEN0TRBbfpDVNpUF",
  },
  {
    name: "BVI",
    country: "Ilhas Virgens Britânicas",
    status: "Holdings",
    description: "Jurisdição conhecida para holdings, fundos e estruturas internacionais sujeitas a due diligence.",
    price: "3.500 USD",
    amount: 350000,
    priceId: "price_1TF0bsGmjEN0TRBbHMkz1Drm",
  },
  {
    name: "Ilhas Cayman",
    country: "Ilhas Cayman",
    status: "Fundos",
    description: "Jurisdição relevante para fundos, estruturas financeiras e operações com governança mais sofisticada.",
    price: "4.999 USD",
    amount: 499900,
    priceId: "price_1TF0bIGmjEN0TRBbsJp206bd",
  },
  {
    name: "Ilhas Marshall",
    country: "Ilhas Marshall",
    status: "Operacional",
    description: "Aplicável a operações específicas, ativos internacionais e negócios que exigem estrutura societária flexível.",
    price: "4.999 USD",
    amount: 499900,
    priceId: "price_1TF0aNGmjEN0TRBbRYmVEYFJ",
  },
  {
    name: "Dubai",
    country: "Emirados Árabes Unidos",
    status: "Premium",
    description: "Indicado para expansão global com substância local, residência, banking e operação internacional.",
    price: "A consultar",
  },
  {
    name: "Canadá",
    country: "Canadá",
    status: "Operacional",
    description: "Ambiente de negócios estável e acesso ao mercado norte-americano, conforme atividade e elegibilidade.",
    price: "A consultar",
  },
  {
    name: "Seychelles",
    country: "Seychelles",
    status: "Trading",
    description: "Estrutura usada para operações internacionais específicas, sempre sujeita a compliance e banking.",
    price: "A consultar",
  },
  {
    name: "Hong Kong",
    country: "Hong Kong",
    status: "Negócios",
    description: "Centro estratégico para negócios, pagamentos e investimentos ligados ao mercado asiático.",
    price: "A consultar",
  },
  {
    name: "Belize",
    country: "Belize",
    status: "Trusts",
    description: "Conhecida por estruturas patrimoniais e sucessórias que exigem análise documental cuidadosa.",
    price: "A consultar",
  },
  {
    name: "Malta",
    country: "Malta",
    status: "Europa",
    description: "Membro da União Europeia, relevante para operações reguladas, iGaming e projetos digitais.",
    price: "A consultar",
  },
]

export function JurisdictionGrid() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (jurisdiction: GridJurisdiction) => {
    if (jurisdiction.price === "A consultar") {
      window.open(
        `https://api.whatsapp.com/send/?phone=5521979901686&text=${encodeURIComponent(`Olá, gostaria de saber mais sobre a jurisdição de ${jurisdiction.name}`)}`,
        "_blank",
      )
      return
    }

    try {
      setLoading(jurisdiction.name)
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
  }

  return (
    <section className="py-32 bg-black relative" id="jurisdicoes-grade">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollAnimation className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">Jurisdições que trabalhamos</h2>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            Já sabe o que precisa? Inicie pela estrutura de entrada a partir de US$ 990 ou fale com um especialista para validar o melhor caminho.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {allJurisdictions.map((jurisdiction, index) => (
            <ScrollAnimation key={jurisdiction.name} delay={index * 50}>
              <div className="bg-[#0f0f0f]/80 p-8 rounded-2xl border border-white/5 flex flex-col h-full hover:border-white/20 hover:bg-[#141414] transform transition-all duration-500 shadow-2xl shadow-black">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">{jurisdiction.country}</span>
                    <h3 className="text-2xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">{jurisdiction.name}</h3>
                  </div>
                  <span className="bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase text-white/70 tracking-widest">{jurisdiction.status}</span>
                </div>
                <p className="text-sm text-white/50 font-light flex-1 mb-8 leading-relaxed">{jurisdiction.description}</p>

                <div className="flex flex-col gap-4 mt-auto">
                  <span className="text-2xl font-light text-white tracking-tighter">{jurisdiction.price}</span>
                  <Button
                    className={`w-full rounded-full h-12 text-xs font-medium tracking-widest uppercase transition-all ${
                      jurisdiction.price === "A consultar"
                        ? "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-light tracking-[0.2em]"
                        : "bg-white text-black hover:bg-white/90 font-light tracking-[0.2em]"
                    }`}
                    onClick={() => handleCheckout(jurisdiction)}
                    disabled={loading !== null}
                  >
                    {loading === jurisdiction.name ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : null}
                    {jurisdiction.price === "A consultar" ? "Falar com especialista" : "Incorporar empresa"}
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xs text-white/30 tracking-widest uppercase font-bold">
            Aceitamos pagamentos com as principais criptomoedas, além de cartão e Pix.
          </p>
        </div>
      </div>
    </section>
  )
}
