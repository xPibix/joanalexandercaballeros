"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Gallery() {
  const { t } = useLanguage()

  const tools = [
    {
      src: "/images/scissors.jpg",
      alt: t.gallery.scissors,
      title: t.gallery.scissors,
      desc: t.gallery.scissorsDesc
    },
    {
      src: "/images/razor.jpg",
      alt: t.gallery.razor,
      title: t.gallery.razor,
      desc: t.gallery.razorDesc
    },
    {
      src: "/images/comb.jpg",
      alt: t.gallery.comb,
      title: t.gallery.comb,
      desc: t.gallery.combDesc
    },
    {
      src: "/images/brush.jpg",
      alt: t.gallery.brush,
      title: t.gallery.brush,
      desc: t.gallery.brushDesc
    }
  ]

  const quotes = {
    es: { text: "La excelencia no es un acto, sino un hábito", author: "Aristóteles" },
    en: { text: "Excellence is not an act, but a habit", author: "Aristotle" },
    uk: { text: "Досконалість — це не вчинок, а звичка", author: "Арістотель" }
  }

  const { language } = useLanguage()

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
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
            {t.gallery.title}
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            <span className="text-gold-gradient">{t.gallery.subtitle}</span>
          </h2>
          <div className="elegant-line w-32 mx-auto mt-8" />
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden hover-scale cursor-pointer"
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-sm font-sans font-medium tracking-wider text-gold-gradient">
                  {tool.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic text-foreground/70">
            &ldquo;{quotes[language].text}&rdquo;
          </blockquote>
          <p className="text-primary font-sans uppercase tracking-widest text-sm mt-4">
            — {quotes[language].author}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
