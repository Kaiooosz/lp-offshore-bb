import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Offshore | Internacionalização de Patrimônio",
  description:
    "Especialistas em estruturação offshore para proteção patrimonial, planejamento tributário e expansão internacional. Consulta personalizada com especialistas.",
  keywords: "offshore, internacionalização, proteção patrimonial, planejamento tributário, holding, empresa exterior",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
