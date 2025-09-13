"use server"

import { sdk } from "@lib/config"
import { setAuthToken } from "./cookies"

export type TenantSignupResponse = {
  success: string | null
  error: string | null
}

export async function tenantSignup(
  _currentState: unknown,
  formData: FormData
): Promise<TenantSignupResponse> {
  const password = formData.get("password") as string
  const userForm = {
    email: formData.get("email") as string,
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    phone: formData.get("phone") as string,
  }
  const subdomain = formData.get("subdomain") as string

  try {
    const token = await sdk.auth.register("user", "emailpass", {
      email: userForm.email,
      password,
      roles: ["tenant"],
    })

    const payload = JSON.parse(
      Buffer.from((token as string).split(".")[1], "base64").toString()
    ) as { actor_id?: string; entity_id?: string; sub?: string }

    const ownerId = payload.actor_id || payload.entity_id || payload.sub || ""

    await sdk.admin.user.update(ownerId, {
      first_name: userForm.first_name,
      last_name: userForm.last_name,
      phone: userForm.phone,
    })

    if (subdomain) {
      await sdk.client.fetch(`/store/tenants`, {
        method: "POST",
        body: { owner_id: ownerId, subdomain },
      })
    }

    const loginToken = await sdk.auth.login("user", "emailpass", {
      email: userForm.email,
      password,
    })

    await setAuthToken(loginToken as string)

    return { success: "Account created successfully", error: null }
  } catch (error: any) {
    return { success: null, error: error.toString() }
  }
}

