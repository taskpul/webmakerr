import { Button, Heading, Text } from "@medusajs/ui"

const CaseStudy = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="flex items-center justify-center p-8"
            style={{ backgroundColor: "#2A0C6A" }}
          >
            <div className="w-full max-w-md aspect-video bg-ui-bg-base" />
          </div>
          <div className="flex flex-col justify-center p-8 gap-6">
            <Heading level="h3" className="text-base">natuja</Heading>
            <Heading level="h2" className="text-2xl font-medium">
              Custom Marketplace built in 9 Weeks
            </Heading>
            <Text className="text-base text-ui-fg-subtle">
              Natuja, a rising star in the DACH marketplace for natural products,
              migrated from Sharetribe platform to a customized Medusa Marketplace
              Platform.
            </Text>
            <div className="flex gap-8">
              <div>
                <Heading level="h4" className="text-2xl font-medium">
                  1000+
                </Heading>
                <Text className="text-small-regular text-ui-fg-muted">
                  Products
                </Text>
              </div>
              <div>
                <Heading level="h4" className="text-2xl font-medium">
                  150+
                </Heading>
                <Text className="text-small-regular text-ui-fg-muted">
                  Vendors
                </Text>
              </div>
            </div>
            <div>
              <Button>Explore Case Study</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
