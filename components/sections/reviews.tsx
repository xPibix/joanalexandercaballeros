"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Reviews stay in original language as requested
const reviews = [
  {
    name: "Alfredo",
    date: "Abril 2026",
    rating: 5,
    service: "Corte clásico, Asesoría básica",
    text: "Yo no suelo cambiar de peluquería, pero tenía que cortarme el pelo hoy y probé con Joan. La verdad que muy buen resultado, se le nota que es un profesional. Volveré sin duda.",
    verified: true
  },
  {
    name: "Carlos M.",
    date: "Marzo 2026",
    rating: 5,
    service: "Asesoría de Imagen",
    text: "Increíble experiencia. Joan no solo te corta el pelo, te asesora sobre tu estilo completo. La transformación fue brutal. 100% recomendado para cualquier hombre que quiera mejorar su imagen.",
    verified: true
  },
  {
    name: "Andriy K.",
    date: "Marzo 2026",
    rating: 5,
    service: "Український крій",
    text: "Дуже задоволений! Joan розуміє українською і робить саме те, що потрібно. Атмосфера в салоні преміум класу. Рекомендую всім українцям у Валенсії!",
    verified: true
  },
  {
    name: "James W.",
    date: "Febrero 2026",
    rating: 5,
    service: "Service for English Speakers",
    text: "Finally found a barber in Valencia who speaks English and truly understands modern men's grooming. The attention to detail is outstanding. The shop has a luxury feel without being pretentious.",
    verified: true
  },
  {
    name: "Miguel Ángel",
    date: "Febrero 2026",
    rating: 5,
    service: "Recorte de Barba",
    text: "El mejor recorte de barba que me han hecho nunca. Joan tiene un ojo artístico para las proporciones faciales. El ambiente del local es muy elegante, te sientes como en casa.",
    verified: true
  },
  {
    name: "Roberto S.",
    date: "Enero 2026",
    rating: 5,
    service: "Plan Familiar",
    text: "Llevé a mi hijo por primera vez y fue una experiencia genial para los dos. Joan tiene mucha paciencia con los niños y el resultado fue perfecto. El precio del plan familiar es muy competitivo.",
    verified: true
  }
]

export function Reviews() {
  const { t, language } = useLanguage()

  const statsLabels = {
    es: { satisfied: "Clientes Satisfechos", avgRating: "Rating Promedio", recommendations: "Recomendaciones" },
    en: { satisfied: "Satisfied Clients", avgRating: "Average Rating", recommendations: "Recommendations" },
    uk: { satisfied: "Задоволених клієнтів", avgRating: "Середній рейтинг", recommendations: "Рекомендації" }
  }

  return (
    <section id="reviews" className="py-24">
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
            {t.reviews.title}
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            <span className="text-gold-gradient">{t.reviews.subtitle}</span>
          </h2>
          <div className="elegant-line w-32 mx-auto mt-8" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/50 border border-border/50 p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-sans font-medium text-foreground flex items-center gap-2">
                    {review.name}
                    {review.verified && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-sans">
                        {t.reviews.verifiedClient}
                      </span>
                    )}
                  </h4>
                  <p className="text-foreground/50 text-sm font-sans">{review.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Service - kept original */}
              <p className="text-primary/80 text-sm font-sans mb-3">
                {t.reviews.service}: {review.service}
              </p>

              {/* Text - kept original */}
              <p className="text-foreground/70 font-sans text-sm leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-12 text-center"
        >
          <div>
            <div className="text-4xl font-light text-gold-gradient">500+</div>
            <div className="text-foreground/50 font-sans text-sm uppercase tracking-wider mt-2">
              {statsLabels[language].satisfied}
            </div>
          </div>
          <div>
            <div className="text-4xl font-light text-gold-gradient">5.0</div>
            <div className="text-foreground/50 font-sans text-sm uppercase tracking-wider mt-2">
              {statsLabels[language].avgRating}
            </div>
          </div>
          <div>
            <div className="text-4xl font-light text-gold-gradient">98%</div>
            <div className="text-foreground/50 font-sans text-sm uppercase tracking-wider mt-2">
              {statsLabels[language].recommendations}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
