import { zodResolver } from "@hookform/resolvers/zod"
import { Alert, Button, Heading, Hint, Input, Text } from "@medusajs/ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import * as z from "zod"

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z.string().optional(),
})

export default function Register() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
    },
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    setServerError(null)

    const backendUrl =
      (import.meta.env.VITE_MEDUSA_ADMIN_BACKEND_URL as string | undefined) ??
      window.location.origin

    const res = await fetch(new URL("/admin/register", backendUrl).toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      let message = "Something went wrong"
      try {
        const body = await res.json()
        message = body.message ?? message
      } catch {}
      setServerError(message)
      return
    }

    navigate("/login")
  })

  const validationError =
    form.formState.errors.email?.message || form.formState.errors.password?.message

  return (
    <div className="bg-ui-bg-subtle flex min-h-dvh w-dvw items-center justify-center">
      <div className="m-4 flex w-full max-w-[360px] flex-col items-center">
        <Heading className="mb-1">Create admin account</Heading>
        <Text size="small" className="text-ui-fg-subtle text-center mb-4">
          Enter your details to register
        </Text>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-y-3">
          <Input
            autoComplete="email"
            placeholder="Email"
            className="bg-ui-bg-field-component"
            {...form.register("email")}
          />
          <Input
            type="password"
            autoComplete="new-password"
            placeholder="Password"
            className="bg-ui-bg-field-component"
            {...form.register("password")}
          />
          <Input
            placeholder="First name"
            className="bg-ui-bg-field-component"
            {...form.register("first_name")}
          />
          <Input
            placeholder="Last name"
            className="bg-ui-bg-field-component"
            {...form.register("last_name")}
          />
          <Input
            placeholder="Phone"
            className="bg-ui-bg-field-component"
            {...form.register("phone")}
          />

          {validationError && (
            <div className="text-center">
              <Hint variant="error">{validationError}</Hint>
            </div>
          )}
          {serverError && (
            <Alert
              className="bg-ui-bg-base items-center p-2"
              dismissible
              variant="error"
            >
              {serverError}
            </Alert>
          )}

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        <Link
          to="/login"
          className="txt-small text-ui-fg-base transition-fg hover:text-ui-fg-base-hover focus-visible:text-ui-fg-base-hover font-medium outline-none my-6"
        >
          Back to login
        </Link>
      </div>
    </div>
  )
}

