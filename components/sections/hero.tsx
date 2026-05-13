"use client"

import { motion } from "framer-motion"
import { Scissors, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden overflow-x-hidden">
      {/* Background Image - desktop: right side, smaller; mobile: centered on face */}
      <div className="absolute inset-0">
        {/* Desktop gradient - stronger from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10 hidden lg:block" />
        {/* Mobile gradient - top to bottom for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background z-10 lg:hidden" />
        
        {/* Desktop image - positioned more to the right, smaller */}
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-[55%]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-9PkIYV4zQuGZBo9ZYqZD38gJHFAQRs.jpeg"
              alt="Joan Alexander - High-End Barbershop"
              fill
              className="object-cover object-[center_top]"
              priority
            />
          </div>
        </div>

        {/* Mobile image - positioned to show face, moved down */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-9PkIYV4zQuGZBo9ZYqZD38gJHFAQRs.jpeg"
            alt="Joan Alexander - High-End Barbershop"
            fill
            className="object-cover object-[center_35%]"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
      </div>

      {/* Content - aligned to left */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-primary/80 tracking-[0.3em] uppercase text-sm font-sans mb-4">
            {t.hero.subtitle}
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-wide mb-4">
            <span className="text-gold-gradient">JOAN</span>
            <br />
            <span className="text-gold-gradient">ALEXANDER</span>
          </h1>

          <div className="elegant-line w-48 my-8" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-3 text-foreground/80 text-sm font-sans uppercase tracking-wider"
          >
            <div className="flex items-center gap-3">
              <Scissors className="w-4 h-4 text-primary" />
              <span>{t.hero.haircuts}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary text-lg">✦</span>
              <span>{t.hero.beard}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary text-lg">✦</span>
              <span>{t.hero.hairProstheses}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 text-foreground/60 font-sans text-sm"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>{t.hero.langList}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Gran Via de Ramón y Cajal 43, Valencia, 46007</span>
            </div>
          </motion.div>

          <motion.a
            href="#booking"
            onClick={(e) => {
              if (typeof window !== "undefined" && window.innerWidth < 1024) {
                const target = document.getElementById("reservar-online")
                if (target) {
                  e.preventDefault()
                  target.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-block mt-12 px-10 py-4 bg-primary text-primary-foreground font-sans uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            {t.nav.book}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border border-primary/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
