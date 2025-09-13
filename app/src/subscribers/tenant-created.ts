import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework"

export default async function tenantCreated({ event: { data } }: SubscriberArgs<{ subdomain: string }>) {
  const token = process.env.CLOUDFLARE_TOKEN
  const zone = process.env.CLOUDFLARE_ZONE_ID
  const root = process.env.ROOT_DOMAIN
  if (!token || !zone || !root) {
    return
  }
  try {
    await fetch(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'CNAME',
        name: `${data.subdomain}.${root}`,
        content: root,
      }),
    })
  } catch (e) {
    console.error('Failed to create DNS record', e)
  }
}

export const config: SubscriberConfig = {
  event: 'tenant.created',
}
