import type { MedusaContainer } from "@medusajs/framework/types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"

export default async function ensureAdminUser({
  container,
}: {
  container: MedusaContainer
}): Promise<void> {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const userModuleService = container.resolve(Modules.USER)

  const email = process.env.ADMIN_EMAIL || "info@webmakerr.com"
  const password = process.env.ADMIN_PASSWORD

  if (!password) {
    logger.warn("ADMIN_PASSWORD is not set; skipping default admin creation")
    return
  }

  const [existing] = await userModuleService.listUsers({ email })

  if (!existing) {
    await userModuleService.createUsers([{ email, password, roles: ["admin"] }])
    logger.info(`Created default admin user ${email}`)
    return
  }

  if (!existing.roles?.includes("admin")) {
    const roles = Array.from(new Set([...(existing.roles ?? []), "admin"]))
    await userModuleService.updateUsers([{ id: existing.id, roles }])
    logger.info(`Updated roles for default admin user ${email}`)
  }
}

