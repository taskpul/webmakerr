import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { generateInvoicePdfWorkflow } from "../../../../../workflows/generate-invoice-pdf"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  if (!req.actor?.roles?.includes("admin")) {
    res.status(403).json({ message: "Forbidden" })
    return
  }
  const { id } = req.params

  const { result: {
    pdf_buffer
  } } = await generateInvoicePdfWorkflow(req.scope)
    .run({
      input: {
        order_id: id
      }
    })

  const buffer = Buffer.from(pdf_buffer)

  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="invoice-${id}.pdf"`,
    'Content-Length': buffer.length
  })
  
  res.send(buffer)
} 