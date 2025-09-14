import {
  defineMiddlewares,
  validateAndTransformBody,
  authenticate,
} from "@medusajs/framework/http"
import { PostInvoiceConfgSchema } from "./admin/invoice-config/route"
import {
  CreateTenantSchema,
  UpdateTenantSchema,
  DeleteTenantSchema,
} from "./admin/tenants/route"
import { CreateAdminUserSchema } from "./admin/users/route"
import { AdminRegisterSchema } from "./admin/register/route"

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
      matcher: "/admin/register",
      methods: ["POST"],
      middlewares: [
        validateAndTransformBody(AdminRegisterSchema)
      ]
    },
    {
      matcher: "/admin/users",
      methods: ["POST"],
      middlewares: [
        authenticate("user", ["session", "bearer", "api-key"]),
        validateAndTransformBody(CreateAdminUserSchema)
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
      methods: ["POST"],
      middlewares: [
        authenticate("user", ["session", "bearer", "api-key"]),
        validateAndTransformBody(CreateTenantSchema)
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
    }
  ]
})
