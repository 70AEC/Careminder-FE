"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: t("common", "nav.products"), href: "/products" },
    { name: t("common", "nav.aboutUs"), href: "/about" },
    { name: t("common", "nav.news"), href: "/news" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-2xl font-bold text-careminder-500">CAREMINDER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-careminder-500 ${
                  pathname === link.href ? "text-careminder-500" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center gap-1">
                <Globe className="h-4 w-4 mr-1" />
                <span>{language === "ko" ? "한국어" : "ENG"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("ko")}>한국어</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")}>ENG</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact">
            <Button className="bg-careminder-500 hover:bg-careminder-600">{t("common", "nav.contact")}</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium py-2 transition-colors hover:text-careminder-500 ${
                    pathname === link.href ? "text-careminder-500" : "text-gray-700"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === "ko" ? "한국어" : "ENG"}</span>
                </Button>
                <Link href="/contact" onClick={closeMenu}>
                  <Button size="sm" className="bg-careminder-500 hover:bg-careminder-600">
                    {t("common", "nav.contact")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

