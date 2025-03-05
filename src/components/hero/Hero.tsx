import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  title_one: {
    value: string,
    color_font?: string
  },
  sub_title: {
    value: string,
    color_font?: string
  },
  button?: {
    label: string,
    color_font?: string,
    backgroundColor?: string
  }
  banner_background:
    | {type: "color",value: string}
    | {type: "image", value:string}
}

export function Hero({
  title_one, sub_title, button, banner_background
}: HeroProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
    style={{
      background: banner_background.type === "color"
        ? banner_background.value
        : `url(${banner_background.value}) center/cover no-repeat`
    }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none" style={{color: title_one.color_font}}>
              {title_one.value}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400" style={{color: sub_title.color_font}}>
              {sub_title.value}
            </p>
          </div>
          <div className="space-x-4">
          {button && (
            <Button
              className="hidden md:inline-flex"
              style={{ backgroundColor: button.backgroundColor, color: button.color_font }}
            >
              {button.label}
            </Button>
          )}
          </div>
        </div>
      </div>
    </section>
  )
}