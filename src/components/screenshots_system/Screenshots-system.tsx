"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export function Screenshots({}) {
  const [selectedImage, setSelectedImage] = useState(null)
  const t = useTranslations("Home.screenshots")
  
  const screenshots = [
    {
      id: 1,
      title: "",
      description: "",
      plus: "",
      dont_have: "",
      imageUrl: "/Group 2.png",
      button: "",
    },
    { 
      id: 2,
      title: "",
      description: "",
      plus: "",
      plus_two: "",
      imageUrl: "/Group 2.png",
      button: "",
    }
  ]

  return (
    <section id="plans" className="w-full bg-white py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto pb-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#623B96]">{t("title")}</h2>
            <p className="max-w-[900px] md:text-xl lg:text-base xl:text-xl text-[#623B96]">
              {t("sub_title")}
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-wrap justify-center max-w-5xl gap-8 mt-12">
          {/* Primeiro Card */}
          <Card
            key={screenshots[0].id}
            className="overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 flex flex-col items-center rounded-lg shadow-lg relative"
            onClick={() => setSelectedImage(screenshots[0])}
          > 
            <CardContent className="flex flex-col items-center text-center p-0 w-[450px] h-[400px]">
              <div className="relative w-full h-full">
                <Image
                  src={screenshots[0].imageUrl}
                  alt={screenshots[0].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{screenshots[0].title}</h3>
                <p>{screenshots[0].description}</p>
                <button className="mt-2 text-sm font-medium text-white bg-purple-600 px-4 py-2 rounded-full">
                  {screenshots[0].button}
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Segundo Card */}
          <Card
            key={screenshots[1].id}
            className="overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 flex flex-col items-center rounded-lg shadow-lg relative"
            onClick={() => setSelectedImage(screenshots[1])}
          > 
            <CardContent className="flex flex-col items-center text-center p-0 w-[450px] h-[400px]">
              <div className="relative w-full h-full">
                <Image
                  src={screenshots[1].imageUrl}
                  alt={screenshots[1].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{screenshots[1].title}</h3>
                <p>{screenshots[1].description}</p>
                <button className="mt-2 text-sm font-medium text-white bg-purple-600 px-4 py-2 rounded-full">
                  {screenshots[1].button}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent
          className="max-w-5xl w-full p-4 bg-gray-100 rounded-xl shadow-xl relative"
          style={{
            backgroundImage: `url(${selectedImage?.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px', // Ajuste o tamanho conforme necessário
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
          >
            X
          </button>
          {selectedImage && (
            <div className="flex flex-col items-center text-center">
              <div className="w-full mb-4">
                <div className="w-full h-full" />
              </div>
              <div className="p-4 bg-white dark:bg-gray-950 flex flex-col items-center">
                <DialogTitle className="text-lg font-semibold mb-1"></DialogTitle>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}