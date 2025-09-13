import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { Modules } from "@medusajs/framework/utils"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  if (!req.actor?.roles?.includes("admin")) {
    res.status(403).json({ message: "Forbidden" })
    return
  }

  const { id } = req.params
  const userModuleService = req.scope.resolve(Modules.USER)
  const [user] = await userModuleService.listUsers({ id })
  const roles = Array.from(new Set([...(user.roles ?? []), "admin"]))
  await userModuleService.updateUsers([{ id, roles }])
  res.json({ id, roles })
}

