import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from 'next/image'

interface HeaderProps {
  icon: {icon_src: string, icon_alt: string, href: string, width: number, height: number};
  links: {href: string, label: string}[];
  button?: {label: string, color_font: string}
  backgroundColor?: string
  border_b: boolean
}


export function Header({
  icon, links, button, backgroundColor, border_b}: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 w-full ${border_b ? "border-b" : ""} ${backgroundColor} backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container flex h-14 items-center justify-between p-4 mx-auto">
        <Link className="flex items-center space-x-2" href={icon.href}>
          <Image
            src={icon.icon_src}
            width={icon.width}
            height={icon.height}
            alt={icon.icon_alt}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {button && (
            <Button
              className="hidden md:inline-flex"
              style={{ color: button.color_font }}
            >
              {button.label}
            </Button>
          )}
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}