import { CTA } from "@/components/cta/Call-to-action";
import { FAQ } from "@/components/faq/Faq";
import { Features } from "@/components/features/Features";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Screenshots } from "@/components/screenshots_system/Screenshots-system";
import { features } from "@/components/features/feature_data";
import { screenshots } from "@/components/screenshots_system/screenshots_data";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      <section className="flex-1">
        <Hero/>
        <Screenshots
          title={{
            value: "Preview do album"
          }}
          sub_title={{
            value:"Veja como vai ficar o seu album, clicando no preview"
          }}
          screenshots={screenshots}
        />
        <CTA/>
        <FAQ/>
      </section>
      <Footer/>
    </main>
  );
}