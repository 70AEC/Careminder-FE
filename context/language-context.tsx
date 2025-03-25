"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getTranslation, type Language } from "@/locales"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (page: string, key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "ko",
  setLanguage: () => {},
  t: () => "",
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ko" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // Translation function
  const t = (page: string, key: string): string => {
    return getTranslation(language, page, key)
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

