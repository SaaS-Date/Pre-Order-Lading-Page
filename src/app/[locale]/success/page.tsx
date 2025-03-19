"use client"

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react"
import Confetti from "react-confetti"

export default function SuccessPage({ params }: { params: { locale: string } }) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const t = useTranslations("SuccessPage")

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    const finalTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      clearTimeout(timer);
      clearTimeout(finalTimer);
      window.removeEventListener("resize", updateSize);
    };
  }, [])

  const confettiColors = ["#4B0082", "#800080", "#D8BFD8", "#B58CFA", "#5B3191", "#2E0F33"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url(/bg_correct.png)]">
      {showConfetti && (
        <div className={`transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          <Confetti width={windowSize.width} height={windowSize.height} colors={confettiColors} />
        </div>
      )}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">{t("title")}</h1>
        <p className="text-xl mb-8 text-[#B58CFA]">{t("description")}</p>
        <button className="bg-gradient-to-r from-[#5B3191] to-[#B58CFA] text-white hover:brightness-110 transition-all duration-200 px-4 py-2 rounded-lg">
          {t("button")}
        </button>
      </div>
    </div>
  )
}