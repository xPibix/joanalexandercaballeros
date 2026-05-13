"use client"

import { Scissors } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Scissors className="w-6 h-6 text-primary" />
            <span className="text-xl font-light tracking-wider">
              <span className="text-gold-gradient">JOAN ALEXANDER</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-8 font-sans text-sm text-foreground/60">
            <a href="#about" className="hover:text-primary transition-colors hover-underline">
              {t.nav.about}
            </a>
            <a href="#services" className="hover:text-primary transition-colors hover-underline">
              {t.nav.services}
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors hover-underline">
              {t.nav.gallery}
            </a>
            <a href="#reviews" className="hover:text-primary transition-colors hover-underline">
              {t.nav.reviews}
            </a>
            <a href="#booking" className="hover:text-primary transition-colors hover-underline">
              {t.nav.contact}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-foreground/40 font-sans text-sm">
            © 2026 Joan Alexander. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
