"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"

// Validation with ZOD
const emailSchema = z.object({
  email: z.string().nonempty({ message: "O e-mail é obrigatório" }).email({ message: "Endereço de e-mail inválido" }),
})

export function CTA() {
  const router = useRouter()
  const t = useTranslations("Home.CTA")
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const result = emailSchema.safeParse({ email })

    if (!result.success) {
      const errorMessage = result.error.format().email?._errors[0] || "Erro desconhecido"
      setError(errorMessage)
      setIsLoading(false)
      return
    }

    setError(null)
  }

  return (
    <section id="cta" className="w-full py-8 md:py-16 lg:py-24 bg-[url(/bg_back.png)] bg-cover bg-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter text-[#EEEDEE] sm:text-3xl md:text-4xl lg:text-5xl">
              {t("tittle")} <span className="text-[#B58CFA]">bookly ?</span>
            </h2>
            <p className="mx-auto max-w-[600px] text-sm text-[#EEEDEE] font-light md:text-base lg:text-xl">
              {t("sub_title")}
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row items-center justify-center gap-2" onSubmit={handleSubmit}>
              <input
                className={`w-[280px] sm:w-auto sm:min-w-[200px] placeholder-white border placeholder:font-extralight border-white focus:border-white focus:ring-0 focus:outline-none bg-transparent px-3 py-2 rounded-md text-sm${
                  email.length > 0 ? 'text-white' : 'text-[#c4bfc4]'
                }`}
                placeholder={t("placeholder_input")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading} 
                className="bg-gradient-to-r from-[#5B3191] to-[#B58CFA] text-white hover:brightness-110 transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("button_onclick")}
                  </>
                ) : (
                  t("button")
                )}
              </Button>
            </form>
            {error && <p className="text-red-600 font-bold text-xs">{error}</p>}
            <p className="text-xs text-[#EEEDEE] font-semibold">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}