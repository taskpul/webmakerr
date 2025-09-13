import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { Modules } from "@medusajs/framework/utils"
import { z } from "zod"

export const CreateAdminUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z.string().optional(),
})

type CreateAdminUserBody = z.infer<typeof CreateAdminUserSchema>

export async function POST(
  req: MedusaRequest<CreateAdminUserBody>,
  res: MedusaResponse
) {
  const userService = req.scope.resolve(Modules.USER)
  const [user] = await userService.createUsers([
    { ...req.validatedBody, roles: ["admin"] },
  ])
  res.json({ user })
}
