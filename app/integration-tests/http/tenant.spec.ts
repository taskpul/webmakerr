import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import { TENANT_MODULE } from "../../src/modules/tenant"

jest.setTimeout(60 * 1000)

medusaIntegrationTestRunner({
  inApp: true,
  env: {},
  testSuite: ({ api, container }) => {
    describe("Tenant", () => {
      it("creates and retrieves tenant", async () => {
        const response = await api.post("/store/tenants", {
          owner_id: "owner1",
        })
        expect(response.status).toEqual(200)
        const tenantService = container.resolve(TENANT_MODULE)
        const tenant = await tenantService.retrieveBySubdomain(
          response.data.tenant.subdomain
        )
        expect(tenant).toBeTruthy()
      })

      it("generates unique subdomains when none provided", async () => {
        const first = await api.post("/store/tenants", { owner_id: "owner2" })
        const second = await api.post("/store/tenants", { owner_id: "owner2" })
        expect(first.status).toEqual(200)
        expect(second.status).toEqual(200)
        expect(first.data.tenant.subdomain).not.toEqual(
          second.data.tenant.subdomain
        )
      })

      it("lists, updates, and deletes tenants", async () => {
        const tenantService = container.resolve(TENANT_MODULE)
        const tenant = await tenantService.createTenant("owner3")

        const tenants = await tenantService.listTenants()
        expect(tenants.some((t) => t.id === tenant.id)).toBe(true)

        await tenantService.updateTenant(tenant.id, { subdomain: "updated" })
        const [updated] = await tenantService.listTenants({ id: tenant.id })
        expect(updated.subdomain).toEqual("updated")

        await tenantService.deleteTenant(tenant.id)
        const after = await tenantService.listTenants({ id: tenant.id })
        expect(after.length).toEqual(0)
      })
    })
  },
})
