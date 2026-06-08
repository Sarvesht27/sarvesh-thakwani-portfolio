import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:sarveshthakwani@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-foreground">SARVESH</span>
            <span className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">Editor • Designer</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Sarvesh Thakwani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
