import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import FacebookPixel from "@modules/analytics/components/facebook-pixel"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <FacebookPixel />
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
