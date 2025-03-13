import { CTA } from "@/components/cta/Call-to-action";
import { FAQ } from "@/components/faq/Faq";
import { Features } from "@/components/features/Features";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Screenshots } from "@/components/screenshots_system/Screenshots-system";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      <section className="flex-1">
        <Hero/>
        {/* <Features/> */}
        <Screenshots/>
        <CTA/>
        <FAQ/>
      </section>
      <Footer/>
    </main>
  );
}