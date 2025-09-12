import { Heading, Text } from "@medusajs/ui"

const ClientExperience = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container grid grid-cols-1 items-center gap-6 py-12 md:grid-cols-2">
        <div className="flex w-full justify-center order-2 md:order-1">
          <div className="w-full max-w-md rounded-lg border border-ui-border-base bg-ui-bg-subtle p-6">
            <div className="flex flex-col gap-4">
              <div className="flex overflow-hidden rounded-md border border-ui-border-base bg-ui-bg-base">
                <div className="flex-1 px-3 py-1 text-center text-small-regular text-ui-fg-base border-r border-ui-border-base">
                  Customer
                </div>
                <div className="flex-1 px-3 py-1 text-center text-small-regular text-ui-fg-subtle">
                  Support
                </div>
              </div>
              <div className="rounded-md border border-ui-border-base bg-ui-bg-base p-4">
                <Heading level="h4" className="text-base font-medium">
                  This event is scheduled
                </Heading>
                <Text className="mt-1 text-small-regular text-ui-fg-subtle">
                  We sent the invitation and all the details to the attendee and the host.
                </Text>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex text-small-regular">
                    <Text className="w-16 text-ui-fg-subtle">What</Text>
                    <Text className="text-ui-fg-base">Support call</Text>
                  </div>
                  <div className="flex text-small-regular">
                    <Text className="w-16 text-ui-fg-subtle">Who</Text>
                    <Text className="text-ui-fg-base">Jane D. + You</Text>
                  </div>
                  <div className="flex text-small-regular">
                    <Text className="w-16 text-ui-fg-subtle">When</Text>
                    <Text className="text-ui-fg-base">
                      Thu, Nov 21, 2023 2:00 PM - 2:30 PM (CET)
                    </Text>
                  </div>
                  <div className="flex text-small-regular">
                    <Text className="w-16 text-ui-fg-subtle">Where</Text>
                    <Text className="text-ui-fg-base">Google Meet</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 order-1 md:order-2">
          <div className="w-fit rounded-full border border-ui-border-base px-3 py-1">
            <Text className="text-small-regular text-ui-fg-subtle">03</Text>
          </div>
          <Heading level="h3" className="text-xl font-medium">
            Enhanced client experience
          </Heading>
          <Text className="text-base text-ui-fg-subtle">
            Deliver a frictionless booking experience for your clients with branded scheduling pages. Cal.com simplifies the booking process, helping your team focus on building relationships and closing deals.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default ClientExperience

