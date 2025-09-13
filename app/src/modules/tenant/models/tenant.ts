import { model } from "@medusajs/framework/utils"

export const Tenant = model.define("tenant", {
  id: model.id().primaryKey(),
  owner_id: model.text(),
  subdomain: model.text().unique(),
  metadata: model.json().nullable(),
})

export default Tenant
