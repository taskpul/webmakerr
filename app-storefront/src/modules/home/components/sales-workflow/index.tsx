import { Heading, Text } from "@medusajs/ui"

const SalesWorkflow = () => {
  const days = Array.from({ length: 28 }, (_, i) => i + 1)

  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container grid grid-cols-1 items-center gap-6 py-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-full border border-ui-border-base px-3 py-1">
            <Text className="text-small-regular text-ui-fg-subtle">02</Text>
          </div>
          <Heading level="h3" className="text-xl font-medium">
            Streamlined sales workflows
          </Heading>
          <Text className="text-base text-ui-fg-subtle">
            Efficiently manage lead follow-ups, discovery calls, and product demos
            with collective and round-robin scheduling. Automated reminders ensure
            no opportunity is missed, while customizable forms gather crucial
            information upfront.
          </Text>
        </div>
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md rounded-lg border border-ui-border-base bg-ui-bg-subtle p-6">
            <div className="flex flex-col gap-4">
              <div className="rounded-md border border-ui-border-base bg-ui-bg-base p-4">
                <Heading level="h4" className="text-base font-medium">
                  Product Demo
                </Heading>
                <Text className="mt-1 text-small-regular text-ui-fg-subtle">
                  A discovery call with our sales team
                </Text>
                <Text className="mt-2 text-small-regular text-ui-fg-muted">
                  Friday, February 4, 2025 8:00am - 10:00am
                </Text>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {days.map((day) => (
                  <div
                    key={day}
                    className={`flex h-8 w-8 items-center justify-center rounded-md text-small-regular ${
                      day === 24
                        ? "bg-ui-tag-purple-bg text-ui-tag-purple-icon"
                        : "text-ui-fg-subtle"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesWorkflow

