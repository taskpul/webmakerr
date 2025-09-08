import { Button, Heading, Text } from "@medusajs/ui"

const Guide = () => {
  return (
    <div className="border-b border-ui-border-base bg-ui-bg-base">
      <div className="content-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-6">
            <Heading level="h2" className="text-3xl font-medium">
              Guide: B2B Food Marketplace
            </Heading>
            <Text className="text-base text-ui-fg-subtle">
              Read how you can build B2B Marketplace with Mercur. Explore free ebook now.
            </Text>
            <div className="flex items-center gap-4">
              <Button className="bg-[#2A0C6A] text-white hover:bg-[#2A0C6A]">
                Download Guide
              </Button>
              <Button
                variant="transparent"
                className="border border-[#2A0C6A] text-[#2A0C6A]"
              >
                Read online
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-ui-bg-subtle" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide

