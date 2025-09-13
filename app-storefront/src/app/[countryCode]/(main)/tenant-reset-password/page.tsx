import { Metadata } from "next"
import TenantResetPassword from "@modules/tenant/components/reset-password"

export const metadata: Metadata = {
  title: "Reset tenant password",
  description: "Request a password reset and set a new password.",
}

export default function TenantResetPasswordPage() {
  return (
    <div className="w-full flex justify-start px-8 py-8">
      <TenantResetPassword />
    </div>
  )
}

