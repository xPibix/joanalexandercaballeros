import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Joan Alexander | Barbería de Alta Gama en Valencia',
  description: 'Barbería premium en Valencia especializada en cortes de caballero, arreglo y diseño de barba, prótesis capilares y asesoría de imagen corporativa. Atención personalizada en español, inglés y ucraniano.',
  keywords: 'barbería Valencia, barbershop Valencia, peluquería de caballeros, corte de pelo hombre, arreglo de barba, diseño de barba, prótesis capilar, asesoría de imagen, Joan Alexander, alta gama, premium, лучший барбершоп Валенсія, перукарня Валенсія, чоловіча стрижка, догляд за бородою, haircut, beard styling, grooming, high-end barbershop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-serif antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
