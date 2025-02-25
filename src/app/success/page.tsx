"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Confetti from "react-confetti"

export default function SuccessPage() {
  const [isConfettiVisible, setIsConfettiVisible] = useState(true)

  useEffect(() => {
    // Exibe os confetes imediatamente
    setIsConfettiVisible(true)
    
    // Depois de 3 segundos, inicia a transição para ocultar os confetes
    const timer = setTimeout(() => {
      setIsConfettiVisible(false)
    }, 3000)

    // Limpeza do timer caso o componente seja desmontado
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Confetes com efeito de transição suave */}
      <div
        className={`transition-opacity duration-1000 ${!isConfettiVisible ? 'opacity-0' : 'opacity-100'}`}
      >
        <Confetti />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Adicionado com Sucesso!</h1>
        <p className="text-xl mb-8">
          Thank you for your pre-order. We'll be in touch soon with more details.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
