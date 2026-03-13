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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="w-1/4">
            <Link href="/" className="inline-block">
              <img
                src="/LogoBranco.svg"
                alt="Borges Bezerra Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-10 w-2/4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] sm:text-xs font-light tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center justify-end w-1/4">
            <Button
              className="btn-shimmer bg-transparent text-white hover:bg-white hover:text-black rounded-full px-6 py-2 h-auto text-[10px] font-light tracking-[0.2em] transition-all border border-white/30"
              onClick={handleConsultationCheckout}
              disabled={loading}
            >
              {loading ? "AGUARDE..." : "INICIAR AGORA"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-widest uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10">
                <Button
                  className="w-full bg-white text-black rounded-full h-12 text-sm font-medium tracking-widest"
                  onClick={handleConsultationCheckout}
                  disabled={loading}
                >
                  {loading ? "PROCESSANDO..." : "INICIAR AGORA"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
