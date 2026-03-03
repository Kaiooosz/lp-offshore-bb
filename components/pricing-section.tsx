"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import Link from "next/link"

const plans = [
    {
        name: "Consulta com Contador",
        subtitle: "ECONÔMICO",
        price: "US$ 20",
        description: "Sessão de 30 min para tirar dúvidas com o especialista contábil offshore.",
        features: [
            "Tire dúvidas pontuais",
            "Análise rápida de viabilidade",
            "Valor 100% reembolsável ao fechar qualquer plano de abertura",
        ],
        highlight: false,
        buttonText: "Contratar Agora",
        href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de contratar a Consulta com Contador (US$ 20).",
    },
    {
        name: "Estratégia Offshore",
        subtitle: "ESTRATÉGICO",
        price: "US$ 119",
        description: "Sessão de 2h para a criação e execução de estratégia offshore personalizada.",
        features: [
            "Planejamento jurisdicional completo",
            "Estruturação societária avançada",
            "Definição de fluxos financeiros",
            "Valor 100% reembolsável ao fechar qualquer plano de abertura",
        ],
        highlight: false,
        buttonText: "Contratar Agora",
        href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de contratar a Estratégia Offshore (US$ 119).",
    },
    {
        name: "Estratégia Brasil",
        subtitle: "MAIS VENDIDO",
        price: "US$ 149",
        description: "Sessão de 2h para elaborar estratégia de otimização tributária e proteção jurídica no Brasil.",
        features: [
            "Blindagem patrimonial no Brasil",
            "Otimização fiscal nacional",
            "Integração com offshore",
            "Valor 100% reembolsável ao fechar qualquer plano de abertura",
        ],
        highlight: true,
        buttonText: "Contratar Agora",
        href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de contratar a Estratégia Brasil (US$ 149).",
    },
]

export function PricingSection() {
    return (
        <section className="py-24 bg-background" id="consultoria">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollAnimation className="text-center mb-16">
                    <span className="text-sm font-medium text-titanium uppercase tracking-wider">Agende sua consultoria</span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
                        A orientação que você precisa
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Escolha o nível de profundidade ideal para o seu momento atual. Nosso compromisso é com o seu sucesso.
                    </p>
                </ScrollAnimation>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <ScrollAnimation key={index} delay={index * 100}>
                            <div className={`relative flex flex-col h-full p-8 rounded-2xl border ${plan.highlight ? "border-titanium shadow-xl bg-muted/20" : "border-border bg-background"} transition-all duration-300 hover:shadow-2xl`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-titanium text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                                        Mais Vendido
                                    </div>
                                )}

                                <div className="mb-8">
                                    <span className="text-xs font-bold text-titanium uppercase tracking-widest block mb-2">{plan.subtitle}</span>
                                    <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                                    <div className="text-4xl font-serif font-bold text-foreground mb-4">{plan.price}</div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex-1 mb-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-snug">
                                                <Check className="h-5 w-5 text-titanium mt-0.5 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto space-y-4">
                                    <Button asChild size="lg" className={`w-full ${plan.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                                        <Link href={plan.href} target="_blank">{plan.buttonText}</Link>
                                    </Button>
                                    <div className="flex items-center gap-2 justify-center text-[10px] text-muted-foreground text-center italic">
                                        <Info className="h-3 w-3" />
                                        <span>Valor reembolsável em formato de Cupom de Desconto</span>
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
