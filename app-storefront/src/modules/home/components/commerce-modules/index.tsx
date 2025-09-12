import {
  ArchiveBox,
  CubeSolid,
  CurrencyDollar,
  MapPin,
  Receipt,
  ReceiptPercent,
  TruckFast,
} from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"

const colorMap = {
  red: {
    bg: "bg-ui-tag-red-bg",
    icon: "text-ui-tag-red-icon",
  },
  blue: {
    bg: "bg-ui-tag-blue-bg",
    icon: "text-ui-tag-blue-icon",
  },
  green: {
    bg: "bg-ui-tag-green-bg",
    icon: "text-ui-tag-green-icon",
  },
  orange: {
    bg: "bg-ui-tag-orange-bg",
    icon: "text-ui-tag-orange-icon",
  },
  purple: {
    bg: "bg-ui-tag-purple-bg",
    icon: "text-ui-tag-purple-icon",
  },
  grey: {
    bg: "bg-ui-tag-neutral-bg",
    icon: "text-ui-tag-neutral-icon",
  },
} as const

const merchandising = {
  title: "Merchandising",
  description: "Products, pricing, and promotions",
  modules: [
    {
      icon: CurrencyDollar,
      title: "Pricing",
      description: "Configurable pricing engine",
      color: "red" as const,
    },
    {
      icon: CubeSolid,
      title: "Product",
      description: "Variants, categories, and rule sets",
      color: "purple" as const,
    },
    {
      icon: ReceiptPercent,
      title: "Promotion",
      description: "Discounts and promotions",
      color: "blue" as const,
    },
  ],
}

const orderManagement = {
  title: "Order Management",
  description: "OMS, fulfillment, and inventory",
  modules: [
    {
      icon: Receipt,
      title: "Order",
      description: "Omnichannel order management",
      color: "green" as const,
    },
    {
      icon: TruckFast,
      title: "Fulfillment",
      description: "Order fulfillment and shipping",
      color: "orange" as const,
    },
    {
      icon: ArchiveBox,
      title: "Inventory",
      description: "Multi-warehouse and reservations",
      color: "purple" as const,
    },
    {
      icon: MapPin,
      title: "Stock Location",
      description: "Inventory location management",
      color: "red" as const,
    },
  ],
}

const sections = [merchandising, orderManagement]

const CommerceModules = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col gap-12 py-12">
        <div className="flex flex-col gap-4">
          <Text className="text-small-regular text-ui-fg-subtle">
            Commerce Modules
          </Text>
          <Heading level="h2" className="text-2xl font-bold leading-10">
            Modules covering all commerce domains
          </Heading>
        </div>

        {sections.map((section) => (
          <div
            key={section.title}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <div className="flex flex-col gap-4">
              <Heading level="h3" className="text-xl font-bold">
                {section.title}
              </Heading>
              <Text className="text-base text-ui-fg-subtle">
                {section.description}
              </Text>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {section.modules.map(
                ({ icon: Icon, title, description, color }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 rounded-lg border border-ui-border-base bg-ui-bg-base p-4"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-md ${colorMap[color].bg}`}
                      >
                        <Icon className={`h-4 w-4 ${colorMap[color].icon}`} />
                      </div>
                      <Heading level="h4" className="text-base font-medium">
                        {title}
                      </Heading>
                    </div>
                    <Text className="text-small-regular text-ui-fg-muted">
                      {description}
                    </Text>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommerceModules
