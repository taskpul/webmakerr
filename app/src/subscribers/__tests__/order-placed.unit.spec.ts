import orderPlacedHandler from "../order-placed"

jest.mock("../../workflows/generate-invoice-pdf", () => ({
  generateInvoicePdfWorkflow: () => ({
    run: async () => ({ result: { pdf_buffer: Buffer.from("pdf") } }),
  }),
}))

describe("orderPlacedHandler", () => {
  it("sends order confirmation email", async () => {
    const createNotifications = jest.fn().mockResolvedValue(undefined)

    const container = {
      resolve: (name: string) => {
        if (name === "query") {
          return {
            graph: jest.fn().mockResolvedValue({
              data: [
                {
                  id: "order_1",
                  display_id: 1234,
                  currency_code: "usd",
                  total: 1000,
                  email: "test@example.com",
                  items: [
                    {
                      quantity: 1,
                      title: "Item 1",
                      variant: { product: { title: "Product 1" } },
                    },
                  ],
                },
              ],
            }),
          }
        }
        if (name === "notification") {
          return {
            createNotifications,
          }
        }
        throw new Error(`unknown dependency: ${name}`)
      },
    }

    await orderPlacedHandler({
      event: { data: { id: "order_1" } },
      container: container as any,
    } as any)

    expect(createNotifications).toHaveBeenCalledTimes(1)
    const payload = createNotifications.mock.calls[0][0]
    expect(payload.to).toBe("test@example.com")
    expect(payload.channel).toBe("email")
    expect(payload.content.subject).toContain("1234")
    expect(payload.attachments[0].content).toBe(Buffer.from("pdf").toString("base64"))
  })
})
