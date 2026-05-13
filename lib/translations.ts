export type Language = "es" | "en" | "uk"

export const translations = {
  es: {
    // Navbar
    nav: {
      about: "Sobre Mí",
      services: "Servicios",
      gallery: "Galería",
      reviews: "Reseñas",
      contact: "Contacto",
      book: "Reservar",
    },
    // Hero
    hero: {
      subtitle: "PELUQUERÍA DE ALTA GAMA",
      haircuts: "Cortes de pelo",
      beard: "Barba",
      hairProstheses: "Prótesis capilares",
      languages: "Servicio en 3 idiomas",
      langList: "Español · English · Українська",
    },
    // About
    about: {
      title: "Sobre Nosotros",
      subtitle: "Excelencia en Barbería",
      description1: "Joan Alexander es un barbero profesional con años de experiencia en cortes de cabello masculinos, cuidado de barba y prótesis capilares.",
      description2: "Nuestro salón en Valencia ofrece un ambiente exclusivo donde cada cliente recibe atención personalizada y servicios de la más alta calidad.",
      description3: "Especializados en transformaciones de imagen masculina y asesoría personalizada.",
      experience: "Años de Experiencia",
      clients: "Clientes Satisfechos",
      rating: "Valoración",
    },
    // Services
    services: {
      title: "Nuestros Servicios",
      subtitle: "Precios y Tratamientos",
      duration: "min",
      hour: "h",
      items: {
        classicCut: "Corte clásico, Asesoría básica / CABALLEROS",
        beardTrim: "Recorte de la Barba / CABALLEROS",
        beardDesc: "Afeitado y perfilado de Barba. Corte de barba personalizado.",
        shave: "Rapado / CABALLEROS",
        imageConsulting: "ASESORÍA DE IMAGEN MASCULINA – TRANSFORMACIÓN REAL",
        seniors: "JUBILADOS / CABALLEROS",
        scissorsCut: "RECORTE CON TIJERAS PROFESIONAL / CABALLEROS",
        hairProsthesis: "PRÓTESIS CAPILARES / Est Naturales - CABALLEROS",
        englishService: "Special Service for English Speakers / Gentlemen",
        kidsCut: "CORTE EXCLUSIVO NIÑOS / CABALLEROS",
        manicure: "MANICURA EMPRESARIAL / CABALLEROS",
        familyPlan: "PLAN FAMILIAR / PAPÁ - MAMÁ - HIJO / CABALLEROS",
        ukrainianCut: "Спеціальний український крій / Джентльмени",
        repolarization: "REPOLARIZACIÓN Capilar / CABALLEROS",
      },
    },
    // Gallery
    gallery: {
      title: "Nuestras Herramientas",
      subtitle: "Instrumentos de Precisión",
      scissors: "Tijeras Profesionales",
      scissorsDesc: "Precisión alemana para cortes perfectos",
      razor: "Navaja Clásica",
      razorDesc: "Afeitado tradicional de barbería",
      comb: "Peine de Carbono",
      combDesc: "Antiestático para peinados impecables",
      brush: "Brocha de Afeitar",
      brushDesc: "Cerdas naturales para espuma perfecta",
    },
    // Reviews
    reviews: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Reseñas Verificadas",
      verifiedClient: "Cliente confirmado",
      service: "Servicio",
      employee: "Empleado/a",
    },
    // Contact
    contact: {
      title: "Reserva Tu Cita",
      subtitle: "Contáctanos",
      location: "Ubicación",
      valencia: "Valencia, España",
      hours: "Horario",
      hoursValue: "Lun - Sáb: 10:00 - 20:00",
      closed: "Domingo: Cerrado",
      phone: "Teléfono",
      bookOnline: "Reservar Online",
      viewServices: "Ver Servicios y Reservar",
      bookVia: "O reserva vía WhatsApp",
      writeWhatsApp: "Escribir por WhatsApp",
      popularServices: "Servicios Populares",
      from: "desde",
    },
    // Footer
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
    },
  },
  en: {
    // Navbar
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
      book: "Book Now",
    },
    // Hero
    hero: {
      subtitle: "HIGH-END BARBERSHOP",
      haircuts: "Haircuts",
      beard: "Beard",
      hairProstheses: "Hair Prostheses",
      languages: "Service in 3 languages",
      langList: "Español · English · Українська",
    },
    // About
    about: {
      title: "About Us",
      subtitle: "Excellence in Barbering",
      description1: "Joan Alexander is a professional barber with years of experience in men's haircuts, beard care, and hair prostheses.",
      description2: "Our salon in Valencia offers an exclusive atmosphere where each client receives personalized attention and the highest quality services.",
      description3: "Specialized in masculine image transformations and personalized consulting.",
      experience: "Years of Experience",
      clients: "Satisfied Clients",
      rating: "Rating",
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: "Prices and Treatments",
      duration: "min",
      hour: "h",
      items: {
        classicCut: "Classic Cut, Basic Consulting / GENTLEMEN",
        beardTrim: "Beard Trim / GENTLEMEN",
        beardDesc: "Shaving and beard shaping. Personalized beard cut.",
        shave: "Buzz Cut / GENTLEMEN",
        imageConsulting: "MASCULINE IMAGE CONSULTING – REAL TRANSFORMATION",
        seniors: "SENIORS / GENTLEMEN",
        scissorsCut: "PROFESSIONAL SCISSORS CUT / GENTLEMEN",
        hairProsthesis: "HAIR PROSTHESIS / Natural Est - GENTLEMEN",
        englishService: "Special Service for English Speakers / Gentlemen",
        kidsCut: "EXCLUSIVE KIDS CUT / GENTLEMEN",
        manicure: "BUSINESS MANICURE / GENTLEMEN",
        familyPlan: "FAMILY PLAN / DAD - MOM - SON / GENTLEMEN",
        ukrainianCut: "Special Ukrainian Cut / Gentlemen",
        repolarization: "Hair REPOLARIZATION / GENTLEMEN",
      },
    },
    // Gallery
    gallery: {
      title: "Our Tools",
      subtitle: "Precision Instruments",
      scissors: "Professional Scissors",
      scissorsDesc: "German precision for perfect cuts",
      razor: "Classic Razor",
      razorDesc: "Traditional barbershop shaving",
      comb: "Carbon Comb",
      combDesc: "Anti-static for impeccable styling",
      brush: "Shaving Brush",
      brushDesc: "Natural bristles for perfect lather",
    },
    // Reviews
    reviews: {
      title: "What Our Clients Say",
      subtitle: "Verified Reviews",
      verifiedClient: "Verified client",
      service: "Service",
      employee: "Employee",
    },
    // Contact
    contact: {
      title: "Book Your Appointment",
      subtitle: "Contact Us",
      location: "Location",
      valencia: "Valencia, Spain",
      hours: "Hours",
      hoursValue: "Mon - Sat: 10:00 AM - 8:00 PM",
      closed: "Sunday: Closed",
      phone: "Phone",
      bookOnline: "Book Online",
      viewServices: "View Services and Book",
      bookVia: "Or book via WhatsApp",
      writeWhatsApp: "Message on WhatsApp",
      popularServices: "Popular Services",
      from: "from",
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
  uk: {
    // Navbar
    nav: {
      about: "Про нас",
      services: "Послуги",
      gallery: "Галерея",
      reviews: "Відгуки",
      contact: "Контакти",
      book: "Записатись",
    },
    // Hero
    hero: {
      subtitle: "ПРЕМІУМ БАРБЕРШОП",
      haircuts: "Стрижки",
      beard: "Борода",
      hairProstheses: "Протези волосся",
      languages: "Обслуговування 3 мовами",
      langList: "Español · English · Українська",
    },
    // About
    about: {
      title: "Про нас",
      subtitle: "Досконалість у барберингу",
      description1: "Joan Alexander — професійний барбер з багаторічним досвідом у чоловічих стрижках, догляді за бородою та протезуванні волосся.",
      description2: "Наш салон у Валенсії пропонує ексклюзивну атмосферу, де кожен клієнт отримує персоналізовану увагу та послуги найвищої якості.",
      description3: "Спеціалізуємося на трансформації чоловічого іміджу та персональних консультаціях.",
      experience: "Років досвіду",
      clients: "Задоволених клієнтів",
      rating: "Рейтинг",
    },
    // Services
    services: {
      title: "Наші послуги",
      subtitle: "Ціни та процедури",
      duration: "хв",
      hour: "год",
      items: {
        classicCut: "Класична стрижка, базова консультація / ЧОЛОВІКИ",
        beardTrim: "Корекція бороди / ЧОЛОВІКИ",
        beardDesc: "Гоління та оформлення бороди. Персоналізована стрижка бороди.",
        shave: "Налисо / ЧОЛОВІКИ",
        imageConsulting: "КОНСУЛЬТАЦІЯ З ЧОЛОВІЧОГО ІМІДЖУ – РЕАЛЬНА ТРАНСФОРМАЦІЯ",
        seniors: "ПЕНСІОНЕРИ / ЧОЛОВІКИ",
        scissorsCut: "ПРОФЕСІЙНА СТРИЖКА НОЖИЦЯМИ / ЧОЛОВІКИ",
        hairProsthesis: "ПРОТЕЗИ ВОЛОССЯ / Натуральні - ЧОЛОВІКИ",
        englishService: "Спеціальна послуга для англомовних / Джентльмени",
        kidsCut: "ЕКСКЛЮЗИВНА ДИТЯЧА СТРИЖКА / ЧОЛОВІКИ",
        manicure: "БІЗНЕС МАНІКЮР / ЧОЛОВІКИ",
        familyPlan: "СІМЕЙНИЙ ПЛАН / ТАТО - МАМА - СИН / ЧОЛОВІКИ",
        ukrainianCut: "Спеціальний український крій / Джентльмени",
        repolarization: "РЕПОЛЯРИЗАЦІЯ волосся / ЧОЛОВІКИ",
      },
    },
    // Gallery
    gallery: {
      title: "Наші інструменти",
      subtitle: "Точні інструменти",
      scissors: "Професійні ножиці",
      scissorsDesc: "Німецька точність для ідеальних стрижок",
      razor: "Класична бритва",
      razorDesc: "Традиційне барберське гоління",
      comb: "Карбоновий гребінець",
      combDesc: "Антистатичний для бездоганних зачісок",
      brush: "Помазок для гоління",
      brushDesc: "Натуральна щетина для ідеальної піни",
    },
    // Reviews
    reviews: {
      title: "Що кажуть наші клієнти",
      subtitle: "Перевірені відгуки",
      verifiedClient: "Підтверджений клієнт",
      service: "Послуга",
      employee: "Працівник",
    },
    // Contact
    contact: {
      title: "Запишіться на прийом",
      subtitle: "Зв'яжіться з нами",
      location: "Адреса",
      valencia: "Валенсія, Іспанія",
      hours: "Години роботи",
      hoursValue: "Пн - Сб: 10:00 - 20:00",
      closed: "Неділя: Зачинено",
      phone: "Телефон",
      bookOnline: "Записатись онлайн",
      viewServices: "Переглянути послуги і записатись",
      bookVia: "Або запишіться через WhatsApp",
      writeWhatsApp: "Написати у WhatsApp",
      popularServices: "Популярні послуги",
      from: "від",
    },
    // Footer
    footer: {
      rights: "Всі права захищені.",
      privacy: "Конфіденційність",
      terms: "Умови",
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}
