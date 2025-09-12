import { Button, Heading, Text } from "@medusajs/ui"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const dates = [
  [null, null, null, null, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
]

const Hero = () => {
  return (
    <section className="border-b border-ui-border-base bg-ui-bg-subtle">
      <div className="content-container flex flex-col items-center gap-12 py-16 md:flex-row md:py-24">
        <div className="flex max-w-xl flex-col gap-6">
          <span className="w-fit rounded-full bg-ui-bg-base px-3 py-1 text-small-regular text-ui-fg-subtle">
            Cal.com launched in '05
          </span>
          <Heading
            level="h1"
            className="text-3xl font-bold text-ui-fg-base md:text-4xl"
          >
            The better way to schedule your meetings
          </Heading>
          <Text className="text-base text-ui-fg-subtle">
            A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where teams meet users.
          </Text>
          <div className="mt-4">
            <Button className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544.3"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h147.3c-6.3 34-25.7 62.8-55 82v68h88.8c52.1-48 80.4-118.7 80.4-195z" />
                <path d="M272 544.3c72.6 0 133.5-23.9 178-64.8l-88.8-68c-24.7 16.5-56.5 26-89.2 26-68.5 0-126.4-46.1-147.1-108.1H35.5v67.8c44.6 88.3 136.1 146.1 236.5 146.1z" />
                <path d="M124.9 329.4c-10.5-31.4-10.5-65.6 0-97l-67.8-67.8H35.5c-38.7 73.3-38.7 159.3 0 232.6l89.4-67.8z" />
                <path d="M272 107.7c37.3-.6 73.1 13.1 100.4 38.6l75-75C402.5 24.5 345.9 0 272 0 171.6 0 80.1 57.8 35.5 146.1l89.4 67.8C145.6 153.8 203.5 107.7 272 107.7z" />
              </svg>
              Sign in with Google
            </Button>
            <Text className="mt-2 text-small-regular text-ui-fg-muted">
              No credit card required
            </Text>
          </div>
        </div>
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6 rounded-large border border-ui-border-base bg-ui-bg-base p-6 shadow-elevation-card-rest">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-grey-20" />
              <div>
                <Heading level="h3" className="text-base font-bold text-ui-fg-base">
                  Emma Brown
                </Heading>
                <Text className="text-small-regular text-ui-fg-subtle">
                  Office Hours
                </Text>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Heading level="h3" className="text-base font-bold text-ui-fg-base">
                  May 2015
                </Heading>
                <div className="flex gap-2 text-ui-fg-muted">
                  <span>&lt;</span>
                  <span>&gt;</span>
                </div>
              </div>
              <table className="mt-4 w-full text-center text-small-regular text-ui-fg-base">
                <thead>
                  <tr className="text-ui-fg-muted">
                    {days.map((d) => (
                      <th key={d} className="w-8">
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dates.map((week, i) => (
                    <tr key={i}>
                      {week.map((d, j) => (
                        <td key={j} className="p-1">
                          {d ?? ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
