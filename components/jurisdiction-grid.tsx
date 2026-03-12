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
        <section className="py-24 bg-muted/30" id="jurisdicoes-grade">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Jurisdições que trabalhamos</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Já sabe o que precisa? Monte sua estrutura corporativa 100% online agora mesmo ou entre em contato com o nosso suporte para mais informações!
                    </p>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {allJurisdictions.map((j, index) => (
                        <ScrollAnimation key={index} delay={index * 50}>
                            <div className="bg-background p-6 rounded-xl border border-border flex flex-col h-full hover:border-titanium transform transition-all duration-300 hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-titanium mb-1 block">{j.country}</span>
                                        <h3 className="text-xl font-bold text-foreground">{j.name}</h3>
                                    </div>
                                    <span className="bg-muted px-2 py-1 rounded text-[10px] font-bold uppercase text-muted-foreground">{j.status}</span>
                                </div>
                                <p className="text-sm text-muted-foreground flex-1 mb-6">{j.description}</p>
                                <div className="flex items-center justify-between border-t border-border pt-4">
                                    <span className="text-lg font-bold text-foreground">{j.price}</span>
                                    <Button
                                        size="sm"
                                        variant={j.price === "A consultar" ? "outline" : "default"}
                                        onClick={() => handleCheckout(j)}
                                        disabled={loading !== null}
                                    >
                                        {loading === j.name ? (
                                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                        ) : null}
                                        {j.price === "A consultar" ? "Fale com um especialista" : "Incorporar empresa"}
                                    </Button>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground italic">
                        Aceitamos pagamentos com as principais criptomoedas, além de cartão e Pix.
                    </p>
                </div>
            </div>
        </section>
    )
}
