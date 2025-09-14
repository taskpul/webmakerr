import { AbstractNotificationProviderService, MedusaError } from "@medusajs/framework/utils"
import type { Logger } from "@medusajs/framework/types"
import type {
  ProviderSendNotificationDTO,
  ProviderSendNotificationResultsDTO,
} from "@medusajs/framework/types"

interface InjectedDependencies {
  logger: Logger
}

interface BravoOptions {
  api_key: string
  from: {
    email: string
    name: string
  }
}

class BravoNotificationService extends AbstractNotificationProviderService {
  protected readonly logger_: Logger
  protected readonly options_: BravoOptions

  constructor({ logger }: InjectedDependencies, options: BravoOptions) {
    super()
    this.logger_ = logger
    this.options_ = options
  }

  async send(notification: ProviderSendNotificationDTO): Promise<ProviderSendNotificationResultsDTO> {
    if (!notification) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, "No notification information provided")
    }

    const from = notification.from ?? this.options_.from
    const attachments = Array.isArray(notification.attachments)
      ? notification.attachments.map((a) => ({ content: a.content, name: a.filename }))
      : undefined

    const content = "content" in notification && notification.content
      ? {
          subject: notification.content.subject,
          htmlContent: notification.content.html,
        }
      : { templateId: notification.template }

    const body: any = {
      sender: from,
      to: [{ email: notification.to }],
      params: notification.data,
      attachment: attachments,
      ...content,
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": this.options_.api_key,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const message = await response.text()
      throw new MedusaError(
        MedusaError.Types.UNEXPECTED_STATE,
        `Failed to send email: ${response.status} - ${message}`
      )
    }

    const data = await response.json().catch(() => ({}))
    return { id: data.messageId }
  }
}

// identifier used by notification module
;(BravoNotificationService as any).identifier = "notification-bravo"

export default BravoNotificationService