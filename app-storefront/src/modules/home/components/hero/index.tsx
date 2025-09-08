import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[52.5vh] w-full border-b border-ui-border-base relative"
      style={{ backgroundColor: "#2A0C6A" }}
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="content-container flex flex-col items-center text-center gap-6 text-[#C8C4E9]">
          <Heading
            level="h1"
            className="text-3xl leading-10 font-normal max-w-3xl"
          >
            Modern marketplace platform without limits
          </Heading>
          <Heading
            level="h2"
            className="text-base font-normal max-w-2xl opacity-80"
          >
            Open source marketplace platform to build and resell tech. Modern tech,
            unlimited customization, no transaction fees.
          </Heading>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://cal.com/medusajs" target="_blank">
              <Button className="bg-white text-[#2A0C6A] hover:bg-white hover:text-[#2A0C6A]">
                Schedule demo
              </Button>
            </a>
            <a
              href="https://github.com/medusajs/nextjs-starter-medusa"
              target="_blank"
            >
              <Button
                variant="transparent"
                className="text-white border border-white"
              >
                Visit GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
