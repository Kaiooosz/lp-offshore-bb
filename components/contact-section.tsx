"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, MessageCircle, CheckCircle, Loader2 } from "lucide-react"

const STRIPE_PRODUCT_ID = "prod_UQt5dYJOG1ANiX"

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5521979901686&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20estruturação%20offshore%20com%20a%20Bezerra%20Borges%20Advogados"

const BENEFICIOS = [
  "Análise do seu perfil patrimonial",
  "Identificação da jurisdição ideal",
  "Estratégias de proteção de ativos",
  "Acesso direto a sócios especialistas",
]

const PATRIMONIO_OPTIONS = [
  "Até R$ 500 mil",
  "R$ 500 mil – R$ 2 milhões",
  "R$ 2 milhões – R$ 10 milhões",
  "Acima de R$ 10 milhões",
]

export function ContactSection() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", patrimonio: "", mensagem: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  async function handleCheckout() {
    setCheckoutLoading(true)
    setCheckoutError(null)
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: STRIPE_PRODUCT_ID }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Erro ao iniciar pagamento")
      if (data.url) window.location.href = data.url
    } catch (err: any) {
      setCheckoutError(err.message)
    } finally {
      setCheckoutLoading(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setForm({ nome: "", email: "", telefone: "", patrimonio: "", mensagem: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-24 md:py-32 bg-black relative" id="contato">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <ScrollAnimation animation="fade-in" className="text-center mb-16">
          <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.25em] mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
            PRONTO PARA estruturar<br className="hidden sm:block" /> seu OFFSHORE?
          </h2>
          <p className="mt-6 text-base text-white/40 font-light max-w-xl mx-auto leading-relaxed">
            Agende uma consultoria estratégica e descubra como estruturar seu patrimônio internacionalmente com segurança jurídica.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left – Consultation Card */}
          <ScrollAnimation animation="slide-left">
            <div className="border border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col gap-6">
              <div>
                <span className="inline-block text-[9px] font-light tracking-[0.25em] uppercase border border-white/20 text-white/60 px-3 py-1 mb-6">
                  Agendamento Imediato
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-3">
                  Consultoria Estratégica Offshore
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  Sessão exclusiva de 60 minutos com um de nossos especialistas para análise do seu contexto patrimonial e identificação das melhores jurisdições e estruturas.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {BENEFICIOS.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm font-light text-white/60">
                    <CheckCircle className="h-4 w-4 text-white/30 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[10px] font-light text-white/40 uppercase tracking-[0.2em] mb-1">Investimento</p>
                <p className="text-4xl font-light text-white tracking-tight">
                  USD 125 <span className="text-base text-white/40">/ sessão</span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleCheckout}
                  disabled={checkoutLoading}
                  className="group flex items-center justify-center gap-3 w-full bg-white text-black py-4 px-6 text-[11px] font-light uppercase tracking-[0.2em] hover:bg-white/90 transition-colors disabled:opacity-60"
                >
                  {checkoutLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Preencha seu Formulário
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                {checkoutError && (
                  <p className="text-xs text-red-400/70 font-light text-center">{checkoutError}</p>
                )}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 w-full border border-white/20 text-white py-4 px-6 text-[11px] font-light uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agendar via WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                <div className="bg-black px-4 py-3">
                  <p className="text-[9px] font-light text-white/30 uppercase tracking-[0.15em] mb-1">WhatsApp</p>
                  <p className="text-xs font-light text-white/70">+55 21 97990-1686</p>
                </div>
                <div className="bg-black px-4 py-3">
                  <p className="text-[9px] font-light text-white/30 uppercase tracking-[0.15em] mb-1">E-mail</p>
                  <p className="text-xs font-light text-white/70">contato@bezerraborges.com.br</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right – Lead Form */}
          <ScrollAnimation animation="slide-right">
            <div className="border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h3 className="text-xl font-light text-white tracking-tight mb-2">Deixe seu contato</h3>
              <p className="text-sm text-white/40 font-light mb-8">
                Nossa equipe entra em contato com a solução ideal para o seu caso.
              </p>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle className="h-10 w-10 text-white/50" />
                  <p className="text-lg font-light text-white">Recebemos seu contato!</p>
                  <p className="text-sm text-white/40 font-light">Nossa equipe retornará em breve.</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[10px] font-light uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors mt-4"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ou fale agora no WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                        Nome Completo *
                      </label>
                      <input
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                        E-mail *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                      placeholder="+55 (11) 99999-9999"
                      className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                      Volume Patrimonial
                    </label>
                    <select
                      name="patrimonio"
                      value={form.patrimonio}
                      onChange={handleChange}
                      className="bg-black border border-white/10 px-4 py-3 text-sm font-light text-white/70 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-black">Selecione uma faixa</option>
                      {PATRIMONIO_OPTIONS.map((o) => (
                        <option key={o} value={o} className="bg-black">{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                      Seu Caso
                    </label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte sobre seus objetivos e como podemos ajudar..."
                      className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400/70 font-light">
                      Erro ao enviar. Tente via WhatsApp ou e-mail.
                    </p>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex items-center justify-center gap-2 bg-white text-black py-4 text-[10px] font-light uppercase tracking-[0.2em] hover:bg-white/90 transition-colors disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <>
                          Enviar Mensagem
                          <ArrowRight className="h-3 w-3" />
                        </>
                      )}
                    </button>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 border border-white/20 text-white py-4 text-[10px] font-light uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp Direto
                    </a>
                  </div>

                  <p className="text-[9px] font-light text-white/25 text-center">
                    Ao enviar, você concorda com nossa política de privacidade (LGPD).
                  </p>
                </form>
              )}
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  )
}
