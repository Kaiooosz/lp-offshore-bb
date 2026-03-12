"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, MessageCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export function ProcessSection() {
  const [loading, setLoading] = useState(false)

  const handleConsultationCheckout = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 2000,
          name: "Consulta com Contador - BBLAW",
          priceId: "price_1TAElnFsbLGLnQ7wjhz7dkYI",
        }),
      })

      const { url, error } = await response.json()
      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch (error) {
      console.error("Process checkout error:", error)
      alert("Erro ao iniciar agendamento. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Calendar,
      title: "Agende uma Consulta",
      description: "Online com especialistas",
      action: "Agendar",
      onClick: handleConsultationCheckout,
    },
    {
      icon: Phone,
      title: "Ligue para nós",
      description: "+55 (11) 94366-5367",
      action: "Ligar",
      href: "tel:+551194366-5367",
    },
    {
      icon: Mail,
      title: "Envie um e-mail",
      description: "contato@BezzeraBorges.com",
      action: "Enviar",
      href: "mailto:contato@BezzeraBorges.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Atendimento rápido e direto",
      action: "Conversar",
      href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Ol%C3%A1%2C+gostaria+de+agendar+um+diagn%C3%B3stico+estrat%C3%A9gico+com+a+Bezerra+Borges+Advogados",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <ScrollAnimation animation="slide-left">
            <span className="text-sm font-medium text-titanium uppercase tracking-wider">Próximo Passo</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Comece sua jornada de internacionalização
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Garantimos sua segurança jurídica e otimização fiscal. Nossa equipe de especialistas está pronta
              para entender suas necessidades e apresentar a melhor solução para o seu caso.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground"
                onClick={handleConsultationCheckout}
                disabled={loading}
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Agendar Consulta de Especialista
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://escritorio.com.br" target="_blank">
                  Conhecer o Escritório
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Right Content - Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => {
              const Content = (
                <div
                  className="p-6 bg-background rounded-xl border border-border hover:border-titanium/50 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full"
                  onClick={method.onClick}
                >
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <span className="text-sm font-medium text-titanium group-hover:text-foreground transition-colors">
                    {method.action} →
                  </span>
                </div>
              )

              if (method.href) {
                return (
                  <ScrollAnimation key={index} animation="slide-right" delay={index * 100}>
                    <Link href={method.href} className="block h-full line-none">
                      {Content}
                    </Link>
                  </ScrollAnimation>
                )
              }

              return (
                <ScrollAnimation key={index} animation="slide-right" delay={index * 100}>
                  {Content}
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
