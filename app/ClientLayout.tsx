"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import LoadingScreen from "@/components/loading-screen"
import { LanguageProvider } from "@/context/language-context"
import { useLanguage } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <LoadingScreen />
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()
  const { language, t } = useLanguage()

  return (
    <footer className="bg-careminder-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t("common", "footer.companyName")}</h3>
            <p className="text-sm">{t("common", "footer.slogan")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">{t("common", "footer.products")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/products" className="text-sm hover:text-careminder-300">
                    {t("common", "footer.smartBed")}
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-sm hover:text-careminder-300">
                    {t("common", "footer.groupware")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t("common", "footer.company")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm hover:text-careminder-300">
                    {t("common", "footer.about")}
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm hover:text-careminder-300">
                    {t("common", "footer.team")}
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm hover:text-careminder-300">
                    {t("common", "footer.history")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t("common", "footer.inquiry")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="text-sm hover:text-careminder-300">
                    {t("common", "footer.contactUs")}
                  </a>
                </li>
                <li>
                  <a href="/news" className="text-sm hover:text-careminder-300">
                    {t("common", "footer.newsLink")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-careminder-700 mt-8 pt-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>{t("common", "footer.copyright").replace("{year}", currentYear.toString())}</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="/terms" className="text-careminder-300 hover:underline">
                {t("common", "footer.terms")}
              </a>
              <a href="/privacy" className="text-careminder-300 hover:underline">
                {t("common", "footer.privacy")}
              </a>
              <a href="/legal" className="text-careminder-300 hover:underline">
                {t("common", "footer.legal")}
              </a>
              <a href="/cookies" className="text-careminder-300 hover:underline">
                {t("common", "footer.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

