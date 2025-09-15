import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Input, Label } from "@medusajs/ui"
import { useFormContext } from "react-hook-form"

const ProductDigitalWidget = () => {
  const { register } = useFormContext()

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Digital Product</Heading>
      </div>
      <div className="flex flex-col gap-y-2 px-6 py-4">
        <Label size="small" weight="plus">
          Download link
        </Label>
        <Input
          {...register("metadata.download_link")}
          placeholder="https://example.com/download"
        />
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.after",
})

export default ProductDigitalWidget
