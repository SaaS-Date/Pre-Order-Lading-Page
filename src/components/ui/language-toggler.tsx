"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function LanguageToggle() {

    const pathname = usePathname()
    const router = useRouter()
    console.log(pathname)
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Languages className="h-[1.2rem] w-[1.2rem] text-[#623B96] hover:text-[#8A5CC6] transition-colors duration-200" />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/en")} className="text-[#623B96] hover:text-[#8A5CC6] transition-colors duration-200">
          <Image
            src="https://flagcdn.com/w40/us.png"
            alt="English"
            width={20}
            height={15}
            className="mr-2"
          />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/pt")} className="text-[#623B96] hover:text-[#8A5CC6] transition-colors duration-200">
          <Image
            src="https://flagcdn.com/w40/br.png"
            alt="Português"
            width={20}
            height={15}
            className="mr-2"
          />
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/es")} className="text-[#623B96] hover:text-[#8A5CC6] transition-colors duration-200">
          <Image
            src="https://flagcdn.com/w40/es.png"
            alt="Español"
            width={20}
            height={15}
            className="mr-2"
          />
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
