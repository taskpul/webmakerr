"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { signup } from "@lib/data/customer"

const TenantSignup = () => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="tenant-signup-page">
      <h1 className="text-large-semi uppercase mb-6">Create your tenant account</h1>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input label="First name" name="first_name" required autoComplete="given-name" />
          <Input label="Last name" name="last_name" required autoComplete="family-name" />
          <Input label="Email" name="email" required type="email" autoComplete="email" />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" />
          <Input label="Password" name="password" required type="password" autoComplete="new-password" />
          <Input label="Subdomain" name="subdomain" required autoComplete="off" />
        </div>
        <ErrorMessage error={message} data-testid="tenant-signup-error" />
        <SubmitButton className="w-full mt-6" data-testid="tenant-signup-button">
          Sign up
        </SubmitButton>
      </form>
    </div>
  )
}

export default TenantSignup

