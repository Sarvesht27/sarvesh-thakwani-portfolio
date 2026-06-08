"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/#experience", label: "WORK" },
  { href: "/edits", label: "EDITING" },
  { href: "/designs", label: "DESIGN" },
  { href: "/#contact", label: "CONTACT" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-wider text-white">SARVESH <span className="text-primary">THAKWANI</span></span>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">VIDEO EDITOR & DESIGNER</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] tracking-wider font-semibold transition-colors duration-200 ${
                  pathname === item.href 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-6 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(255,48,48,0.8)]" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative w-max text-[13px] tracking-wider font-semibold transition-colors ${
                  pathname === item.href 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-6 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(255,48,48,0.8)]" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
