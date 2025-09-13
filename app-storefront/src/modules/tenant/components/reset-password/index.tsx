"use client"

import { useActionState, useState } from "react"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { requestPasswordReset, resetPassword } from "@lib/data/customer"

const TenantResetPassword = () => {
  const [step, setStep] = useState<"request" | "reset">("request")
  const [requestMessage, requestAction] = useActionState(requestPasswordReset, null)
  const [resetMessage, resetAction] = useActionState(resetPassword, null)

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="tenant-reset-password-page">
      <h1 className="text-large-semi uppercase mb-6">Reset Password</h1>
      {step === "request" ? (
        <form
          className="w-full flex flex-col"
          action={async (formData) => {
            const res = await requestAction(formData)
            if (!res) {
              setStep("reset")
            }
          }}
        >
          <Input label="Email" name="email" type="email" required autoComplete="email" />
          <ErrorMessage error={requestMessage} data-testid="tenant-reset-request-error" />
          <SubmitButton className="w-full mt-6" data-testid="tenant-reset-request-button">
            Send reset email
          </SubmitButton>
        </form>
      ) : (
        <form className="w-full flex flex-col" action={resetAction}>
          <Input label="Token" name="token" required autoComplete="off" />
          <Input
            label="New password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
          />
          <ErrorMessage error={resetMessage} data-testid="tenant-reset-error" />
          <SubmitButton className="w-full mt-6" data-testid="tenant-reset-button">
            Reset password
          </SubmitButton>
        </form>
      )}
    </div>
  )
}

export default TenantResetPassword

