"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import logoImg from '../../public/primera.png'
export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={logoImg} 
                alt="Joan Alexander Barbershop Interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary tracking-[0.3em] uppercase text-sm font-sans mb-4">
              {t.about.title}
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-gold-gradient">{t.about.subtitle}</span>
            </h2>
            
            <div className="elegant-line w-24 my-8" />
            
            <p className="text-foreground/70 font-sans font-light leading-relaxed mb-6">
              {t.about.description1}
            </p>
            <p className="text-foreground/70 font-sans font-light leading-relaxed mb-6">
              {t.about.description2}
            </p>
            <p className="text-foreground/70 font-sans font-light leading-relaxed mb-8">
              {t.about.description3}
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-light text-gold-gradient">10+</div>
                <div className="text-foreground/50 font-sans text-sm uppercase tracking-wider mt-1">
                  {t.about.experience}
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-gold-gradient">500+</div>
                <div className="text-foreground/50 font-sans text-sm uppercase tracking-wider mt-1">
                  {t.about.clients}
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-gold-gradient">5.0</div>
                <div className="text-foreground/50 font-sans text-sm uppercase tracking-wider mt-1">
                  {t.about.rating}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
