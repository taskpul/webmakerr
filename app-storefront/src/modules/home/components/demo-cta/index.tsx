import { Button, Heading } from "@medusajs/ui"
import { ArrowRightMini } from "@medusajs/icons"

const DemoCta = () => {
  return (
    <div className="bg-ui-bg-base">
      <div className="content-container py-16">
        <div className="relative overflow-hidden rounded-rounded border border-ui-border-base bg-ui-bg-base px-6 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(var(--border-base)_1px,transparent_1px),linear-gradient(90deg,var(--border-base)_1px,transparent_1px)] bg-[length:40px_40px] opacity-40" />
          <Heading
            level="h2"
            className="mx-auto max-w-4xl text-3xl font-bold leading-10"
          >
            Free up your time. We've got your scheduling covered. Try Cal.com
            now!
          </Heading>
          <a
            href="https://cal.com"
            target="_blank"
            className="mt-8 inline-flex"
          >
            <Button>
              <span className="flex items-center gap-x-2">
                Get started
                <ArrowRightMini />
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DemoCta
