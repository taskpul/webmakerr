import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework"

export default async function passwordResetHandler({
  event: { data },
  container,
}: SubscriberArgs<{
  entity_id: string
  token: string
  actor_type: string
}>) {
  const notificationModuleService = container.resolve("notification")

  await notificationModuleService.createNotifications({
    to: data.entity_id,
    template: "password-reset",
    channel: "email",
    data: { token: data.token },
  })
}

export const config: SubscriberConfig = {
  event: "auth.password_reset",
}
