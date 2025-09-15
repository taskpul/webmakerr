import { defineWidgetConfig } from "@medusajs/admin-sdk"
import ProductDigitalWidget from "./product-digital"

export const config = defineWidgetConfig({
  zone: "product.create.after",
})

export default ProductDigitalWidget

