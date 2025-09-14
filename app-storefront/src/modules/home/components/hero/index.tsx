import { Button, Heading, Text } from "@medusajs/ui"

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
            <iframe
              width="388"
              height="321"
              src="https://ab9f9faf.sibforms.com/serve/MUIFAMMrfQVbv9lWk-rutNm5l4-bAEm0F30RuaKo-r_cMaSGMmk9nZWN462-P5yYBJ09TYEikHA0kebWFvLpIC2npJK0-nNTENNmKMTgmnk_zd78VC0qw3XowB_2kNiyiNO5Yr1wq-kJF9Y3-NBHEdZSKiUP9RUYltk7Ci0asd-nBbsNBPxsWh3h5V-e4Qnw_KNMc1sedtzEPID3"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
