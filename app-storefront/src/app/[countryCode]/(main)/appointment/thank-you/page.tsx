import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You for Booking",
  description: "Appointment confirmation page",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AppointmentThankYou() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Thank you for booking!</h1>
      <p className="mt-4 text-base text-neutral-600">
        We’ve received your appointment request and sent a confirmation to your
        email.
      </p>
      <p className="mt-2 text-base text-neutral-600">
        If you need to make any changes, please contact our support team.
      </p>
    </div>
  )
}
