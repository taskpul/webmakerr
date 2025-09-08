import { Heading, Text } from "@medusajs/ui"
import {
  SquaresPlus,
  CurrencyDollar,
  GlobeEurope,
  ServerStack,
} from "@medusajs/icons"

const operations = [
  "Warehouses",
  "Customers",
  "Checkouts",
  "Vouchers",
  "Promotions",
]

const locations = [
  { label: "BR-01", color: "bg-ui-tag-blue-bg text-ui-tag-blue-icon" },
  { label: "EU-01", color: "bg-ui-tag-orange-bg text-ui-tag-orange-icon" },
  { label: "MX-01", color: "bg-ui-tag-green-bg text-ui-tag-green-icon" },
  { label: "US-01", color: "bg-ui-tag-red-bg text-ui-tag-red-icon" },
  { label: "DE-01", color: "bg-ui-tag-purple-bg text-ui-tag-purple-icon" },
]

const colorMap = {
  purple: "text-ui-tag-purple-icon",
  green: "text-ui-tag-green-icon",
  blue: "text-ui-tag-blue-icon",
  orange: "text-ui-tag-orange-icon",
} as const

const features = [
  {
    icon: SquaresPlus,
    title: "Custom Apps",
    description:
      "Extend functionality and unlock new business models with custom apps for dashboards, promotions, etc.",
    color: "purple" as const,
  },
  {
    icon: CurrencyDollar,
    title: "Multi-currency",
    description:
      "Offer pricing in multiple currencies and automatically convert amounts per region.",
    color: "green" as const,
  },
  {
    icon: GlobeEurope,
    title: "Content translation",
    description:
      "Localize product information and content for your international customers.",
    color: "blue" as const,
  },
  {
    icon: ServerStack,
    title: "Channel management",
    description:
      "Distribute products and manage availability across all your sales channels.",
    color: "orange" as const,
  },
]

const Global = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center py-12">
        <Heading level="h2" className="text-3xl font-medium text-center">
          Global out of the box
        </Heading>
        <Text className="mt-2 text-base text-ui-fg-subtle text-center">
          Ready to power global operations across borders.
        </Text>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {operations.map((op) => (
            <Text
              key={op}
              className={`rounded-full border px-4 py-1 text-small-regular ${
                op === "Checkouts"
                  ? "border-ui-tag-purple-icon bg-ui-tag-purple-bg text-ui-tag-purple-icon"
                  : "border-ui-border-base text-ui-fg-subtle"
              }`}
            >
              {op}
            </Text>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {locations.map(({ label, color }) => (
            <Text
              key={label}
              className={`rounded-md px-3 py-1 text-small-regular ${color}`}
            >
              {label}
            </Text>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {features.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <Icon className={`h-8 w-8 ${colorMap[color]}`} />
              <Heading level="h3" className="text-lg font-medium">
                {title}
              </Heading>
              <Text className="text-base text-ui-fg-subtle">
                {description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Global
