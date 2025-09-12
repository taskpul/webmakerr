import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"

const colorMap = {
  blue: {
    bg: "bg-ui-tag-blue-bg",
  },
  green: {
    bg: "bg-ui-tag-green-bg",
  },
  purple: {
    bg: "bg-ui-tag-purple-bg",
  },
} as const

const features = [
  {
    image: "/commerce-engine.svg",
    title: "Powerful Commerce Engine",
    description:
      "Build with Commerce Modules like Product, Promotions or Checkout to compose your perfect stack.",
    color: "blue" as const,
  },
  {
    image: "/unrivalled-extensibility.svg",
    title: "Unrivaled Extensibility",
    description:
      "Extend your commerce stack with any integration and your business logic across the backend, API, or any frontend.",
    color: "green" as const,
  },
  {
    image: "/user-friendly-dashboard.svg",
    title: "User-Friendly Dashboard",
    description:
      "An operational dashboard for merchants, customers, and the community. Extend with custom apps as you grow.",
    color: "purple" as const,
  },
]

const CommerceExperience = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center py-12">
        <Heading level="h2" className="text-3xl font-bold leading-10 text-center">
          Take full control of your commerce experience
        </Heading>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ image, title, description, color }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 rounded-lg border border-ui-border-base p-6 text-center"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-md ${colorMap[color].bg}`}
              >
                <Image
                  src={image}
                  alt={title}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <Heading level="h3" className="text-lg font-bold">
                {title}
              </Heading>
              <Text className="text-base text-ui-fg-subtle">{description}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommerceExperience
