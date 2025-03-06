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
  },
  features: EachFeature[]
}

export function Features({ title, features }: FeaturesProps) {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12" style={{color: title.color_font}}>{title.value}</h2>
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