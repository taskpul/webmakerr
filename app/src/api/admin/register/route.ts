import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { Modules } from "@medusajs/framework/utils"
import { z } from "zod"

import { CreateAdminUserSchema } from "../users/route"
import { TENANT_MODULE } from "../../../modules/tenant"
import TenantService from "../../../modules/tenant/service"

export const AdminRegisterSchema = CreateAdminUserSchema

export type AdminRegisterBody = z.infer<typeof AdminRegisterSchema>

export async function POST(
  req: MedusaRequest<AdminRegisterBody>,
  res: MedusaResponse
) {
  const userService = req.scope.resolve(Modules.USER)
  const tenantService: TenantService = req.scope.resolve(TENANT_MODULE)

  const [user] = await userService.createUsers([
    { ...req.validatedBody, roles: ["admin"] },
  ])

  const tenant = await tenantService.createTenant(user.id)

  res.json({ user, tenant })
}

