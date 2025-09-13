import { Metadata } from "next"
import TenantSignup from "@modules/tenant/components/signup"

export const metadata: Metadata = {
  title: "Tenant signup",
  description: "Create a new tenant account.",
}

export default function TenantSignupPage() {
  return (
    <div className="w-full flex justify-start px-8 py-8">
      <TenantSignup />
    </div>
  )
}

