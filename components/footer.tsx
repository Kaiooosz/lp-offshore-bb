import Link from "next/link"
import { Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/escritorio", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/escritorio", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@escritorio", label: "YouTube" },
]

const footerLinks = {
  servicos: [
    { label: "Estruturação Offshore", href: "#" },
    { label: "Proteção Patrimonial", href: "#" },
    { label: "Planejamento Tributário", href: "#" },
    { label: "Planejamento Sucessório", href: "#" },
  ],
  recursos: [
    { label: "Artigos", href: "#artigos" },
    { label: "Curadoria", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "E-books", href: "#" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#equipe" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "https://api.whatsapp.com/send/?phone=5521979901686&text=Ol%C3%A1%2C+gostaria+de+agendar+um+diagn%C3%B3stico+estrat%C3%A9gico+com+a+Bezerra+Borges+Advogados", external: true },
    { label: "", href: "https://www.bezerraborges.com.br", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/LogoBranco.svg"
                alt="Borges Bezerra Logo"
                className="h-28 sm:h-36 w-auto object-contain"
              />
            </Link>
            <p className="text-white/40 leading-relaxed max-w-xs font-light tracking-wide text-sm">
              Especialistas em estruturação offshore para proteção patrimonial e expansão financeira global.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">Serviços</h3>
            <ul className="space-y-4">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">Recursos</h3>
            <ul className="space-y-4">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">Empresa</h3>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/70 hover:text-white transition-colors text-sm font-light flex items-center gap-2 group"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 tracking-widest uppercase">
            © {new Date().getFullYear()} BORGES BEZERRA OFFSHORE. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8 text-xs text-white/40 tracking-widest uppercase">
            <Link href="#" className="hover:text-white transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
