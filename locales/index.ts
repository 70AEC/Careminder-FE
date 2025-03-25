import { common } from "./common"
import { home } from "./home"
import { about } from "./about"
import { products } from "./products"
import { news } from "./news"
import { contact } from "./contact"

export const locales = {
  common,
  home,
  about,
  products,
  news,
  contact,
}

export type Language = "ko" | "en"

export function getTranslation(language: Language, page: string, key: string): string {
  const keys = key.split(".")
  let result = locales[page][language]

  for (const k of keys) {
    if (result && result[k]) {
      result = result[k]
    } else {
      console.warn(`Translation not found for ${language}.${page}.${key}`)
      return key
    }
  }

  return result
}

