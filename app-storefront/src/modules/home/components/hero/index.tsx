import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-interactive">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 gap-6">
        <Heading
          level="h1"
          className="text-3xl leading-10 text-ui-fg-on-color font-normal max-w-3xl"
        >
          Modern marketplace platform without limits
        </Heading>
        <Heading
          level="h2"
          className="text-base text-ui-fg-on-color/80 font-normal max-w-2xl"
        >
          Open source marketplace platform to build and resell tech. Modern
          tech, unlimited customization, no transaction fees.
        </Heading>
        <div className="flex items-center gap-4 mt-4">
          <a href="https://cal.com/medusajs" target="_blank">
            <Button variant="primary">Schedule demo</Button>
          </a>
          <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
          >
            <Button
              variant="transparent"
              className="text-ui-fg-on-color border border-ui-border-interactive"
            >
              Visit GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
