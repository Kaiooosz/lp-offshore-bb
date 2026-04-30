import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { priceId, amount, name } = await req.json()

    let targetPriceId = priceId

    if (priceId && priceId.startsWith("prod_")) {
      const prices = await stripe.prices.list({
        product: priceId,
        active: true,
        limit: 1,
      })
      if (prices.data.length === 0) {
        return NextResponse.json({ error: "Nenhum preço ativo encontrado para este produto." }, { status: 400 })
      }
      targetPriceId = prices.data[0].id
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: targetPriceId
        ? [{ price: targetPriceId, quantity: 1 }]
        : [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: name || "Consultoria BBLAW",
                },
                unit_amount: amount,
              },
              quantity: 1,
            },
          ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/#consultoria`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error("Stripe Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
