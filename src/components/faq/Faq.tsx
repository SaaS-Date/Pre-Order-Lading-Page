import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "When will ProductX be available?",
    answer:
      "ProductX will be officially launched in Q3 2024. Pre-order customers will get early access starting Q2 2024.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards and debit cards through Mercado Pago, our secure payment processor. Multiple payment options are available depending on your location.",
  },
  {
    question: "Can I cancel my pre-order?",
    answer:
      "Yes, you can cancel your pre-order at any time before the product launch and receive a full refund. Contact our support team for assistance.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee starting from the day you get access to ProductX. If you're not satisfied, we'll provide a full refund.",
  },
  {
    question: "What kind of support is included?",
    answer:
      "All plans include email support. Pro and Enterprise plans include priority support with faster response times and dedicated support channels.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. We'll prorate the difference and apply it to your new plan.",
  },
  {
    question: "Is there a difference between pre-order and regular pricing?",
    answer:
      "Yes, pre-order customers get special early-bird pricing that's locked in for the first year. Regular pricing will be higher after the official launch.",
  },
  {
    question: "Do you offer enterprise-specific features?",
    answer:
      "Yes, our Enterprise plan includes custom features, dedicated account management, and special deployment options. Contact our sales team for details.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Everything you need to know about ProductX pre-orders and features.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 md:mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}