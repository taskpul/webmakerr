import { Fragment } from "react"

import {
  CloudArrowUp,
  RocketLaunchSolid,
  ComputerDesktopSolid,
  PuzzleSolid,
  SquaresPlus,
  Brackets,
} from "@medusajs/icons"
import { Badge, Text } from "@medusajs/ui"

const features = [
  { icon: CloudArrowUp, title: "Cloud", color: "text-ui-tag-blue-icon" },
  { icon: RocketLaunchSolid, title: "Native", color: "text-ui-tag-purple-icon" },
  { icon: ComputerDesktopSolid, title: "Headless", color: "text-ui-tag-orange-icon" },
  { icon: PuzzleSolid, title: "Composable", color: "text-ui-tag-green-icon" },
  { icon: SquaresPlus, title: "Extensible", color: "text-ui-tag-red-icon" },
  { icon: Brackets, title: "Open Source", color: "text-ui-tag-neutral-icon" },
]

const brands = [
  { name: "LUSH" },
  { name: "BREITLING 1884" },
  { name: "Zardo" },
  { name: "PDGPE" },
  { name: "unicef" },
  { name: "Opbender" },
]

const Features = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center py-12">
        <div className="flex flex-wrap items-center justify-center gap-2 text-ui-fg-base">
          {features.map(({ icon: Icon, title, color }, i) => (
            <Fragment key={title}>
              <div className="flex items-center gap-2">
                <Icon className={`h-4 w-4 ${color}`} />
                <Text className="text-small-regular">{title}</Text>
              </div>
              {i < features.length - 1 && (
                <span className="text-ui-fg-muted">•</span>
              )}
            </Fragment>
          ))}
        </div>
        <Text className="mt-12 text-base text-ui-fg-subtle">
          Trusted by global brands
        </Text>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
          {brands.map(({ name }) => (
            <div key={name} className="flex flex-col items-center">
              <Text className="text-2xl font-semibold text-ui-fg-base">
                {name}
              </Text>
              <Badge color="orange" size="small" className="mt-2">
                Case study
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features

