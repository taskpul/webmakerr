import { Metadata } from "next"
import TenantLogin from "@modules/tenant/components/login"

export const metadata: Metadata = {
  title: "Tenant login",
  description: "Sign in to your tenant account.",
}

export default function TenantLoginPage() {
  return (
    <div className="w-full flex justify-start px-8 py-8">
      <TenantLogin />
    </div>
  )
}

