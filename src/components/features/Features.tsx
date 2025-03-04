import { CheckCircle } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <h3 className="text-xl font-bold">AI-Powered Insights</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Get intelligent recommendations and insights to boost your productivity.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <h3 className="text-xl font-bold">Seamless Integration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Works with all your favorite tools and platforms out of the box.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <h3 className="text-xl font-bold">Real-time Collaboration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Work together with your team in real-time, from anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

