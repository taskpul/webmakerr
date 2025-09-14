import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: [
    {
      resolve: "./src/modules/invoice-generator",
    },
  ],
  plugins: [
    {
      resolve: "@medusajs/notification",
      options: {
        providers: [
          {
            resolve: "./src/services/bravo",
            id: "bravo",
            channels: ["email"],
            options: {
              api_key: process.env.BRAVO_API_KEY!,
              from: {
                email: "info@webmakerr.com",
                name: "Webmakerr",
              },
            },
          },
        ],
      },
    },
  ],
})
