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
        <Hero
          title_one= {{
            value: "A mudanca de vida comeca aqui",
          }}
          sub_title={{
            value: "Conheca o produto que steve jobs nao conseguiu construir"
          }}
          banner_background={{
            type: "image", value: "/steve-jobs.webp"
          }}
        />
        <Features
        title={{
          value: "Funcionalidades do"
        }}
        features={features}
        />
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