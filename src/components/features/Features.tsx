import React from "react"
import { useTranslations } from "next-intl"

export function Features({}) {

  const t = useTranslations("Home.features")

  const features = [
    {
      title: t("steps.step_one.title"),
      description: t("steps.step_one.description"),
      icon: ,
      hasBorder: false
    },
    {
      title: t("steps.step_two.title"),
      description: t("steps.step_three.description"),
      icon: "Settings",
      hasBorder: false
    },
    {
      title: t("steps.step_three.title"),
      description: t("steps.step_three.description"),
      icon: "Users",
      hasBorder: false
    },
    {
      title: t("steps.step_four.title"),
      description: t("steps.step_four.description"),
      icon: "Users",
      hasBorder: false
    }
  ];
  

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto space-y-10">
        <div className="space-y-2 gap-2 flex flex-col justify-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {t("title_one")} <span className="text-[#B58CFA]">{t("number")}</span> {t("title_two")}
            </h1>
            <p className="mx-auto max-w-[700px] text-[#623B96] md:text-xl">
              {t("sub_title")}
            </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg ${feature.hasBorder ? 'border' : ''}`}>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}