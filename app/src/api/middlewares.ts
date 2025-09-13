import { defineMiddlewares, validateAndTransformBody, authenticate } from "@medusajs/framework/http"
import { PostInvoiceConfgSchema } from "./admin/invoice-config/route"
import { CreateTenantSchema } from "./store/tenants/route"
import { UpdateTenantSchema, DeleteTenantSchema } from "./admin/tenants/route"

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
      matcher: "/admin/tenants",
      methods: ["GET"],
      middlewares: [
        authenticate("user", ["session", "bearer", "api-key"]),
      ]
    },
    {
      matcher: "/admin/tenants",
      methods: ["PUT"],
      middlewares: [
        authenticate("user", ["session", "bearer", "api-key"]),
        validateAndTransformBody(UpdateTenantSchema)
      ]
    },
    {
      matcher: "/admin/tenants",
      methods: ["DELETE"],
      middlewares: [
        authenticate("user", ["session", "bearer", "api-key"]),
        validateAndTransformBody(DeleteTenantSchema)
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