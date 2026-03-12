"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Check, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const jurisdictions = [
    {
        id: "dubai",
        name: "DUBAI (UAE)",
        tagline: "Ideal para internacionalização do negócio.",
        image: "/dubai.png",
        features: [
            "Documento de Residência com Imposto Zero para Pessoa Física.",
            "Empresas com isenção total até US$ 100 mil/mês (acima disso, 9% sobre o excedente).",
            "Acesso facilitado ao sistema bancário internacional.",
            "Abertura facilitada em grandes bancos globais.",
            "Contas simples em gateways de pagamento.",
            "Privacidade total para operações legais.",
            "Negocie com o mundo inteiro, sem restrições.",
            "Registro de empresa em até 30 dias.",
            "Conta bancária e gateways em até 15 dias (pode exigir viagem).",
        ],
        price: "A partir de US$ 6.500",
        buttonText: "Falar com Especialista",
        href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de saber mais sobre a estrutura de Dubai.",
    },
    {
        id: "usa",
        name: "ESTADOS UNIDOS",
        tagline: "Ideal para prestadores de serviço e empreendedores digitais.",
        image: "/modern-office-with-city-view-corporate-finance.jpg",
        features: [
            "Imposto Zero em estados como Wyoming e Delaware.",
            "Porta de entrada ao sistema bancário americano.",
            "Fácil abertura de contas em gateways de recebimento.",
            "Privacidade total e anonimato para operações legais.",
            "Registro de empresa em até 5 dias úteis.",
            "Número Fiscal Federal (EIN) entre 5 e 45 dias.",
            "Conta bancária e gateways entre 1 e 30 dias.",
        ],
        price: "US$ 990",
        amount: 99000,
        priceId: "price_1T9b87FsbLGLnQ7woJUUeV9p", // Wyoming as default
        buttonText: "Iniciar abertura nos EUA",
        note: "Atenção: para ter direito à isenção de impostos, a empresa deve possuir apenas um sócio e esse sócio não pode residir nos Estados Unidos. Além disso, a empresa não pode vender para clientes americanos nem contratar funcionários americanos.",
    },
    {
        id: "nevis",
        name: "SÃO CRISTÓVÃO E NÉVIS",
        tagline: "Ideal para quem busca proteção jurídica e blindagem patrimonial máxima.",
        image: "/international-finance-documents-global-business.jpg",
        features: [
            "Minúscula ilha vulcânica no Caribe.",
            "Imposto Zero.",
            "Privacidade ABSOLUTA e anonimato total.",
            "Registro de empresa em até 30 dias.",
            "Abertura de conta bancária e conexão com gateways em até 1 mês.",
            "Para te processar, terão de pagar US$ 100 mil apenas para abrir um processo judicial.",
        ],
        price: "US$ 2.900",
        amount: 290000,
        priceId: "price_1T9bE6FsbLGLnQ7w16ApKUur",
        buttonText: "Iniciar abertura em Névis",
    },
    {
        id: "bahamas",
        name: "BAHAMAS",
        tagline: "Ideal para holdings patrimoniais e empresas de serviços com mais de um sócio.",
        image: "/world-map-with-financial-centers-global.jpg",
        features: [
            "Ideal para holding patrimonial.",
            "Sem impostos de herança ou mudança societária.",
            "Altíssimo grau de anonimato e privacidade em duas camadas.",
            "Fácil acesso ao sistema bancário americano.",
            "Abertura simples em gateways de recebimento.",
            "Registro de empresa em até 30 dias.",
            "Conta bancária e gateways em até 30 dias.",
        ],
        price: "US$ 2.900",
        amount: 290000,
        priceId: "price_1T9bEpFsbLGLnQ7wU6a1rzBy",
        buttonText: "Iniciar abertura nas Bahamas",
    },
]

export function JurisdictionsDetailed() {
    const [loading, setLoading] = useState<string | null>(null)

    const handleCheckout = async (j: typeof jurisdictions[0]) => {
        if ("priceId" in j && j.priceId) {
            try {
                setLoading(j.id)
                const response = await fetch("/api/stripe/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        amount: (j as any).amount,
                        name: `Abertura de Empresa - ${j.name}`,
                        priceId: (j as any).priceId,
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
        } else {
            window.open((j as any).href || `https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de saber mais sobre a estrutura de ${j.name}`, "_blank")
        }
    }

    return (
        <section className="py-32 bg-background relative overflow-hidden" id="jurisdicoes-detalhes">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-titanium/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-titanium/5 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="space-y-40 max-w-7xl mx-auto">
                    {jurisdictions.map((j, index) => (
                        <ScrollAnimation key={j.id} animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
                            <div className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 lg:gap-24 items-center`}>
                                {/* Visual Side */}
                                <div className="w-full lg:w-1/2 group">
                                    <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
                                        <img
                                            src={j.image}
                                            alt={j.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-12">
                                            <span className="text-titanium-light font-bold tracking-[0.3em] uppercase text-xs mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">Explorar Jurisdição</span>
                                            <h3 className="text-white text-4xl sm:text-6xl font-serif font-bold mb-4 leading-none">{j.name}</h3>
                                            <p className="text-white/70 text-lg sm:text-xl font-light italic">{j.tagline}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-10">
                                    <div className="space-y-6">
                                        <div className="inline-block p-1 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
                                            <div className="px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-titanium">Destaques Estratégicos</div>
                                        </div>
                                        <ul className="grid sm:grid-cols-1 gap-6">
                                            {j.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-4 group/item">
                                                    <div className="mt-1 flex-none w-6 h-6 rounded-full bg-titanium/10 border border-titanium/20 flex items-center justify-center group-hover/item:bg-titanium group-hover/item:border-titanium transition-all duration-300">
                                                        <Check className="h-3 w-3 text-titanium group-hover/item:text-white transition-colors" />
                                                    </div>
                                                    <span className="text-muted-foreground text-base sm:text-lg leading-relaxed group-hover/item:text-foreground transition-colors">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {(j as any).note && (
                                        <div className="relative p-6 bg-muted/30 border border-border/50 rounded-2xl overflow-hidden group/note">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-titanium" />
                                            <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10">
                                                <span className="text-titanium font-bold uppercase text-[10px] tracking-widest block mb-2 opacity-60 group-hover/note:opacity-100 transition-opacity">Nota Importante</span>
                                                {(j as any).note}
                                            </p>
                                        </div>
                                    )}

                                    <div className="pt-6 flex flex-col sm:flex-row items-center gap-10">
                                        <div className="text-center sm:text-left">
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Preço Inicial</span>
                                            <div className="text-3xl font-serif font-bold text-foreground">
                                                {j.price}
                                            </div>
                                        </div>
                                        <Button 
                                            size="lg" 
                                            className="h-16 px-10 bg-primary text-primary-foreground group rounded-full text-base font-bold shadow-xl hover:shadow-2xl hover:bg-primary/95 transition-all"
                                            onClick={() => handleCheckout(j)}
                                            disabled={loading !== null}
                                        >
                                            {loading === j.id ? <Loader2 className="mr-3 h-5 w-5 animate-spin" /> : null}
                                            {j.buttonText}
                                            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
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
