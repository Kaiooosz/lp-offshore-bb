import { NextResponse } from "next/server"

type LeadBody = {
  nome?: string
  email?: string
  telefone?: string
  objetivo?: string
  patrimonio?: string
  receitaInternacional?: string
  riscoEmpresarial?: string
  precisaBanking?: string
  tipoEstrutura?: string
  mensagem?: string
}

function getQualificationStage(body: LeadBody) {
  const normalize = (value?: string) =>
    (value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()

  const patrimonio = normalize(body.patrimonio)
  const receita = normalize(body.receitaInternacional)
  const risco = normalize(body.riscoEmpresarial)
  const objetivo = normalize(body.objetivo)

  if (
    patrimonio.includes("acima") ||
    receita.includes("acima") ||
    (receita.includes("50 mil") && objetivo.includes("abrir"))
  ) {
    return "Fechamento / estruturação completa"
  }

  if (
    patrimonio.includes("10 milhoes") ||
    receita.includes("50 mil") ||
    risco.includes("processo") ||
    risco.includes("passivo")
  ) {
    return "Diagnóstico pago"
  }

  if (patrimonio || receita || objetivo) {
    return "Consulta paga ou formulário qualificado"
  }

  return "WhatsApp / triagem inicial"
}

function buildLeadMessage(body: LeadBody) {
  const details = [
    ["Objetivo", body.objetivo],
    ["Patrimônio aproximado", body.patrimonio],
    ["Receita mensal internacional", body.receitaInternacional],
    ["Risco, dívida ou processo", body.riscoEmpresarial],
    ["Banking ou gateway", body.precisaBanking],
    ["Tipo de estrutura", body.tipoEstrutura],
    ["Qualificação sugerida", getQualificationStage(body)],
    ["Contexto adicional", body.mensagem],
  ]

  return details
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join(" | ")
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadBody
    const { nome, email, telefone } = body

    if (!nome || !email || !telefone) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 })
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL não configurada")
      return NextResponse.json({ error: "Configuração interna ausente" }, { status: 500 })
    }

    const payload = {
      type: "qualification_quiz",
      name: nome,
      email,
      phone: telefone,
      message: buildLeadMessage(body),
      fonte: "Landing Page Offshore - Diagnóstico",
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Apps Script retornou status ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Leads API Error:", error)
    return NextResponse.json({ error: "Erro ao registrar contato" }, { status: 500 })
  }
}
