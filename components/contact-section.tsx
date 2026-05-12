"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, MessageCircle, CheckCircle, Loader2 } from "lucide-react"

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5521979901686&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20diagn%C3%B3stico%20offshore%20com%20a%20Bezerra%20Borges%20Advogados"

const BENEFICIOS = [
  "Triagem por objetivo, patrimônio e operação",
  "Indicação inicial de jurisdições compatíveis",
  "Mapeamento de riscos fiscais, bancários e societários",
  "Encaminhamento para consulta, diagnóstico pago ou estruturação",
]

const PATRIMONIO_OPTIONS = [
  "Até R$ 500 mil",
  "R$ 500 mil a R$ 2 milhões",
  "R$ 2 milhões a R$ 10 milhões",
  "Acima de R$ 10 milhões",
]

const OBJETIVO_OPTIONS = [
  "Receber do exterior",
  "Proteger patrimônio",
  "Investir internacionalmente",
  "Abrir operação fora do Brasil",
  "Regularizar ou revisar estrutura existente",
]

const RECEITA_OPTIONS = [
  "Ainda não recebo do exterior",
  "Até US$ 10 mil/mês",
  "US$ 10 mil a US$ 50 mil/mês",
  "US$ 50 mil a US$ 100 mil/mês",
  "Acima de US$ 100 mil/mês",
]

const RISCO_OPTIONS = [
  "Não tenho risco relevante no momento",
  "Tenho dívida ou passivo empresarial",
  "Tenho processo em andamento",
  "Atuo em setor com risco operacional elevado",
  "Prefiro explicar em contato reservado",
]

const BANKING_OPTIONS = [
  "Preciso de conta bancária",
  "Preciso de gateway de pagamento",
  "Preciso dos dois",
  "Já tenho banking/gateway",
  "Ainda não sei",
]

const ESTRUTURA_OPTIONS = [
  "Estrutura simples para operação",
  "Estrutura patrimonial ou holding",
  "Estrutura com sócios",
  "Revisão de estrutura existente",
  "Quero indicação do especialista",
]

const CONVERSION_STAGES = [
  { label: "WhatsApp", detail: "triagem rápida e urgência operacional" },
  { label: "Formulário", detail: "lead qualificado por objetivo e capacidade" },
  { label: "Consulta paga", detail: "dúvida jurídica ou tributária específica" },
  { label: "Diagnóstico pago", detail: "mapa de estrutura, risco e jurisdição" },
  { label: "Fechamento", detail: "abertura, revisão ou estruturação completa" },
]

type LeadForm = {
  nome: string
  email: string
  telefone: string
  objetivo: string
  patrimonio: string
  receitaInternacional: string
  riscoEmpresarial: string
  precisaBanking: string
  tipoEstrutura: string
  mensagem: string
}

const INITIAL_FORM: LeadForm = {
  nome: "",
  email: "",
  telefone: "",
  objetivo: "",
  patrimonio: "",
  receitaInternacional: "",
  riscoEmpresarial: "",
  precisaBanking: "",
  tipoEstrutura: "",
  mensagem: "",
}

export function ContactSection() {
  const [form, setForm] = useState<LeadForm>(INITIAL_FORM)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
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
      setForm(INITIAL_FORM)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-24 md:py-32 bg-black relative" id="contato">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollAnimation animation="fade-in" className="text-center mb-16">
          <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.25em] mb-4 block">
            Diagnóstico
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20">
            Diagnóstico Offshore<br className="hidden sm:block" /> em 2 minutos
          </h2>
          <p className="mt-6 text-base text-white/40 font-light max-w-xl mx-auto leading-relaxed">
            Responda algumas perguntas objetivas para nossa equipe indicar a estrutura mais adequada ao seu perfil.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ScrollAnimation animation="slide-left">
            <div className="border border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col gap-6">
              <div>
                <span className="inline-block text-[9px] font-light tracking-[0.25em] uppercase border border-white/20 text-white/60 px-3 py-1 mb-6">
                  Qualificação Premium
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-3">
                  Estruturação internacional lícita, personalizada e defensável
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  O diagnóstico inicial separa curiosidade de demanda real e orienta o próximo passo:
                  WhatsApp, formulário, consulta paga, diagnóstico pago ou fechamento de estruturação.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {BENEFICIOS.map((beneficio) => (
                  <li key={beneficio} className="flex items-center gap-3 text-sm font-light text-white/60">
                    <CheckCircle className="h-4 w-4 text-white/30 shrink-0" />
                    {beneficio}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[10px] font-light text-white/40 uppercase tracking-[0.2em] mb-4">
                  Conversões por qualidade
                </p>
                <div className="grid gap-2">
                  {CONVERSION_STAGES.map((stage) => (
                    <div key={stage.label} className="grid grid-cols-[110px_1fr] gap-3 border border-white/10 bg-black/40 px-4 py-3">
                      <p className="text-[10px] text-white/70 uppercase tracking-[0.18em] font-light">{stage.label}</p>
                      <p className="text-xs text-white/40 font-light leading-relaxed">{stage.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="#diagnostico-offshore"
                  className="group flex items-center justify-center gap-3 w-full bg-white text-black py-4 px-6 text-[11px] font-light uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
                >
                  Preencher Diagnóstico
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </a>
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

          <ScrollAnimation animation="slide-right">
            <div className="border border-white/10 bg-white/[0.03] p-8 md:p-10" id="diagnostico-offshore">
              <h3 className="text-xl font-light text-white tracking-tight mb-2">Quiz de qualificação</h3>
              <p className="text-sm text-white/40 font-light mb-8">
                Com base nas respostas, um especialista indica a estrutura mais adequada ao seu caso.
              </p>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle className="h-10 w-10 text-white/50" />
                  <p className="text-lg font-light text-white">Recebemos seu diagnóstico.</p>
                  <p className="text-sm text-white/40 font-light">Nossa equipe retornará em breve com o próximo passo recomendado.</p>
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
                      Objetivo principal *
                    </label>
                    <select
                      name="objetivo"
                      value={form.objetivo}
                      onChange={handleChange}
                      required
                      className="bg-black border border-white/10 px-4 py-3 text-sm font-light text-white/70 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-black">Selecione o objetivo</option>
                      {OBJETIVO_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-black">{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                      Patrimônio aproximado *
                    </label>
                    <select
                      name="patrimonio"
                      value={form.patrimonio}
                      onChange={handleChange}
                      required
                      className="bg-black border border-white/10 px-4 py-3 text-sm font-light text-white/70 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-black">Selecione uma faixa</option>
                      {PATRIMONIO_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-black">{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                      Receita mensal internacional *
                    </label>
                    <select
                      name="receitaInternacional"
                      value={form.receitaInternacional}
                      onChange={handleChange}
                      required
                      className="bg-black border border-white/10 px-4 py-3 text-sm font-light text-white/70 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-black">Selecione uma faixa</option>
                      {RECEITA_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-black">{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                        Risco, dívida ou processo? *
                      </label>
                      <select
                        name="riscoEmpresarial"
                        value={form.riscoEmpresarial}
                        onChange={handleChange}
                        required
                        className="bg-black border border-white/10 px-4 py-3 text-sm font-light text-white/70 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Selecione</option>
                        {RISCO_OPTIONS.map((option) => (
                          <option key={option} value={option} className="bg-black">{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                        Banking ou gateway? *
                      </label>
                      <select
                        name="precisaBanking"
                        value={form.precisaBanking}
                        onChange={handleChange}
                        required
                        className="bg-black border border-white/10 px-4 py-3 text-sm font-light text-white/70 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Selecione</option>
                        {BANKING_OPTIONS.map((option) => (
                          <option key={option} value={option} className="bg-black">{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                      Tipo de estrutura desejada *
                    </label>
                    <select
                      name="tipoEstrutura"
                      value={form.tipoEstrutura}
                      onChange={handleChange}
                      required
                      className="bg-black border border-white/10 px-4 py-3 text-sm font-light text-white/70 focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-black">Selecione o perfil</option>
                      {ESTRUTURA_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-black">{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-light uppercase tracking-[0.2em] text-white/40">
                      Contexto adicional
                    </label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte detalhes importantes sobre operação, patrimônio, sócios, urgência ou documentação..."
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
                          Enviar Diagnóstico
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
                      WhatsApp
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
