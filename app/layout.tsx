import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

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
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
