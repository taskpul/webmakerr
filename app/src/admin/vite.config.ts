import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import medusaVitePlugin from "@medusajs/admin-vite-plugin";

export default defineConfig({
  plugins: [medusaVitePlugin(), react()],
  server: {
    allowedHosts: ["app.webmakerr.com"],
  },
});
