import { Metadata } from "next"
import { Badge, Button, Heading, Text } from "@medusajs/ui"
import { CheckMini } from "@medusajs/icons"

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
    </div>
  )
}

export default PricingPage

