"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const allJurisdictions = [
    { name: "Wyoming", country: "EUA", status: "Operacional", description: "O mais recomendado para empresários brasileiros, pois garante altíssimo grau de anonimato e baixíssima burocracia anual.", price: "990 USD", amount: 99000, priceId: "price_1T9b87FsbLGLnQ7woJUUeV9p" },
    { name: "Delaware", country: "EUA", status: "Status", description: "O mais recomendado para empresas que buscam investimento de VCs e forte segurança jurídica.", price: "990 USD", amount: 99000, priceId: "price_1T9b8wFsbLGLnQ7wZ3L9aug7" },
    { name: "Novo México", country: "EUA", status: "Operacional", description: "Jurisdição alternativa à Wyoming.", price: "990 USD", amount: 99000, priceId: "price_1T9bBBFsbLGLnQ7wiEraVVao" },
    { name: "Névis", country: "São Cristóvão e Névis", status: "Anonimato", description: "Ideal para quem busca máxima proteção jurídica, anonimato e proteção de ativos para blindagem contra credores.", price: "2.900 USD", amount: 290000, priceId: "price_1T9bE6FsbLGLnQ7w16ApKUur" },
    { name: "Bahamas", country: "Bahamas", status: "Holding", description: "Ideal para holdings patrimoniais e empresas com múltiplos sócios ou acionistas.", price: "2.900 USD", amount: 290000, priceId: "price_1T9bEpFsbLGLnQ7wU6a1rzBy" },
    { name: "Panamá", country: "Panamá", status: "Comércio", description: "Hub logístico e financeiro estratégico para operações e negócios globais.", price: "2.900 USD", amount: 290000, priceId: "price_1T9bFkFsbLGLnQ7wuhvKGZ8b" },
    { name: "BVI", country: "Ilhas Virgens Britânicas", status: "Holdings", description: "Uma das jurisdições mais populares do mundo para holdings, fundos e estruturas.", price: "3.500 USD", amount: 350000, priceId: "price_1T9bGUFsbLGLnQ7wM4FFQpLB" },
    { name: "Ilhas Cayman", country: "Ilhas Cayman", status: "Patrimonial", description: "Jurisdição líder mundial para fundos de investimento e estruturas financeiras.", price: "4.999 USD", amount: 499900, priceId: "price_1T9bIPFsbLGLnQ7w6JOfY21F" },
    { name: "Ilhas Marshall", country: "Ilhas Marshall", status: "Operacional", description: "Popular para registro de navios e iates, com leis corporativas flexíveis e eficientes.", price: "3.300 USD", amount: 330000, priceId: "price_1T9bJFFsbLGLnQ7wVd3hh7gx" },
    { name: "Dubai", country: "Emirados Árabes Unidos", status: "Premium", description: "Ideal para expansão global e status internacional.", price: "A consultar" },
    { name: "Canadá", country: "Canadá", status: "Operacional", description: "Ambiente de negócios estável e acesso ao mercado norte-americano (USMCA).", price: "A consultar" },
    { name: "Seychelles", country: "Seychelles", status: "Trading", description: "Oferece alto nível de privacidade e confidencialidade para empresas e contas bancárias.", price: "A consultar" },
    { name: "Hong Kong", country: "Hong Kong", status: "Negócios", description: "Centro estratégico para negócios e investimentos no mercado asiático e chinês.", price: "A consultar" },
    { name: "Belize", country: "Belize", status: "Trusts", description: "Conhecida por suas leis de trusts flexíveis, ideal para planejamento patrimonial e sucessório.", price: "A consultar" },
    { name: "Malta", country: "Malta", status: "Gaming", description: "Membro da UE, ideal para operações na Europa e um hub para empresas de iGaming e blockchain.", price: "A consultar" },
]

export function JurisdictionGrid() {
    const [loading, setLoading] = useState<string | null>(null)

    const handleCheckout = async (j: typeof allJurisdictions[0]) => {
        if (j.price === "A consultar") {
            window.open(`https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de saber mais sobre a jurisdição de ${j.name}`, "_blank")
            return
        }

        try {
            setLoading(j.name)
            const response = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: j.amount,
                    name: `Abertura de Empresa - ${j.name}`,
                    priceId: j.priceId,
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
            {/* Top/Bottom smooth gradients to blend sections instead of lines */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <ScrollAnimation className="text-center mb-24 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">Jurisdições que trabalhamos</h2>
                    <p className="text-lg text-white/50 font-light leading-relaxed">
                        Já sabe o que precisa? Monte sua estrutura corporativa 100% online agora mesmo ou entre em contato com o nosso suporte para mais informações!
                    </p>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {allJurisdictions.map((j, index) => (
                        <ScrollAnimation key={index} delay={index * 50}>
                            <div className="bg-[#0f0f0f]/80 p-8 rounded-2xl border border-white/5 flex flex-col h-full hover:border-white/20 hover:bg-[#141414] transform transition-all duration-500 shadow-2xl shadow-black">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">{j.country}</span>
                                        <h3 className="text-2xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">{j.name}</h3>
                                    </div>
                                    <span className="bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase text-white/70 tracking-widest">{j.status}</span>
                                </div>
                                <p className="text-sm text-white/50 font-light flex-1 mb-8 leading-relaxed">{j.description}</p>
                                
                                <div className="flex flex-col gap-4 mt-auto">
                                    <span className="text-2xl font-light text-white tracking-tighter">{j.price}</span>
                                    <Button
                                        className={`w-full rounded-full h-12 text-xs font-medium tracking-widest uppercase transition-all ${
                                            j.price === "A consultar"
                                                ? "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-light tracking-[0.2em]"
                                                : "bg-white text-black hover:bg-white/90 font-light tracking-[0.2em]"
                                        }`}
                                        onClick={() => handleCheckout(j)}
                                        disabled={loading !== null}
                                    >
                                        {loading === j.name ? (
                                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                        ) : null}
                                        {j.price === "A consultar" ? "Falar com especialista" : "Incorporar empresa"}
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
