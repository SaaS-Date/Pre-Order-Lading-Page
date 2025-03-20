"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { LanguageToggle } from "@/components/ui/language-toggler"
import { useState, useEffect } from "react"

export function Header() {
  const t = useTranslations("Home.header")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest("header")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  const links = [
    { name: t("link_como_funciona"), url: "#features" },
    { name: t("link_faq"), url: "#faq" },
    { name: t("link_planos"), url: "#plans" },
  ]

  // Handler para navegação manual para links de âncora
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    // Extrair o ID do elemento de destino do href
    const targetId = href.replace("#", "")
    
    // Encontrar o elemento de destino
    const targetElement = document.getElementById(targetId)
    
    // Rolar até o elemento se ele existir
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }, 150)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white">
  <div className="container flex h-14 p-4 items-center justify-center md:justify-between gap-2 mx-auto relative">

    {/* Logo centralizada no mobile */}
    <Link className="flex items-center justify-center absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0" href="/">
      <Image src="/icon.jpg" width={100} height={100} alt="logo_SaaS" className="mx-auto" />
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="text-[#623B96] hover:text-[#8A5CC6] transition-colors duration-200"
        >
          {link.name}
        </Link>
      ))}
    </nav>

    <div className="hidden md:flex items-center space-x-4">
      <Link href="#cta">
        <Button className="bg-gradient-to-r from-[#5B3191] to-[#B58CFA] text-white hover:brightness-110 transition-all duration-200">
          {t("button")}
        </Button>
      </Link>
      <LanguageToggle />
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden flex items-center space-x-4 absolute right-4">
      <LanguageToggle />
    </div>
  </div>
</header>

    </>
  )
} 