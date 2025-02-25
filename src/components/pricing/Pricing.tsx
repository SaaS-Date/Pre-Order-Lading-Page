import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pre-order Pricing</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Early Bird</h3>
            <div className="text-center mb-4">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-500 dark:text-gray-400">/year</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Full access to ProductX
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Priority support
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Early access to new features
              </li>
            </ul>
            <Button className="mt-auto">Contact Sales</Button>
          </div>
          <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
            <div className="text-center mb-4">
              <span className="text-4xl font-bold">$199</span>
              <span className="text-gray-500 dark:text-gray-400">/year</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Everything in Early Bird
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Advanced analytics
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Custom integrations
              </li>
            </ul>
            <Button className="mt-auto">Contact Sales</Button>
          </div>
          <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
            <div className="text-center mb-4">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Everything in Pro
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Dedicated account manager
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                Custom deployment options
              </li>
            </ul>
            <Button className="mt-auto">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  )
}