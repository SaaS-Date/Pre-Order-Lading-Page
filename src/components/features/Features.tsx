import React from "react";
import { useTranslations } from "next-intl";

export function Features() {
  const t = useTranslations("Home.features");
  const features = [
    {
      title: t("steps.step_one.title"),
      description: t("steps.step_one.description"),
      image: "/exam.png",
      hasBorder: true,
    },
    {
      title: t("steps.step_two.title"),
      description: t("steps.step_two.description"),
      image: "/credit-card.png",
      hasBorder: true,
    },
    {
      title: t("steps.step_three.title"),
      description: t("steps.step_three.description"),
      image: "/qr.png",
      hasBorder: true,
    },
    {
      title: t("steps.step_four.title"),
      description: t("steps.step_four.description"),
      image: "/giftbox.png",
      hasBorder: true,
    },
  ];
  
  return (
    <section id="features" className="w-full py-6 sm:py-10 md:py-16 lg:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto space-y-6 sm:space-y-10 lg:space-y-12">
        <div className="space-y-2 gap-2 flex flex-col justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#623B96]">
            {t("title_one")} <span className="text-[#B58CFA]">{t("number")}</span> {t("title_two")}
          </h1>
          <p className="mx-auto max-w-[600px] text-sm sm:text-base md:text-lg text-[#623B96] px-4">
            {t("sub_title")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 
                border-gray-200 rounded-lg shadow-sm hover:shadow transition-shadow duration-300
                ${feature.hasBorder ? "border" : ""} 
              `}
            >
              <div className="flex justify-center items-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#623B96] text-center">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}