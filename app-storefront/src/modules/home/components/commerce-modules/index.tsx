import {
  CubeSolid,
  ShoppingCart,
  User,
  CreditCard,
  TruckFast,
  ChartBar,
  Users,
} from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"

const topIcons = [
  CubeSolid,
  ShoppingCart,
  User,
  CreditCard,
  TruckFast,
  ChartBar,
]

const cards = [
  {
    icon: ShoppingCart,
    title: "Cart",
    description: "Add to cart, checkout, and totals",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Process any payment type",
  },
  {
    icon: Users,
    title: "Customer",
    description: "B2C and B2B customer accounts",
  },
]

const CommerceModules = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col gap-12 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Text className="text-small-regular text-ui-fg-subtle">
              Commerce Modules
            </Text>
            <Heading level="h2" className="text-2xl font-medium">
              Modules covering all commerce domains
            </Heading>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {topIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-ui-bg-subtle"
                >
                  <Icon className="h-5 w-5 text-ui-fg-subtle" />
                </div>
              ))}
            </div>
            <Text className="text-base text-ui-fg-subtle">
              Pre-built commerce logic in composable modules. Adopt
              incrementally, compose as you want.
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Heading level="h3" className="text-xl font-medium">
              Cart &amp; Purchase
            </Heading>
            <Text className="text-base text-ui-fg-subtle">
              Checkout, total calculations, and more
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-2 rounded-lg border border-ui-border-base bg-ui-bg-base p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-ui-bg-subtle">
                    <Icon className="h-4 w-4 text-ui-fg-subtle" />
                  </div>
                  <Heading level="h4" className="text-base font-medium">
                    {title}
                  </Heading>
                </div>
                <Text className="text-small-regular text-ui-fg-muted">
                  {description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommerceModules
