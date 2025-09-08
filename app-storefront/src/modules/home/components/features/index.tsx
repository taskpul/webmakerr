import {
  RocketLaunchSolid,
  ComputerDesktopSolid,
  PuzzleSolid,
  Brackets,
  CloudArrowUp,
} from "@medusajs/icons"
import { Heading, Text } from "@medusajs/ui"

const items = [
  {
    icon: RocketLaunchSolid,
    title: "Starters",
    description: "Complete starters to launch modules.",
  },
  {
    icon: ComputerDesktopSolid,
    title: "Admin",
    description: "Customizable dashboard for your commerce.",
  },
  {
    icon: PuzzleSolid,
    title: "Commerce Modules",
    description: "Advanced ecommerce logic for your use case.",
  },
  {
    icon: Brackets,
    title: "Framework",
    description: "Tooling to build your own customizations.",
  },
  {
    icon: CloudArrowUp,
    title: "Cloud",
    description: "Link to GitHub pushes to deploy.",
  },
]

const Features = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="flex gap-8 overflow-x-auto px-6 py-6 sm:px-8 md:justify-center">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex min-w-[200px] shrink-0 flex-col items-center text-center"
          >
            <Icon className="h-6 w-6 text-ui-fg-subtle" />
            <Heading level="h3" className="mt-3 text-base font-medium">
              {title}
            </Heading>
            <Text className="mt-1 text-small-regular text-ui-fg-muted">
              {description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
