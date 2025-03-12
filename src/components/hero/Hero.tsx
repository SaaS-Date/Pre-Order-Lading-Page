"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import TypeIt from "typeit";

export function Hero() {

  const t = useTranslations("Home.hero");

  useEffect(() => {
    new TypeIt("#multipleStrings", {
      speed: 80,
      waitUntilVisible: true,
    }).go();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url(/bg.png)] bg-cover bg-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white"
            >
              {t("title_phrase_one")} <br /> {t("title_phrase_two")} 
              <span id="multipleStrings" className="text-[#B58CFA]">  {t("title_phrase_three")}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Conheça o produto que Steve Jobs não conseguiu construir
            </p>
          </div>
          <div className="space-x-4"></div>
        </div>
      </div>
    </section>
  );
}
