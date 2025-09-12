import { ArrowUpRightMini, Calendar, Clock, Users } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const steps = [
  {
    icon: Calendar,
    title: "Connect your calendar",
    description:
      "We'll handle all the cross-referencing so you don't have to worry about double bookings.",
  },
  {
    icon: Clock,
    title: "Set your availability",
    description:
      "Want to block off weekends? Set up any buffers? We'll make that simple.",
  },
  {
    icon: Users,
    title: "Choose how to meet",
    description:
      "It could be a video chat, phone call, or a walk in the park!",
  },
]

const AppointmentScheduling = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center py-12">
        <LocalizedClientLink href="#">
          <div className="flex items-center gap-x-1 rounded-full border border-ui-border-base px-3 py-1">
            <Text className="text-small-regular text-ui-fg-subtle">View our tools</Text>
            <ArrowUpRightMini className="text-ui-fg-subtle" />
          </div>
        </LocalizedClientLink>
        <Heading
          level="h2"
          className="mt-4 max-w-2xl text-center text-3xl font-bold leading-10"
        >
          With us, appointment scheduling is easy
        </Heading>
        <Text className="mt-6 max-w-2xl text-center text-base text-ui-fg-subtle">
          Effortless scheduling for business and individuals, powerful solutions for fast-growing modern companies.
        </Text>
        <Button className="mt-8">Get started</Button>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-lg border border-ui-border-base p-6"
            >
              <div className="flex h-40 w-full items-center justify-center rounded-md bg-ui-bg-subtle">
                <Icon className="h-8 w-8 text-ui-fg-subtle" />
              </div>
              <div className="flex flex-col gap-2">
                <Heading level="h3" className="text-lg font-bold">
                  {title}
                </Heading>
                <Text className="text-base text-ui-fg-subtle">{description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppointmentScheduling

