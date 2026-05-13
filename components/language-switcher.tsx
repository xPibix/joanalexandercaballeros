"use client"

import { useLanguage } from "@/lib/language-context"
import { type Language } from "@/lib/translations"

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "uk", label: "UK", flag: "🇺🇦" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-xs font-medium transition-all rounded ${
            language === lang.code
              ? "bg-accent text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
