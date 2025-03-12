import React from "react"

interface EachFeature{
  title: string
  description: string
  icon: React.ElementType
  hasBorder?: boolean
}

interface FeaturesProps {
  title: {
    value: string,
    color_font?: string
  }
  features: EachFeature[]
}

export function Features({ title, features }: FeaturesProps) {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto space-y-10">
        <div className="space-y-2 gap-2 flex flex-col justify-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Como Criar Seu Álbum Digital 💖
            </h1>
            <p className="mx-auto max-w-[700px] text-[#7E52B9] md:text-xl dark:text-gray-400">
              Surpreenda quem você ama com um book personalizado com suas memórias 
            </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg ${feature.hasBorder ? 'border' : ''}`}>
              <feature.icon className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}