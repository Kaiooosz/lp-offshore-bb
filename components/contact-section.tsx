"use client"

import type React from "react"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    patrimony: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground" id="contato">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Content */}
          <ScrollAnimation animation="slide-left">
            <span className="text-sm font-medium text-titanium-light uppercase tracking-wider">Contato</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-balance">
              Agende sua consulta gratuita
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed text-pretty">
              Dê o primeiro passo para a internacionalização do seu patrimônio. Nossa equipe entrará em contato em até
              24 horas para agendar uma conversa personalizada.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                <Calendar className="h-10 w-10 text-titanium-light" />
                <div>
                  <h3 className="font-semibold mb-1">Consulta Online ou Presencial</h3>
                  <p className="text-sm text-primary-foreground/60">Escolha o formato mais conveniente para você</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                  <p className="font-semibold mb-1">Tempo médio</p>
                  <p className="text-primary-foreground/60">45 minutos</p>
                </div>
                <div className="p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                  <p className="font-semibold mb-1">Valor</p>
                  <p className="text-primary-foreground/60">Gratuito</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Content - Form */}
          <ScrollAnimation animation="slide-right">
            <form onSubmit={handleSubmit} className="bg-background text-foreground p-8 rounded-2xl">
              <h3 className="font-semibold text-xl mb-6">Preencha seus dados</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="patrimony" className="block text-sm font-medium mb-2">
                    Faixa de patrimônio
                  </label>
                  <select
                    id="patrimony"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
                    value={formData.patrimony}
                    onChange={(e) => setFormData({ ...formData, patrimony: e.target.value })}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="500k-1m">R$ 500 mil - R$ 1 milhão</option>
                    <option value="1m-5m">R$ 1 milhão - R$ 5 milhões</option>
                    <option value="5m-10m">R$ 5 milhões - R$ 10 milhões</option>
                    <option value="10m+">Acima de R$ 10 milhões</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre seus objetivos..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Solicitar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
