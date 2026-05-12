"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#jurisdicoes-grade", label: "Jurisdições" },
  { href: "#consultoria", label: "Consultoria" },
  { href: "#equipe", label: "Equipe" },
  { href: "#diagnostico-offshore", label: "Diagnóstico" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleStart = () => {
    const section = document.getElementById("diagnostico-offshore")
    if (section) section.scrollIntoView({ behavior: "smooth" })
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
          <div className="w-1/4">
            <Link href="/" className="inline-block">
              <img
                src="/LogoBranco.svg"
                alt="Borges Bezerra Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

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

          <div className="hidden lg:flex items-center justify-end w-1/4">
            <Button
              className="btn-shimmer bg-transparent text-white hover:bg-white hover:text-black rounded-full px-6 py-2 h-auto text-[10px] font-light tracking-[0.2em] transition-all border border-white/30"
              onClick={handleStart}
            >
              INICIAR AGORA
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Alternar menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    handleStart()
                  }}
                >
                  INICIAR DIAGNÓSTICO
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
