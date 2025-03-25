"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ko" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const translations = {
  // 네비게이션
  "nav.products": {
    ko: "프로덕트",
    en: "Products",
  },
  "nav.aboutUs": {
    ko: "어바웃어스",
    en: "About Us",
  },
  "nav.news": {
    ko: "뉴스",
    en: "News",
  },
  "nav.contact": {
    ko: "도입문의",
    en: "Contact",
  },

  // 메인 페이지
  "home.hero.title": {
    ko: "CareMinder,\n더 스마트한 병원 업무의 시작",
    en: "CareMinder,\nThe Smart Start for Hospital Operations",
  },
  "home.hero.subtitle": {
    ko: "간호사도 함께 웃을 수 있는 병원",
    en: "A hospital where nurses can smile too",
  },
  "home.hero.description": {
    ko: "CareMinder는 과도한 업무량과 체계가 부족했던 기존 병원 시스템으로 인한 간호인력의 문제를 해결하기 위해 최선을 다합니다.",
    en: "CareMinder strives to solve nursing staff issues caused by excessive workload and lack of structure in existing hospital systems.",
  },
  "home.hero.button": {
    ko: "제품 알아보기",
    en: "Explore Products",
  },

  // 가치 창출 섹션
  "home.value.title": {
    ko: "가치 창출",
    en: "Value Creation",
  },
  "home.value.description": {
    ko: "CareMinder는 기존의 스마트 병실에는 존재하지 않았던 혁신적인 방법을 통해 병원, 간호인력, 그리고 환자에게 사회적 가치 창출을 기대하고 있습니다.",
    en: "CareMinder expects to create social value for hospitals, nursing staff, and patients through innovative methods that did not exist in traditional smart hospital rooms.",
  },

  // 기타 필요한 번역 키들...
  "home.product.title": {
    ko: "모두가 좋아하는, 특히\n간호사가 좋아하는 태블릿 1위",
    en: "The #1 Tablet Loved by Everyone,\nEspecially Nurses",
  },
  "home.product.description": {
    ko: "케어마인더는 환자가 병실에서 음성으로 요청사항을 요구하면 간호인력에게 자동으로 업무 분담을 하여 전달을 해주어 간호인력의 동선도 줄이고 직접적인 채팅을 통한 답변을 통해 보다 더 빠른 대응 속도와 업무 과중에 대한 해결책을 제공합니다.",
    en: "CareMinder automatically distributes tasks to nursing staff when patients request services by voice in their rooms, reducing movement for nurses and providing faster response times through direct chat, offering a solution to work overload.",
  },
  "home.news.title": {
    ko: "케어마인더의 최신 소식을 확인하세요",
    en: "Check Out CareMinder's Latest News",
  },
  "home.partners.title": {
    ko: "다양한 파트너와 함께합니다",
    en: "We Work with Various Partners",
  },
  "home.contact.title": {
    ko: "케어마인더와 함께\n더 행복한 병원 환경을 만들어나가세요",
    en: "Create a Happier Hospital Environment\nwith CareMinder",
  },

  // 푸터
  "footer.terms": {
    ko: "이용약관",
    en: "Terms of Service",
  },
  "footer.privacy": {
    ko: "개인정보처리방침",
    en: "Privacy Policy",
  },
  "footer.legal": {
    ko: "법적고지",
    en: "Legal Notice",
  },
  "footer.cookies": {
    ko: "쿠키정책",
    en: "Cookie Policy",
  },

  // 기타 공통 텍스트
  "common.viewMore": {
    ko: "자세히 보기",
    en: "View More",
  },
  "common.allNews": {
    ko: "모든 소식 보기",
    en: "View All News",
  },
  "common.submit": {
    ko: "문의하기",
    en: "Submit",
  },
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("ko")

  // 브라우저 저장소에서 언어 설정 불러오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // 언어 설정 변경 및 저장
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // 번역 함수
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language]
    }
    console.warn(`Translation key not found: ${key}`)
    return key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

