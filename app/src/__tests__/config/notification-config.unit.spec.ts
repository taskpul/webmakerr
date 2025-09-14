import config from "../../../medusa-config"

describe("notification plugin configuration", () => {
  it("registers bravo provider for email channel", () => {
    const notificationPlugin = (config.plugins || []).find(
      (p) => p.resolve === "@medusajs/notification"
    ) as any

    const provider = notificationPlugin.options.providers.find(
      (p: any) => p.id === "bravo"
    )

    expect(provider.channels).toContain("email")
  })
})
