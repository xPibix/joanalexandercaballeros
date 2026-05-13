"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Instagram, MessageCircle, Calendar } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t, language } = useLanguage()

  const popularServices = {
    es: [
      { name: "Corte clásico", price: "19,00 €" },
      { name: "Recorte de barba", price: "9,00 €" },
      { name: "Corte + Barba", price: "25,00 €" },
      { name: "Asesoría de imagen", price: "190,00 €" },
    ],
    en: [
      { name: "Classic cut", price: "€19.00" },
      { name: "Beard trim", price: "€9.00" },
      { name: "Cut + Beard", price: "€25.00" },
      { name: "Image consulting", price: "€190.00" },
    ],
    uk: [
      { name: "Класична стрижка", price: "19,00 €" },
      { name: "Корекція бороди", price: "9,00 €" },
      { name: "Стрижка + Борода", price: "25,00 €" },
      { name: "Консультація з іміджу", price: "190,00 €" },
    ]
  }

  const followUs = { es: "Síguenos", en: "Follow Us", uk: "Слідкуйте за нами" }
  const info = { es: "Información", en: "Information", uk: "Інформація" }
  const address = { es: "Dirección", en: "Address", uk: "Адреса" }
  const schedule = { es: "Horario", en: "Schedule", uk: "Графік" }
  const preferWhatsapp = { es: "¿Prefieres WhatsApp?", en: "Prefer WhatsApp?", uk: "Віддаєте перевагу WhatsApp?" }
  const whatsappDesc = { 
    es: "Escríbenos directamente y te responderemos lo antes posible", 
    en: "Write to us directly and we will respond as soon as possible", 
    uk: "Напишіть нам напряму і ми відповімо якнайшвидше" 
  }
  const bookNowDesc = { 
    es: "Selecciona el servicio que deseas y elige la hora que mejor te convenga", 
    en: "Select the service you want and choose the time that suits you best", 
    uk: "Виберіть послугу та час, який вам підходить" 
  }
  const bookNowTitle = { es: "Reserva tu cita ahora", en: "Book your appointment now", uk: "Забронюйте свій візит зараз" }
  const redirectNote = { 
    es: "Serás redirigido a Booksy para completar tu reserva", 
    en: "You will be redirected to Booksy to complete your booking", 
    uk: "Ви будете перенаправлені на Booksy для завершення бронювання" 
  }
  const viewAllServices = { 
    es: "Consulta todos los servicios y precios al reservar", 
    en: "Check all services and prices when booking", 
    uk: "Перегляньте всі послуги та ціни при бронюванні" 
  }
  const scheduleDetails = {
    es: { weekdays: "Lunes - Viernes: 10:00 - 20:00", saturday: "Sábado: 10:00 - 18:00", sunday: "Domingo: Cerrado" },
    en: { weekdays: "Monday - Friday: 10:00 AM - 8:00 PM", saturday: "Saturday: 10:00 AM - 6:00 PM", sunday: "Sunday: Closed" },
    uk: { weekdays: "Понеділок - П'ятниця: 10:00 - 20:00", saturday: "Субота: 10:00 - 18:00", sunday: "Неділя: Зачинено" }
  }

  return (
    <section id="booking" className="py-24 bg-secondary/30">
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
            {t.contact.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-light">
            <span className="text-gold-gradient">{t.contact.title}</span>
          </h2>
          <div className="elegant-line w-32 mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info + Valencia + Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-light">{info[language]}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-1">{address[language]}</h4>
                  <p className="text-foreground/60 font-sans">
                    Gran Via de Ramón y Cajal 43<br />
                    Valencia, 46007
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/34613948508" 
                    className="text-foreground/60 font-sans hover:text-primary transition-colors"
                  >
                    +34 613 94 85 08
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-1">{schedule[language]}</h4>
                  <p className="text-foreground/60 font-sans">
                    {scheduleDetails[language].weekdays}<br />
                    {scheduleDetails[language].saturday}<br />
                    {scheduleDetails[language].sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-sans font-medium text-foreground mb-4">{followUs[language]}</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/asesoriadeimagencaballeros_ja" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="https://wa.me/34613948508" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Valencia Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2013.10.50-dyZy6WrqcDGD9fpvcnuQ7GgZmnugKU.jpeg"
                alt="Ciudad de las Artes y las Ciencias, Valencia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-primary font-sans text-sm tracking-wider">{t.contact.valencia.toUpperCase()}</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="aspect-video overflow-hidden border border-border/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49295.096086035934!2d-0.4416888456638551!3d39.44800888231724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f483238e231%3A0xafda583d5b52737b!2sGran%20Via%20de%20Ram%C3%B3n%20y%20Cajal%2C%2043%2C%20Extramurs%2C%2046007%20Valencia!5e0!3m2!1sru!2ses!4v1778578593798!5m2!1sru!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Joan Alexander Barbershop"
              />
            </div>
          </motion.div>

          {/* Right Column - Booking */}
          <motion.div
            id="reservar-online"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 scroll-mt-24"
          >
            <h3 className="text-2xl font-light">{t.contact.bookOnline}</h3>
            
            {/* Booking Card */}
            <div className="bg-background border border-primary/20 p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-light text-foreground mb-2">{bookNowTitle[language]}</h4>
                  <p className="text-foreground/60 font-sans text-sm">
                    {bookNowDesc[language]}
                  </p>
                </div>
              </div>

              <a 
                href="https://booksy.com/es-es/instant-experiences/widget/176921"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-primary text-primary-foreground font-sans uppercase tracking-widest text-sm text-center hover:bg-primary/90 transition-colors"
              >
                {t.contact.viewServices}
              </a>

              <div className="text-center">
                <p className="text-foreground/40 font-sans text-xs">
                  {redirectNote[language]}
                </p>
              </div>
            </div>

            {/* WhatsApp Alternative */}
            <div className="bg-background border border-border/30 p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h4 className="text-xl font-light text-foreground mb-2">{preferWhatsapp[language]}</h4>
                  <p className="text-foreground/60 font-sans text-sm">
                    {whatsappDesc[language]}
                  </p>
                </div>
              </div>

              <a 
                href="https://wa.me/34613948508?text=Hola%20Joan,%20me%20gustaría%20reservar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-green-600 text-white font-sans uppercase tracking-widest text-sm text-center hover:bg-green-700 transition-colors"
              >
                {t.contact.writeWhatsApp}
              </a>

              <div className="text-center">
                <p className="text-foreground/60 font-sans text-sm">
                  +34 613 94 85 08
                </p>
              </div>
            </div>

            {/* Services Preview */}
            <div className="bg-background border border-border/30 p-8">
              <h4 className="text-lg font-light text-foreground mb-6 text-center">{t.contact.popularServices}</h4>
              <div className="space-y-4">
                {popularServices[language].map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/20 last:border-0">
                    <span className="text-foreground/80 font-sans">{service.name}</span>
                    <span className="text-primary font-sans">{service.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/40 font-sans text-xs text-center mt-6">
                {viewAllServices[language]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
