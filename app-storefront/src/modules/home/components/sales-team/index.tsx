import { User } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"

const SalesTeam = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center py-12">
        <div className="flex items-center gap-x-1 rounded-full border border-ui-border-base px-3 py-1">
          <Text className="text-small-regular text-ui-fg-subtle">Pro benefits</Text>
        </div>
        <Heading
          level="h2"
          className="mt-4 max-w-2xl text-center text-3xl font-bold leading-10"
        >
          How Cal.com works for sales teams
        </Heading>
        <Text className="mt-6 max-w-2xl text-center text-base text-ui-fg-subtle">
          Supercharge your sales process with streamlined scheduling tools designed to connect prospects with your team quickly and efficiently.
        </Text>
        <Button className="mt-8">Get started</Button>
        <div className="mt-12 grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="flex w-full justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute left-1/2 top-0 z-10 -translate-y-1/2 -translate-x-1/2 rounded-full border border-ui-border-base bg-ui-bg-base px-3 py-1">
                <Text className="text-small-regular text-ui-fg-subtle">cal.com/sales-team meeting</Text>
              </div>
              <div className="rounded-lg border border-ui-border-base bg-ui-bg-subtle p-4">
                <div className="grid grid-cols-2 gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-video flex items-center justify-center rounded-md bg-ui-bg-base"
                    >
                      <User className="h-8 w-8 text-ui-fg-subtle" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Heading level="h3" className="text-xl font-bold">
              Better sales meetings
            </Heading>
            <Text className="mt-4 text-base text-ui-fg-subtle">
              Easily coordinate sales calls with prospects and clients, no matter their time zone. Cal.com integrates with your favorite video conferencing tools, supports instant scheduling, and reduces delays in closing deals.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesTeam

