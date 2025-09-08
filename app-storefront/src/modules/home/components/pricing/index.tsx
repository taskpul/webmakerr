import { Button, Heading, Text } from "@medusajs/ui"
import {
  ArrowPath,
  BoltSolid,
  ChartBar,
  ChartPie,
  CheckCircleSolid,
  ClockSolid,
  EnvelopeSolid,
  Eye,
  Github,
  GlobeEuropeSolid,
  KeySolid,
  Lifebuoy,
  Link as LinkIcon,
  LockClosedSolid,
  MagnifyingGlass,
  RocketLaunchSolid,
  ShieldCheck,
  User,
} from "@medusajs/icons"

const plans = [
  {
    name: "Hobby",
    description:
      "The perfect starting place for your side or personal project. Free forever.",
    features: [
      { icon: LockClosedSolid, text: "Automatic SSL" },
      { icon: LinkIcon, text: "Custom domains" },
      { icon: GlobeEuropeSolid, text: "Global edge network" },
      { icon: Eye, text: "Previews" },
      { icon: Github, text: "Git integration" },
      { icon: BoltSolid, text: "Edge functions" },
      { icon: ArrowPath, text: "Instant rollbacks" },
      { icon: ChartBar, text: "Usage analytics" },
    ],
    cta: "Start developing",
  },
  {
    name: "Pro",
    description:
      "Everything you need to build your business. $20/mo per member.",
    features: [
      { icon: CheckCircleSolid, text: "Everything in Hobby" },
      { icon: User, text: "One included seat" },
      { icon: MagnifyingGlass, text: "Observability tools" },
      { icon: RocketLaunchSolid, text: "Faster builds" },
      { icon: ShieldCheck, text: "Advanced API Protection" },
      { icon: EnvelopeSolid, text: "Email support" },
    ],
    cta: "Start the trial",
  },
  {
    name: "Enterprise",
    description: "Critical security, performance, observability, and support.",
    features: [
      { icon: CheckCircleSolid, text: "Everything in Pro, plus:" },
      { icon: KeySolid, text: "SSO & team access controls" },
      { icon: ShieldCheck, text: "SOC 2 & security management" },
      { icon: ClockSolid, text: "99.99% uptime SLA" },
      { icon: ChartPie, text: "Build and usage analytics" },
      { icon: Lifebuoy, text: "Dedicated support" },
    ],
    cta: "Get a demo",
    secondaryCta: "Request trial",
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
          {plans.map(({ name, description, features, cta, secondaryCta }) => (
            <div
              key={name}
              className="flex flex-col rounded-md border border-ui-border-base p-8"
            >
              <Heading level="h3" className="text-xl font-medium">
                {name}
              </Heading>
              <Text className="mt-2 text-ui-fg-subtle">{description}</Text>
              <ul className="mt-6 flex-1 space-y-2 text-ui-fg-subtle">
                {features.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="h-5 w-5" />
                    <Text className="text-small-regular">{text}</Text>
                  </li>
                ))}
              </ul>
              {secondaryCta ? (
                <div className="mt-6 flex items-center gap-3">
                  <Button>{cta}</Button>
                  <Button variant="secondary">{secondaryCta}</Button>
                </div>
              ) : (
                <Button className="mt-6">{cta}</Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
