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

  async createTenant(ownerId: string, subdomain: string) {
    const sanitized = this.sanitize(subdomain)
    const existing = await this.listTenants({ subdomain: sanitized })
    if (existing.length) {
      throw new Error("Subdomain already taken")
    }
    return await this.createTenants({ owner_id: ownerId, subdomain: sanitized })
  }

  async retrieveBySubdomain(subdomain: string) {
    const [tenant] = await this.listTenants({ subdomain })
    return tenant
  }
}

export default TenantService
