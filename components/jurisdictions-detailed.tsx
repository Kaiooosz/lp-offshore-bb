"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        price: "A partir de US$ 599",
        buttonText: "Leia sobre os EUA",
        href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de saber mais sobre a estrutura nos EUA.",
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
        price: "A partir de US$ 2.900",
        buttonText: "Leia sobre Névis",
        href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de saber mais sobre a estrutura de Névis.",
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
        price: "A partir de US$ 2.900",
        buttonText: "Falar com Especialista",
        href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de saber mais sobre a estrutura das Bahamas.",
    },
]

export function JurisdictionsDetailed() {
    return (
        <section className="py-24 bg-background" id="jurisdicoes-detalhes">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="space-y-24 max-w-6xl mx-auto">
                    {jurisdictions.map((j, index) => (
                        <ScrollAnimation key={j.id} animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src={j.image}
                                            alt={j.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                            <div>
                                                <h3 className="text-white text-3xl font-serif font-bold mb-2">{j.name}</h3>
                                                <p className="text-white/80 font-medium">{j.tagline}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                                    <div className="space-y-6">
                                        <ul className="space-y-3">
                                            {j.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                    <Check className="h-5 w-5 text-titanium mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {j.note && (
                                            <div className="p-4 bg-muted border-l-4 border-titanium text-xs text-muted-foreground leading-relaxed italic">
                                                {j.note}
                                            </div>
                                        )}

                                        <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                                            <div className="text-2xl font-bold text-foreground">{j.price} →</div>
                                            <Button asChild size="lg" className="bg-primary text-primary-foreground group">
                                                <Link href={j.href} target="_blank">
                                                    {j.buttonText}
                                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </div>
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
