import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import { Modules } from "@medusajs/framework/utils"
import { TENANT_MODULE } from "../../src/modules/tenant"

jest.setTimeout(60 * 1000)

medusaIntegrationTestRunner({
  inApp: true,
  env: { ADMIN_PASSWORD: "testadmin" },
  testSuite: ({ api, container }) => {
    describe("Admin registration", () => {
      it("registers admin user and tenant", async () => {
        const email = "newadmin@example.com"
        const password = "password"

        const response = await api.post("/admin/register", { email, password })
        expect(response.status).toEqual(200)

        const userService = container.resolve(Modules.USER)
        const [user] = await userService.listUsers({ email })
        expect(user?.roles).toContain("admin")

        const tenantService = container.resolve(TENANT_MODULE)
        const tenants = await tenantService.listTenants({ owner_id: user.id })
        expect(tenants.length).toBeGreaterThan(0)
        expect(tenants[0].owner_id).toEqual(user.id)
      })
    })
  },
})
