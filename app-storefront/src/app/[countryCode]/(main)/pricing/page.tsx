import { Metadata } from "next"
import { Badge, Button, Heading, Table, Text } from "@medusajs/ui"
import { CheckMini, CheckCircleSolid, PlusMini, MinusMini } from "@medusajs/icons"
import * as Accordion from "@radix-ui/react-accordion"

const plans = [
  {
    name: "Select",
    badges: ["Cloud", "Open Source"],
    description:
      "Best starting point for SMBs and companies with stable growth.",
    price: "$1,599/mo",
    priceNote:
      "Includes 500M offline events or 3% of transaction value whichever is higher.",
    features: [
      "500M offline events included",
      "10M API tokens created per month",
      "1M unique checkouts per month",
      "10 sandbox environments",
      "Unlimited sandboxes",
    ],
    addons:
      "Available add-ons: Replica datacenter, online/offline, In-geo compute, and AppAg API.",
  },
  {
    name: "Volume",
    badges: ["Cloud", "Open Source"],
    description:
      "Best for businesses with high volume of transactions.",
    price: "$3,999/mo",
    priceNote:
      "Includes 5B events and 3% of transaction value whichever is higher.",
    features: [
      "5B events included",
      "100M API tokens with expiry per month",
      "50M unique checkouts per month",
      "Unlimited sandboxes",
      "Dedicated support",
    ],
    addons:
      "Available add-ons: Replica datacenter, online/offline, In-geo compute, and AppAg API.",
  },
  {
    name: "Enterprise",
    badges: ["Cloud", "Open Source"],
    description:
      "Custom solutions for unique business needs and requirements.",
    price: "Custom",
    priceNote: "",
    features: [
      "Custom data warehouse via AWS",
      "Custom domain and subdomain",
      "Unlimited sandboxes",
      "Own network expansion",
      "AppAg API",
    ],
    addons:
      "Available add-ons: Replica datacenter, online/offline, In-geo compute, and AppAg API.",
    dark: true,
  },
] as const

const supportFeatures = [
  "Discovery sessions",
  "Technical architecture guidance",
  "Pairing sessions with Solution Engineer",
  "Dedicated Slack channel",
  "Dedicated support",
  "Integrated technical resources to manage project-level aspects",
  "Dedicated Delivery Lead",
  "Quarterly business review sessions",
] as const

const unlimitedFeatures = [
  "Unlimited Stores",
  "Unlimited Integrations",
  "Unlimited Layouts / UI",
  "Unlimited Datastreams",
  "Unlimited Environments",
  "Unlimited Inventory Locations",
  "Unlimited Storage",
] as const

const advantages = [
  {
    title: "Discovery sessions and Solution architects help",
    openSource: null,
  },
  {
    title: "Technical onboarding",
    openSource: null,
  },
  {
    title: "Ongoing support and technical help",
    openSource: null,
  },
  {
    title: "Early patch releases",
    openSource: null,
  },
  {
    title: "SLA",
    openSource: null,
  },
  {
    title: "Zero down time updates",
    openSource: null,
  },
  {
    title: "App integration for Saleor",
    openSource: "check",
  },
  {
    title: "PCI DSS compliance",
    openSource: null,
  },
  {
    title: "DDoS protection",
    openSource: "self-managed",
  },
  {
    title: "SEO",
    openSource: "self-managed",
  },
  {
    title: "Auto scaling",
    openSource: "self-managed",
  },
  {
    title: "Snapshot management",
    openSource: "self-managed",
  },
  {
    title: "Backups",
    openSource: "self-managed",
  },
  {
    title: "CDN",
    openSource: "self-managed",
  },
  {
    title: "Automatic backups",
    openSource: "self-managed",
  },
] as const

const faqs = [
  {
    question: "How do the versions of Saleor Cloud or OSS differ?",
    answer:
      "Saleor Cloud is a fully managed platform, while OSS is the self-hosted open-source version you manage yourself.",
  },
  {
    question: "Can I switch between Saleor Cloud or OSS?",
    answer:
      "Yes. You can export your data and move between the two deployments whenever your needs change.",
  },
  {
    question: "How much will customizations to fit my needs on Saleor Cloud cost?",
    answer:
      "Customization costs depend on scope. Share your requirements and our team will provide a tailored estimate.",
  },
  {
    question:
      "Saleor's missing a feature that Platform X provides. Why should we stay with Saleor?",
    answer:
      "Saleor's modular architecture lets you build or integrate any feature, keeping your stack flexible and future-proof.",
  },
  {
    question: "How much does a migration from my current platform cost?",
    answer:
      "Migration pricing varies with catalogue size and complexity. Contact us for a detailed quote.",
  },
] as const

export const metadata: Metadata = {
  title: "Pricing",
}

