import { ChevronRightMini } from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"
import * as Accordion from "@radix-ui/react-accordion"

const items = [
  {
    question: "What makes a commerce platform truly flexible?",
    answer:
      "A flexible platform lets you select the modules you need and customize workflows to fit your business.",
  },
  {
    question:
      "How is Medusa more flexible than Shopify Plus, BigCommerce or Adobe Commerce?",
    answer:
      "Medusa is built from composable modules so you can replace or extend any part without being locked into a monolith.",
  },
  {
    question:
      "Can a flexible commerce platform handle enterprise requirements?",
    answer:
      "Yes, Medusa's architecture scales to complex catalogs, regions, and enterprise workflows.",
  },
]

const Faq = () => {
  return (
    <div className="border-y border-ui-border-base bg-ui-bg-base">
      <div className="content-container grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Text className="text-small-regular text-ui-fg-subtle">FAQ</Text>
          <Heading level="h2" className="text-3xl font-medium">
            Frequently Asked Questions about our flexible commerce platform
          </Heading>
          <Text className="text-base text-ui-fg-subtle">
            Considering a switch from rigid SaaS platforms? Here's what technical teams and decision-makers need to know about implementing a truly flexible commerce platform that adapts to your business logic — not the other way around.
          </Text>
        </div>
        <Accordion.Root type="single" collapsible className="border-t border-ui-border-base">
          {items.map(({ question, answer }, i) => (
            <Accordion.Item
              value={`item-${i}`}
              key={question}
              className="border-b border-ui-border-base"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left">
                  <Text className="text-base">{question}</Text>
                  <ChevronRightMini
                    className="h-5 w-5 shrink-0 text-ui-fg-subtle transition-transform group-radix-state-open:rotate-90"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pb-4">
                <Text className="text-base text-ui-fg-subtle">{answer}</Text>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

export default Faq

