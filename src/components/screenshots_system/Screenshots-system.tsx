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
      title: t("previews.one.title"),
      description: t("previews.one.description"),
      plus_one: t("previews.one.plus_one"),
      plus_two: t("previews.one.plus_two"),
      less_one: t("previews.one.less_one"),
      button_value: t("previews.one.button"),
      imageUrl: "/steve-jobs.webp",
    },
    {
      id: 2,
      title: t("previews.two.title"),
      description: t("previews.two.description"),
      imageUrl: "/steve-jobs.webp",
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("title")}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t("sub_title")}
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-wrap justify-center max-w-5xl gap-8 mt-12">
          {screenshots.map((screenshot) => (
            <Card
              key={screenshot.id}
              className="overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 flex flex-col items-center"
              onClick={() => setSelectedImage(screenshot)}
            >
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="relative aspect-video w-full">
                  <Image
                    src={screenshot.imageUrl}
                    alt={screenshot.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col items-center">
                  <h3 className="font-semibold mb-1 text-lg">{screenshot.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{screenshot.description}</p>
                </div>
                <div className="p-2 flex-col items-center">
                  <p className="flex gap-2">
                    <Image
                      src="/Check Mark.png"
                      alt="correct_icon"
                      width={24}
                      height={22}
                    />
                    {screenshot.plus_one}
                  </p>
                  <p className="flex gap-2">
                    <Image
                      src="/Check Mark.png"
                      alt="correct_icon"
                      width={24}
                      height={22}
                    />
                    {screenshot.plus_two}
                  </p>
                  <p className="flex gap-2">
                    <Image
                      src="/Cancel.png"
                      alt="cancel_icon"
                      width={24}
                      height={22}
                    />
                    {screenshot.less_one}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-4">
          {selectedImage && (
            <div className="flex flex-col items-center text-center">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selectedImage.imageUrl || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-950 flex flex-col items-center">
                <DialogTitle className="text-lg font-semibold mb-1">{selectedImage.title}</DialogTitle>
                <p className="text-gray-500 dark:text-gray-400">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}