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
          subdomain: "test-shop",
        })
        expect(response.status).toEqual(200)
        const tenantService = container.resolve(TENANT_MODULE)
        const tenant = await tenantService.retrieveBySubdomain("test-shop")
        expect(tenant).toBeTruthy()
      })
    })
  },
})
