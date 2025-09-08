import { Button, Heading, Text } from "@medusajs/ui"
import { ArrowUpRightMini } from "@medusajs/icons"
import Mercur from "@modules/common/icons/mercur"

const DemoCta = () => {
  return (
    <div className="border-y border-ui-border-base bg-ui-bg-base">
      <div className="content-container flex flex-col items-center text-center gap-6 py-16">
        <Mercur className="h-10 w-10" />
        <Heading level="h2" className="text-3xl font-medium">
          Build custom marketplace with Mercur
        </Heading>
        <Text className="text-base text-ui-fg-subtle max-w-2xl">
          Schedule a quick call to get our Mercur Marketplace tailored to your specific marketplace requirements. Connect with our team to discuss how we can help bring your marketplace vision to life.
        </Text>
        <div className="flex items-center gap-4 mt-4">
          <a href="https://cal.com/medusajs" target="_blank">
            <Button className="bg-[#2A0C6A] text-white hover:bg-[#2A0C6A]">
              Schedule demo
            </Button>
          </a>
          <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
            className="flex items-center gap-1 text-[#2A0C6A] group"
          >
            <span>Github</span>
            <ArrowUpRightMini
              className="transition-transform group-hover:rotate-45"
              color="#2A0C6A"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default DemoCta
