import { MedusaService } from "@medusajs/framework/utils"
import Tenant from "./models/tenant"

class TenantService extends MedusaService({
  Tenant,
}) {
  private sanitize(sub: string) {
    return sub
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/^-+|-+$/g, "")
  }

  private async generateUniqueSubdomain(ownerId: string): Promise<string> {
    const baseInfo = ownerId.includes("@") ? ownerId.split("@")[0] : ownerId
    const base = this.sanitize(baseInfo)
    let candidate = base
    let counter = 1
    while ((await this.listTenants({ subdomain: candidate })).length) {
      candidate = `${base}-${counter}`
      counter++
    }
    return candidate
  }

  async createTenant(ownerId: string, subdomain?: string) {
    const target = subdomain
      ? this.sanitize(subdomain)
      : await this.generateUniqueSubdomain(ownerId)

    if (subdomain) {
      const existing = await this.listTenants({ subdomain: target })
      if (existing.length) {
        throw new Error("Subdomain already taken")
      }
    }

    return await this.createTenants({ owner_id: ownerId, subdomain: target })
  }

  async retrieveBySubdomain(subdomain: string) {
    const [tenant] = await this.listTenants({ subdomain })
    return tenant
  }
}

export default TenantService
