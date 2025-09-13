"use client"

import { useActionState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { tenantLogin } from "@lib/data/tenant"

const TenantLogin = () => {
  const [message, formAction] = useActionState(tenantLogin, null)

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="tenant-login-page">
      <h1 className="text-large-semi uppercase mb-6">Tenant Login</h1>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input label="Email" name="email" required type="email" autoComplete="email" />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="current-password"
          />
        </div>
        <ErrorMessage error={message} data-testid="tenant-login-error" />
        <SubmitButton className="w-full mt-6" data-testid="tenant-login-button">
          Sign in
        </SubmitButton>
      </form>
      <LocalizedClientLink
        href="/tenant-reset-password"
        className="underline mt-6"
        data-testid="tenant-forgot-password-link"
      >
        Forgot password?
      </LocalizedClientLink>
    </div>
  )
}

export default TenantLogin

