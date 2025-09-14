import { loadEnv, defineConfig } from "@medusajs/framework/utils";
import path from "path";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

const storeCors = [
  ...(process.env.STORE_CORS ? process.env.STORE_CORS.split(",") : []),
  process.env.ROOT_DOMAIN ? `.${process.env.ROOT_DOMAIN}` : "",
]
  .filter(Boolean)
  .join(",");

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  plugins: [
    {
      resolve: path.join(__dirname, "src/plugins/admin-registration-link"),
      options: {},
    },
  ],
  modules: [
    {
      resolve: "./src/modules/invoice-generator",
    },
    {
      resolve: "./src/modules/tenant",
    },
  ],
});
