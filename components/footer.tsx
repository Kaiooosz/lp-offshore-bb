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
    { label: "Contato", href: "#contato" },
    { label: "Site Principal", href: "https://escritorio.com.br", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
          <Link href="/" className="flex items-center">
  <img 
    src="/Logofundopreto.png" 
    alt="Offshore Logo" 
    className="h-22 w-auto object-contain"
  />
</Link>
            <p className="text-primary-foreground/60 leading-relaxed mb-6 max-w-sm">
              Especialistas em estruturação offshore para proteção patrimonial e expansão internacional do seu negócio.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Escritório. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/40">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
