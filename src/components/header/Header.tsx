import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/ui/language-toggler";

export function Header() {
  const t = useTranslations("Home.header");

  const links = [
    { name: t("link_sobre_nos"), url: "/sobre_nos" },
    { name: t("link_como_funciona"), url: "/como_funciona" },
    { name: t("link_faq"), url: "/faq" },
    { name: t("link_planos"), url: "/planos" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-14 p-4 items-center justify-between gap-2 mx-auto">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/icon.jpg" width={100} height={100} alt="logo_SaaS" className="mx-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {links.map((link, index) => (
            <Link key={index} href={link.url} className="text-[#623B96] hover:text-[#8A5CC6] transition-colors duration-200">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          
          <Button className="hidden md:inline-flex bg-gradient-to-r from-[#5B3191] to-[#B58CFA] text-white hover:brightness-110 transition-all duration-200">
            {t("button")}
          </Button>
          <LanguageToggle />
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
