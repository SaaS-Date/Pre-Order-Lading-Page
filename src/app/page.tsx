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
      <Header
        icon={{
          icon_src: "/steve-jobs.webp",
          icon_alt: "logo_SaaS",
          href: "/",
          width: 50,
          height: 50 
        }}
        links={[
          {href: "/features", label: "Features"},
          {href: "/pricing", label: "Pricing"},
          {href: "/faq", label: "FAQ"}
        ]}
        button={{
          label: "Criar Album",
          color_font: "#FFFFFF"
        }}
        backgroundColor="bg-gray-900"
        border_b={true}
      />
      <section className="flex-1">
        <Hero/>
        <Features/>
        <Screenshots/>
        <CTA/>
        <FAQ/>
      </section>
      <Footer/>
    </main>
  );
}