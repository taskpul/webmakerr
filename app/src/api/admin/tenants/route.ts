import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { z } from "zod"
import { TENANT_MODULE } from "../../../modules/tenant"
import TenantService from "../../../modules/tenant/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const tenantService: TenantService = req.scope.resolve(TENANT_MODULE)
  const tenants = await tenantService.listTenants()
  res.json({ tenants })
}

export const UpdateTenantSchema = z.object({
  id: z.string(),
  subdomain: z.string().optional(),
  metadata: z.record(z.any()).optional(),
})

type UpdateTenantBody = z.infer<typeof UpdateTenantSchema>

export async function PUT(
  req: MedusaRequest<UpdateTenantBody>,
  res: MedusaResponse
) {
  const tenantService: TenantService = req.scope.resolve(TENANT_MODULE)
  const { id, ...data } = req.validatedBody
  const tenant = await tenantService.updateTenant(id, data)
  res.json({ tenant })
}

export const DeleteTenantSchema = z.object({
  id: z.string(),
})

type DeleteTenantBody = z.infer<typeof DeleteTenantSchema>

export async function DELETE(
  req: MedusaRequest<DeleteTenantBody>,
  res: MedusaResponse
) {
  const tenantService: TenantService = req.scope.resolve(TENANT_MODULE)
  const { id } = req.validatedBody
  await tenantService.deleteTenant(id)
  res.json({ id, deleted: true })
}

