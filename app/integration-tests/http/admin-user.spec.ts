import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import { Modules } from "@medusajs/framework/utils"

jest.setTimeout(60 * 1000)

medusaIntegrationTestRunner({
  inApp: true,
  env: { ADMIN_PASSWORD: "testadmin" },
  testSuite: ({ api, container }) => {
    describe("Admin user", () => {
      let authHeaders: Record<string, string>

      beforeAll(async () => {
        const login = await api.post("/auth/user/emailpass", {
          email: "info@webmakerr.com",
          password: "testadmin",
        })
        const token = login.body.token || login.body.access_token
        authHeaders = { Authorization: `Bearer ${token}` }
      })

      it("creates admin user", async () => {
        const email = "admin2@example.com"
        const password = "password"
        const response = await api.post(
          "/admin/users",
          { email, password },
          authHeaders
        )
        expect(response.status).toEqual(200)
        const userModuleService = container.resolve(Modules.USER)
        const [user] = await userModuleService.listUsers({ email })
        expect(user?.roles).toContain("admin")
      })
    })
  },
})
