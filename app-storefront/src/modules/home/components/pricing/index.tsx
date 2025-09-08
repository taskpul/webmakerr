import { Button, Heading, Text } from "@medusajs/ui"

const plans = [
  {
    name: "Hobby",
    description:
      "The perfect starting place for your side or personal project. Free forever.",
    features: [
      "Automatic SSL",
      "Custom domains",
      "Global edge network",
      "Previews",
      "Git integration",
      "Edge functions",
      "Instant rollbacks",
      "Usage analytics",
    ],
    cta: "Start developing",
  },
  {
    name: "Pro",
    description:
      "Everything you need to build your business. $20/mo per member.",
    features: [
      "Everything in Hobby",
      "AI-powered analytics",
      "Enhanced collaboration",
      "Faster builds",
      "Advanced speed insights",
      "Email support",
    ],
    cta: "Start the trial",
  },
  {
    name: "Enterprise",
    description:
      "Critical security, performance, observability, and support.",
    features: [
      "Everything in Pro",
      "SSO & team access controls",
      "SOC 2 & security management",
      "99.99% uptime SLA",
      "Build and usage analytics",
      "Dedicated support",
    ],
    cta: "Request trial",
  },
]

const Pricing = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center">
          <Heading level="h2" className="text-3xl font-medium">
            Find a plan to power your apps.
          </Heading>
          <Text className="mt-2 text-ui-fg-subtle">
            Vercel supports teams of all sizes, with pricing that scales.
          </Text>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map(({ name, description, features, cta }) => (
            <div
              key={name}
              className="flex flex-col rounded-md border border-ui-border-base p-6"
            >
              <Heading level="h3" className="text-xl font-medium">
                {name}
              </Heading>
              <Text className="mt-2 text-ui-fg-subtle">{description}</Text>
              <ul className="mt-6 flex-1 list-disc pl-5 text-ui-fg-subtle">
                {features.map((feature) => (
                  <li key={feature} className="text-small-regular">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-6">{cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing

