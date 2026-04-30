import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { nome, email, telefone, patrimonio, mensagem } = body

    if (!nome || !email || !telefone) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 })
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL não configurada")
      return NextResponse.json({ error: "Configuração interna ausente" }, { status: 500 })
    }

    // Formato compatível com o Apps Script do bezerra-borges-site
    const payload = {
      type: "contact",
      name: nome,
      email,
      phone: telefone,
      message: `[Offshore] Patrimônio: ${patrimonio || "não informado"}${mensagem ? ` | ${mensagem}` : ""}`,
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
  } catch (error: any) {
    console.error("Leads API Error:", error)
    return NextResponse.json({ error: "Erro ao registrar contato" }, { status: 500 })
  }
}
