import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework"
import { generateInvoicePdfWorkflow } from "../workflows/generate-invoice-pdf"

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const query = container.resolve("query")
  const notificationModuleService = container.resolve("notification")

  const [
    orderQuery,
    pdfWorkflow,
  ] = await Promise.all([
    query.graph({
      entity: "order",
      fields: [
        "id",
        "display_id",
        "created_at",
        "currency_code",
        "total",
        "email",
        "items.*",
        "items.variant.*",
        "items.variant.product.*",
        // Ensure we retrieve the product's metadata which may contain
        // the digital download information
        "items.variant.product.metadata",
        "shipping_address.*",
        "billing_address.*",
        "shipping_methods.*",
        "tax_total",
        "subtotal",
        "discount_total",
      ],
      filters: { id: data.id },
    }),
    generateInvoicePdfWorkflow(container).run({
      input: { order_id: data.id },
    }),
  ])

  const {
    data: [order],
  } = orderQuery

  const {
    result: { pdf_buffer },
  } = pdfWorkflow

  const buffer = Buffer.from(pdf_buffer)
  const base64 = buffer.toString("base64")

  const itemsList = order.items
    .map((item) => {
      const title = item.variant?.product?.title ?? item.title
      const qty = item.quantity
      const metadata = item.variant?.product?.metadata as
        | Record<string, unknown>
        | undefined
      const link =
        typeof metadata?.download_link === "string"
          ? (metadata.download_link as string)
          : null

      const linkHtml = link
        ? ` - <a href="${link}">Download</a>`
        : ""

      return `<li>${title} x ${qty}${linkHtml}</li>`
    })
    .join("")

  const html = `<p>Thank you for your order!</p>
<p>Order #${order.display_id}</p>
<ul>${itemsList}</ul>
<p>Total: ${order.total} ${order.currency_code.toUpperCase()}</p>`

  await notificationModuleService.createNotifications({
    to: order.email || "",
    channel: "email",
    content: {
      subject: `Order ${order.display_id} confirmation`,
      html,
    },
    attachments: [
      {
        content: base64,
        filename: `invoice-${order.id}.pdf`,
        content_type: "application/pdf",
        disposition: "attachment",
      },
    ],
  })
}

export const config: SubscriberConfig = {
  event: "order.placed",
}
