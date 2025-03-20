"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Home.footer")

  return (
    <footer className="w-full border-t bg-[url(/bg_back.png)] dark:bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-8 md:py-16 mx-auto">
        {/* Grid principal - muda para 1 coluna em mobile, 2 em tablet, 4 em desktop */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("contacts.title")}</h3>
            <p className="text-sm">
              {t("contacts.description")}
            </p>
            <div className="space-y-2 text-white">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">contact@productx.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="break-words">123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("product.title")}</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  href="#features"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("product.how_work")}
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("product.faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="#plans"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("product.plans")}
                </Link>
              </li>
              <li>
                <Link
                  href="#cta"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("product.register")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4 text-white">
            <h3 className="text-lg font-semibold">{t("albuns.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("albuns.for_couples")}
                </Link>
              </li>
              <li>
                <Link
                  href="/new_feature"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("albuns.for_friends")}
                </Link>
              </li>
              <li>
                <Link
                  href="/new_feature"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("albuns.for_families")}
                </Link>
              </li>
              <li>
                <Link
                  href="/new_feature"
                  className="text-sm hover:underline inline-block py-1"
                >
                  {t("albuns.for_animals")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4 text-white">
            <h3 className="text-lg font-semibold">{t("register.title")}</h3>
            <p className="text-sm">
              {t("register.description")}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input 
                  placeholder={t("register.placeholder_email")} 
                  className="flex-1 placeholder-white border placeholder:font-extralight border-white focus:border-white focus:ring-0 focus:outline-none bg-transparent px-3 py-2 rounded-md text-sm" 
                />
                <Link href="">
                  <Button size="icon" className="bg-gradient-to-r from-[#5B3191] to-[#B58CFA] text-white hover:brightness-110 transition-all duration-200">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs">
                {t("register.message_observation")}
              </p>
            </div>
          </div>
        </div>

        {/* Social Links and Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 text-white">
          <div className="flex flex-col gap-6 sm:flex-row items-center justify-between">
            <div className="flex gap-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-white">
              <Link href="/terms" className="hover:underline">
                {t("last.terms_of_service")}
              </Link>
              <Link href="/privacy" className="hover:underline">
                {t("last.privacy_policy")}
              </Link>
              <Link href="/cookies" className="hover:underline">
                {t("last.cookie_policy")}
              </Link>
              <span>© {new Date().getFullYear()} ProductX Inc. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}