import { Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Linkedin from "@modules/common/icons/linkedin"
import X from "@modules/common/icons/x"
import Youtube from "@modules/common/icons/youtube"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="container w-full gap-y-8 pt-12 pb-12">
        <div className="grid grid-cols-1 xsmall:grid-cols-3 items-center gap-y-6">
          <LocalizedClientLink
            href="/"
            className="flex items-center justify-self-center xsmall:justify-self-start"
          >
            <Image
              src="/Logo-Colour.svg"
              alt="Medusa Store logo"
              width={138}
              height={39}
            />
          </LocalizedClientLink>
          <nav className="flex items-center justify-center gap-x-6 justify-self-center">
            <LocalizedClientLink
              href="#"
              className="text-ui-fg-subtle hover:text-ui-fg-base txt-small"
            >
              About
            </LocalizedClientLink>
            <LocalizedClientLink
              href="#"
              className="text-ui-fg-subtle hover:text-ui-fg-base txt-small"
            >
              Features
            </LocalizedClientLink>
            <LocalizedClientLink
              href="#"
              className="text-ui-fg-subtle hover:text-ui-fg-base txt-small"
            >
              Contact
            </LocalizedClientLink>
            <a
              href="https://docs.medusajs.com"
              target="_blank"
              rel="noreferrer"
              className="text-ui-fg-subtle hover:text-ui-fg-base txt-small"
            >
              Docs
            </a>
            <a
              href="https://github.com/medusajs/nextjs-starter-medusa"
              target="_blank"
              rel="noreferrer"
              className="text-ui-fg-subtle hover:text-ui-fg-base txt-small"
            >
              GitHub
            </a>
          </nav>
          <div className="flex items-center gap-x-2 justify-self-center xsmall:justify-self-end">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-rounded bg-ui-bg-subtle text-ui-fg-muted hover:text-ui-fg-base"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-rounded bg-ui-bg-subtle text-ui-fg-muted hover:text-ui-fg-base"
            >
              <X className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-rounded bg-ui-bg-subtle text-ui-fg-muted hover:text-ui-fg-base"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col xsmall:flex-row items-center w-full justify-between gap-y-4 text-ui-fg-muted">
          <Text className="txt-compact-small text-center xsmall:text-left">
            © {new Date().getFullYear()} Mercur. All rights reserved.
          </Text>
          <div className="flex items-center gap-x-4 justify-center xsmall:justify-end">
            <LocalizedClientLink
              href="#"
              className="hover:text-ui-fg-base"
            >
              Cookie Settings
            </LocalizedClientLink>
            <LocalizedClientLink
              href="#"
              className="hover:text-ui-fg-base"
            >
              Privacy Policy
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
