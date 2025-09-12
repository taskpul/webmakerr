import {
  Brackets,
  Camera,
  CreditCard,
  GlobeEurope,
  Link,
  PencilSquare,
  ShieldCheck,
  SquaresPlus,
} from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"

const features = [
  { icon: CreditCard, title: "Accept payments" },
  { icon: Camera, title: "Built-in video conferencing" },
  { icon: Link, title: "Short booking links" },
  { icon: ShieldCheck, title: "Privacy first" },
  { icon: GlobeEurope, title: "65+ languages" },
  { icon: Brackets, title: "Easy embeds" },
  { icon: SquaresPlus, title: "All your favorite apps" },
  {
    icon: PencilSquare,
    title: "Simple customisation",
    description: "Easily customise your booking page to fit your brand.",
    highlight: true,
  },
]

const MoreFeatures = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-subtle">
      <div className="content-container flex flex-col items-center py-12">
        <Heading level="h2" className="text-2xl font-medium text-center">
          ...and so much more!
        </Heading>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className={`flex flex-col gap-4 rounded-lg border border-ui-border-base p-6 ${
                highlight
                  ? "items-start bg-ui-bg-subtle text-left"
                  : "items-center bg-ui-bg-base text-center"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-ui-border-base bg-ui-bg-base">
                <Icon className="h-6 w-6 text-ui-fg-muted" />
              </div>
              <Heading level="h4" className="text-base font-medium">
                {title}
              </Heading>
              {description && (
                <Text className="text-small-regular text-ui-fg-subtle">
                  {description}
                </Text>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoreFeatures
