"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, ChevronLeft, MessageCircle } from "lucide-react"

const questions = [
  {
    id: "objetivo",
    question: "O que você busca principalmente?",
    options: [
      "Receber pagamentos do exterior",
      "Proteger patrimônio pessoal",
      "Investir internacionalmente",
      "Abrir operação no exterior",
    ],
  },
  {
    id: "patrimonio",
    question: "Patrimônio aproximado?",
    options: [
      "Até US$ 100 mil",
      "US$ 100 mil – US$ 500 mil",
      "US$ 500 mil – US$ 2 milhões",
      "Acima de US$ 2 milhões",
    ],
  },
  {
    id: "receita",
    question: "Receita mensal internacional?",
    options: [
      "Ainda não tenho",
      "Até US$ 5 mil/mês",
      "US$ 5 mil – US$ 30 mil/mês",
      "Acima de US$ 30 mil/mês",
    ],
  },
  {
    id: "risco",
    question: "Você tem dívida, processo ou risco empresarial relevante?",
    options: [
      "Não",
      "Sim — dívidas pessoais",
      "Sim — processos em curso",
      "Sim — risco empresarial relevante",
    ],
  },
  {
    id: "banking",
    question: "Precisa de conta bancária ou gateway internacional?",
    options: [
      "Sim, com urgência",
      "Sim, mas sem urgência",
      "Ainda não sei",
      "Já tenho",
    ],
  },
  {
    id: "estrutura",
    question: "Que tipo de estrutura busca?",
    options: [
      "Simples e operacional",
      "Patrimonial e sucessória",
      "Mista — operacional + proteção",
      "Não sei ainda",
    ],
  },
]

export function QuizSection() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  const current = questions[step]
  const total = questions.length

  function handleAnswer(option: string) {
    const updated = { ...answers, [current.id]: option }
    setAnswers(updated)
    if (step < total - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
    }
  }

  function buildWhatsappMessage() {
    const lines = questions.map(
      (q, i) => `${i + 1}. ${q.question}\n→ ${answers[q.id] ?? "—"}`
    )
    const body = `Olá, completei o Diagnóstico Offshore:\n\n${lines.join("\n\n")}\n\nGostaria de saber qual estrutura é mais adequada para o meu perfil.`
    return `https://api.whatsapp.com/send/?phone=5521979901686&text=${encodeURIComponent(body)}`
  }

  const progressPct = done ? 100 : Math.round((step / total) * 100)

  return (
    <section className="py-24 bg-black border-t border-white/5 relative" id="diagnostico">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <ScrollAnimation className="text-center mb-14">
          <span className="text-[10px] font-light text-white/40 uppercase tracking-[0.25em] mb-4 block">
            Qualificação
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20 mb-4">
            DIAGNÓSTICO OFFSHORE EM 2 MINUTOS
          </h2>
          <p className="text-white/40 font-light text-base max-w-xl mx-auto leading-relaxed">
            Responda 6 perguntas e um especialista indicará a estrutura mais adequada para o seu perfil.
          </p>
        </ScrollAnimation>

        <div className="border border-white/10 bg-white/[0.02] p-8 md:p-12">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-light">
                {done ? "Concluído" : `Pergunta ${step + 1} de ${total}`}
              </span>
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-light">{progressPct}%</span>
            </div>
            <div className="h-px bg-white/10 relative">
              <div
                className="absolute top-0 left-0 h-px bg-white/50 transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {!done ? (
            <div>
              <p className="text-xl md:text-2xl font-light text-white tracking-tight mb-8 leading-snug">
                {current.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="text-left px-6 py-4 border border-white/10 text-white/60 text-sm font-light leading-snug hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-200 group flex items-center justify-between gap-4"
                  >
                    {opt}
                    <ArrowRight className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-8 flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors"
                >
                  <ChevronLeft className="h-3 w-3" />
                  Voltar
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                  Diagnóstico recebido.
                </p>
                <p className="text-white/50 font-light text-base leading-relaxed max-w-lg mx-auto">
                  Com base nas suas respostas, um especialista vai indicar a estrutura mais adequada para o seu perfil. Clique abaixo para enviar seu diagnóstico e iniciar o atendimento.
                </p>
              </div>
              <a
                href={buildWhatsappMessage()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black py-4 px-10 text-[11px] font-light uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar para um especialista
                <ArrowRight className="h-3 w-3" />
              </a>
              <button
                onClick={() => { setStep(0); setAnswers({}); setDone(false) }}
                className="mt-6 block mx-auto text-[10px] text-white/25 uppercase tracking-widest hover:text-white/50 transition-colors"
              >
                Recomeçar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
