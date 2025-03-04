"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useState } from "react"
import { Loader2 } from "lucide-react"

// Definindo o esquema de validação com Zod
const emailSchema = z.object({
  email: z.string().nonempty({ message: "O e-mail é obrigatório" }).email({ message: "Endereço de e-mail inválido" }),
})

export function CTA() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Validando o email com o Zod
    const result = emailSchema.safeParse({ email })

    if (!result.success) {
      const errorMessage = result.error.format().email?._errors[0] || "Erro desconhecido"
      setError(errorMessage)
      setIsLoading(false)
      return
    }

    setError(null)

    try {
      // Enviando o e-mail para o backend
      const response = await fetch("http://localhost:5000/send-email-pre-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_customer: email }),
      })
    
      // Se a resposta não for bem-sucedida, tentar extrair o erro do backend
      if (!response.ok) {
        const errorData = await response.json() // Tenta pegar o erro retornado pelo backend
        throw new Error(errorData.message || "Ocorreu um erro ao processar seu pedido.") 
      }
    
      // Redirecionando após sucesso
      await response.json()
      router.push("/success")
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message) // Exibe a mensagem de erro retornada pela API
      } else {
        setError("Ocorreu um erro inesperado. Tente novamente.") // Erro genérico caso seja algo inesperado
      }
      setIsLoading(false)
    }
  }

  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Workflow?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Pre-order ProductX today and be among the first to experience the future of productivity.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adicionando na lista
                  </>
                ) : (
                  "Pre-order"
                )}
              </Button>
            </form>
            {error && <p className="text-red-600 font-bold text-xs">{error}</p>}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}