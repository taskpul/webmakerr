import { defineMiddlewares, validateAndTransformBody } from "@medusajs/framework/http"
import { PostInvoiceConfgSchema } from "./admin/invoice-config/route"
import { CreateTenantSchema } from "./store/tenants/route"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/invoice-config",
      methods: ["POST"],
      middlewares: [
        validateAndTransformBody(PostInvoiceConfgSchema)
      ]
    },
    {
      matcher: "/store/tenants",
      methods: ["POST"],
      middlewares: [
        validateAndTransformBody(CreateTenantSchema)
      ]
    }
  ]
})