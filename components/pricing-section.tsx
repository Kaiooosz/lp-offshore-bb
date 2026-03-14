"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Check, Info, Loader2 } from "lucide-react"
import { useState } from "react"
import { getStripe } from "@/lib/stripe-client"

const plans = [
    {
        name: "Consulta com Contador",
        subtitle: "INTRODUTÓRIO",
        price: "US$ 100",
        amount: 10000,
        priceId: "price_1TAElnFsbLGLnQ7wjhz7dkYI",
        description: "Sessão de 30 min para tirar dúvidas com o especialista contábil offshore.",
        features: [
            "Tire dúvidas pontuais",
            "Análise rápida de viabilidade",
            "Valor 100% reembolsável ao fechar plano de abertura",
        ],
        highlight: false,
        buttonText: "Contratar Agora",
    },
    {
        name: "Estratégia Offshore",
        subtitle: "ESTRATÉGICO",
        price: "US$ 119",
        amount: 11900,
        priceId: "price_1TAEnHFsbLGLnQ7wrFLKyNnX",
        description: "Sessão de 2h para a criação e execução de estratégia offshore personalizada.",
        features: [
            "Planejamento jurisdicional completo",
            "Estruturação societária avançada",
            "Definição de fluxos financeiros",
            "Valor 100% reembolsável ao fechar plano de abertura",
        ],
        highlight: false,
        buttonText: "Contratar Agora",
    },
    {
        name: "Estratégia Brasil",
        subtitle: "MAIS VENDIDO",
        price: "US$ 149",
        amount: 14900,
        priceId: "price_1TAEo2FsbLGLnQ7wWY7GSzjg",
        description: "Sessão de 2h para elaborar estratégia de otimização tributária e proteção jurídica no Brasil.",
        features: [
            "Planejamento Proteção Patrimonial no Brasil",
            "Otimização fiscal nacional",
            "Integração com offshore",
            "Valor 100% reembolsável ao fechar plano de abertura",
        ],
        highlight: true,
        buttonText: "Contratar Agora",
    },
]

export function PricingSection() {
    const [loading, setLoading] = useState<string | null>(null)

    const handleCheckout = async (plan: typeof plans[0]) => {
        try {
            setLoading(plan.name)
            const response = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: (plan as any).amount,
                    name: plan.name,
                    priceId: (plan as any).priceId,
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
                        O PRIMEIRO PASSO PARA PROTEGER O QUE É SEU
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl font-light leading-relaxed">
                        Antes de estruturar qualquer offshore, entenda exatamente o que faz sentido para o seu caso. Nossas sessões de consultoria são o ponto de partida para quem leva a sério a proteção patrimonial.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <ScrollAnimation key={index} delay={index * 100}>
                            <div className={`relative flex flex-col h-full p-8 md:p-10 rounded-2xl border ${plan.highlight ? "border-white/20 bg-gradient-to-b from-[#141414] to-black shadow-2xl shadow-black" : "border-white/5 bg-[#0a0a0a]"} transition-all duration-300 hover:border-white/30 shadow-2xl shadow-black`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                        Recomendado
                                    </div>
                                )}

                                <div className="mb-8">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] block mb-2">{plan.subtitle}</span>
                                    <h3 className="text-2xl font-light text-white mb-6 tracking-tight">{plan.name}</h3>
                                    <div className="flex flex-col mb-6">
                                        <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.2em] mb-1">a partir de</span>
                                        <div className="text-4xl md:text-5xl font-light text-white tracking-tighter">{plan.price}</div>
                                    </div>
                                    <p className="text-sm text-white/50 leading-relaxed font-light">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex-1 mb-10">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-4 text-sm text-white/60 leading-relaxed font-light">
                                                <div className="mt-0.5 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                                                  <Check className="h-3 w-3 text-white" />
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto space-y-4">
                                    <Button
                                        size="lg"
                                        className={`w-full rounded-full h-14 text-[10px] font-light tracking-[0.2em] uppercase transition-all ${plan.highlight ? "bg-white text-black hover:bg-white/90" : "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"}`}
                                        onClick={() => handleCheckout(plan)}
                                        disabled={loading !== null}
                                    >
                                        {loading === plan.name ? (
                                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                        ) : null}
                                        {plan.buttonText}
                                    </Button>
                                    <div className="flex items-center gap-2 justify-center text-[10px] text-white/30 text-center uppercase tracking-wider font-bold">
                                        <Info className="h-3 w-3" />
                                        <span>Valor 100% reembolsável no serviço final</span>
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

