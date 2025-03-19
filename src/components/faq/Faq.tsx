import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"


export function FAQ() {

  const t = useTranslations("Home.FAQ")

  const faqItems = [
    {
      question: t("question_one.question"),
      answer:
        t("question_one.response"),
    },
    {
      question: t("question_two.question"),
      answer:
        t("question_two.response")
    },
    {
      question: t("question_three.question"),
      answer:
        t("question_three.response")
    },
    {
      question: t("question_four.question"),
      answer:
        t("question_four.response")
    },
    {
      question: t("question_five.question"),
      answer:
        t("question_five.response")
    },
    {
      question: t("question_six.question"),
      answer: t("question_six.response")
    },
    {
      question: t("question_seven.question"),
      answer:
        t("question_seven.response")
    },
    {
      question: t("question_seven.question"),
      answer:
        t("question_seven.response")
    },
  ]


  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#623B96]">{t("title")}</h2>
            <p className="max-w-[900px] text-[#7E52B9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("sub_title")}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 md:mt-12">
          <Accordion type="single" collapsible className="w-full text-[#623B96]">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}