"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#processo", label: "Processo" },
  { href: "#jurisdicoes-grade", label: "Jurisdições" },
  { href: "#consultoria", label: "Consultoria" },
  { href: "#equipe", label: "Equipe" },
  { href: "https://api.whatsapp.com/send/?phone=5511982712025&text=Olá, gostaria de agendar um diagnóstico estratégico com a Bezerra Borges Advogados", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleConsultationCheckout = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 2000,
          name: "Consulta com Contador - BBLAW",
          priceId: "price_1TAElnFsbLGLnQ7wjhz7dkYI",
        }),
      })

      const { url, error } = await response.json()
      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch (error) {
      console.error("Header checkout error:", error)
      alert("Erro ao iniciar agendamento. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Logofundopreto.png"
              alt="Offshore Logo"
              className="h-22 w-auto object-contain"
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleConsultationCheckout}
              disabled={loading}
            >
              {loading ? "..." : "Agendar Consulta"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button
                  className="w-full bg-primary text-primary-foreground"
                  onClick={handleConsultationCheckout}
                  disabled={loading}
                >
                  {loading ? "Processando..." : "Agendar Consulta"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
