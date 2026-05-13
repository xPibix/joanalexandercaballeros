"use client"

import { motion } from "framer-motion"
import { Scissors, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      categoryKey: "cuts" as const,
      items: [
        { nameKey: "classicCut" as const, price: "19€+", duration: `40${t.services.duration}` },
        { nameKey: "shave" as const, price: "15€", duration: `30${t.services.duration}` },
        { nameKey: "scissorsCut" as const, price: "22€+", duration: `40${t.services.duration}` },
        { nameKey: "kidsCut" as const, price: "20€", duration: `40${t.services.duration}` },
        { nameKey: "ukrainianCut" as const, price: "20€", duration: `40${t.services.duration}` },
      ]
    },
    {
      categoryKey: "beard" as const,
      items: [
        { nameKey: "beardTrim" as const, price: "9€+", duration: `20${t.services.duration}`, descKey: "beardDesc" as const },
      ]
    },
    {
      categoryKey: "premium" as const,
      items: [
        { nameKey: "imageConsulting" as const, price: "190€", duration: `1${t.services.hour} 30${t.services.duration}` },
        { nameKey: "hairProsthesis" as const, price: "200€+", duration: `1${t.services.hour} 30${t.services.duration}` },
        { nameKey: "repolarization" as const, price: "20€+", duration: `40${t.services.duration}` },
      ]
    },
    {
      categoryKey: "special" as const,
      items: [
        { nameKey: "englishService" as const, price: "20€", duration: `40${t.services.duration}` },
        { nameKey: "manicure" as const, price: "14€", duration: `40${t.services.duration}` },
        { nameKey: "familyPlan" as const, price: "50€+", duration: `1${t.services.hour} 30${t.services.duration}` },
        { nameKey: "seniors" as const, price: "15€", duration: `30${t.services.duration}` },
      ]
    }
  ]

  const categoryNames = {
    es: { cuts: "Cortes", beard: "Barba", premium: "Servicios Premium", special: "Especiales" },
    en: { cuts: "Cuts", beard: "Beard", premium: "Premium Services", special: "Special" },
    uk: { cuts: "Стрижки", beard: "Борода", premium: "Преміум послуги", special: "Спеціальні" }
  }

  const { language } = useLanguage()

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-sans mb-4">
            {t.services.title}
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            <span className="text-gold-gradient">{t.services.subtitle}</span>
          </h2>
          <div className="elegant-line w-32 mx-auto mt-8" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((category, catIndex) => (
            <motion.div
              key={category.categoryKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-card/50 border border-border/50 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scissors className="w-5 h-5 text-primary" />
                <h3 className="text-xl uppercase tracking-wider">
                  {categoryNames[language][category.categoryKey]}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-start justify-between py-3 border-b border-border/30 last:border-0 hover-lift cursor-default"
                  >
                    <div className="flex-1">
                      <h4 className="font-sans font-medium text-foreground/90">
                        {t.services.items[service.nameKey]}
                      </h4>
                      {service.descKey && (
                        <p className="text-foreground/50 text-sm font-sans mt-1">
                          {t.services.items[service.descKey]}
                        </p>
                      )}
                      <div className="flex items-center gap-1 text-foreground/40 text-xs font-sans mt-1">
                        <Clock className="w-3 h-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="text-primary font-sans font-semibold text-lg ml-4">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
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
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-sans uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
          >
            {t.nav.book}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
