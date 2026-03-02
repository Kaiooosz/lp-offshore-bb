"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, MessageCircle } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Calendar,
    title: "Agende uma Consulta",
    description: "Online com especialistas",
    action: "Agendar",
    href: "#contato",
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
    href: "https://wa.me/5511943665367?text=Estou%20interessado%20em%20saber%20mais%20sobre%20Proteja%20seu%20patrim%C3%B4nio.%20Expanda%20globalmente.",
  },
]

export function ProcessSection() {
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
              Entre em contato conosco para uma consulta inicial gratuita. Nossa equipe de especialistas está pronta
              para entender suas necessidades e apresentar a melhor solução para o seu caso.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link href="https://wa.me/5511943665367?text=Estou%20interessado%20em%20saber%20mais%20sobre%20Proteja%20seu%20patrim%C3%B4nio.%20Expanda%20globalmente." target="_blank">Agendar Consulta Gratuita</Link>
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
            {contactMethods.map((method, index) => (
              <ScrollAnimation key={index} animation="slide-right" delay={index * 100}>
                <Link
                  href={method.href}
                  className="block p-6 bg-background rounded-xl border border-border hover:border-titanium/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <span className="text-sm font-medium text-titanium group-hover:text-foreground transition-colors">
                    {method.action} →
                  </span>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