const PricingPage = () => {
  return (
    <div className="content-container py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-xl border p-8 ${
              plan.dark
                ? "bg-grey-90 text-grey-0 border-grey-90"
                : "bg-ui-bg-base border-ui-border-base"
            }`}
          >
            <div className="flex items-center justify-between">
              <Heading level="h3" className="text-xl font-medium">
                {plan.name}
              </Heading>
              <div className="flex gap-2">
                {plan.badges.map((badge) => (
                  <Badge key={badge} color="green" size="small">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <Text className="mt-2 text-ui-fg-subtle">{plan.description}</Text>
            <div className="mt-6">
              <Text className="text-2xl font-semibold">
                {plan.price === "Custom" ? plan.price : `Starting at ${plan.price}`}
              </Text>
              {plan.priceNote && (
                <Text className="text-small-regular text-ui-fg-subtle">
                  {plan.priceNote}
                </Text>
              )}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Button
                variant="secondary"
                className={plan.dark ? "border-grey-0 text-grey-0" : ""}
              >
                Talk to an Expert
              </Button>
              <Button className={plan.dark ? "bg-grey-0 text-grey-90 hover:bg-grey-0" : ""}>
                Start building
              </Button>
            </div>
            <ul className="mt-6 flex-1 space-y-2 text-ui-fg-subtle">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckMini className="h-5 w-5 text-ui-fg-interactive" />
                  <Text className="text-small-regular">{feature}</Text>
                </li>
              ))}
            </ul>
            <Text className="mt-6 text-small-regular text-ui-fg-subtle">
              {plan.addons}
            </Text>
          </div>
        ))}
      </div>
      <div className="mt-16 rounded-xl border bg-ui-bg-base p-8 text-center shadow-elevation-card-rest">
        <Heading level="h2" className="text-xl font-medium">
          Included in each Saver Cloud plan
        </Heading>
        <Text className="mt-2 text-ui-fg-subtle">
          All Cloud customers are provided ongoing Delivery and support help to help accelerate discovery and implementation.
        </Text>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {supportFeatures.map((feature) => (
            <Badge key={feature} color="orange" className="text-small-regular">
              {feature}
            </Badge>
          ))}
        </div>
        <Text className="mt-10 text-ui-fg-subtle">
          Unlimited access to the commerce feature-sets in your theme without artificial constraints.
        </Text>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {unlimitedFeatures.map((feature) => (
            <Badge
              key={feature}
              color="green"
              className="flex items-center gap-1 text-small-regular"
            >
              <CheckMini className="h-4 w-4" />
              {feature}
            </Badge>
          ))}
        </div>
        <Text className="mt-2 text-small-regular text-ui-fg-subtle">
          *Unlimited resources are subject to fair usage policies.
        </Text>
      </div>
      <div className="mt-16">
        <Heading
          level="h2"
          className="text-center text-xl font-medium"
        >
          Advantages of Saleor Cloud over other hosting options
        </Heading>
        <Table className="mt-6">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell className="text-center">
                Cloud
              </Table.HeaderCell>
              <Table.HeaderCell className="text-center">
                Open source
              </Table.HeaderCell>
              <Table.HeaderCell className="text-center">
                Self hosted
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {advantages.map((advantage) => (
              <Table.Row key={advantage.title}>
                <Table.Cell className="py-3">
                  {advantage.title}
                </Table.Cell>
                <Table.Cell className="text-center">
                  <CheckCircleSolid className="mx-auto h-5 w-5 text-green-500" />
                </Table.Cell>
                <Table.Cell className="text-center">
                  {advantage.openSource === "check" && (
                    <CheckCircleSolid className="mx-auto h-5 w-5 text-ui-fg-interactive" />
                  )}
                  {advantage.openSource === "self-managed" && (
                    <Text className="text-small-regular text-ui-fg-subtle">
                      Self-managed
                    </Text>
                  )}
                </Table.Cell>
                <Table.Cell className="text-center">
                  <Text className="text-small-regular text-ui-fg-subtle">
                    Self-managed
                  </Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <div className="flex gap-4">
          <Button variant="secondary">Contact us</Button>
          <Button>Request an open quote</Button>
        </div>
        <Text className="mt-10 max-w-3xl text-center text-xl text-ui-fg-base md:text-2xl">
          "One of the biggest benefits of going Cloud is access to the delivery team. Different to our past experiences, the Saleor delivery team is supportive, it's always prompt, direct, and professional."
        </Text>
        <Text className="mt-2 text-center text-small-regular text-ui-fg-subtle">
          Mario Besas, Managing Partner and CTO at{" "}
          <a href="#" className="text-ui-fg-interactive">
            sirvoy
          </a>
        </Text>
        <div className="mt-16 w-full max-w-3xl">
          <Heading level="h2" className="text-center text-xl font-medium">
            Any questions?
          </Heading>
          <Text className="mt-2 text-center text-ui-fg-subtle">
            You can always get in touch with us and ask your question at{" "}
            <a href="mailto:hello@saleor.io" className="text-ui-fg-interactive">
              hello@saleor.io
            </a>
          </Text>
          <Accordion.Root
            type="single"
            collapsible
            className="mt-8 border-t border-ui-border-base"
          >
            {faqs.map(({ question, answer }, i) => (
              <Accordion.Item
                key={question}
                value={`item-${i}`}
                className="border-b border-ui-border-base"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left">
                    <Text className="text-base">{question}</Text>
                    <PlusMini className="h-5 w-5 shrink-0 text-ui-fg-subtle group-radix-state-open:hidden" />
                    <MinusMini className="hidden h-5 w-5 shrink-0 text-ui-fg-subtle group-radix-state-open:block" />
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
    </div>
  )
}

export default PricingPage

