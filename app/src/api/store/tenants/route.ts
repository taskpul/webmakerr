import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { z } from "zod"
import { TENANT_MODULE } from "../../../modules/tenant"
import TenantService from "../../../modules/tenant/service"

export const CreateTenantSchema = z.object({
  owner_id: z.string(),
  subdomain: z.string().optional(),
})

type CreateTenantBody = z.infer<typeof CreateTenantSchema>

export async function POST(
  req: MedusaRequest<CreateTenantBody>,
  res: MedusaResponse
) {
  const tenantService: TenantService = req.scope.resolve(TENANT_MODULE)
  const { owner_id } = req.validatedBody
  const tenant = await tenantService.createTenant(owner_id)
  res.json({ tenant })
}
