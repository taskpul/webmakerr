import { Suspense } from "react"
import Image from "next/image"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { ShoppingCart } from "@medusajs/icons"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="container flex-row items-center justify-between w-full h-full text-large-regular text-ui-fg-subtle pt-0">
          <div className="flex items-center h-full flex-1 basis-0">
            <LocalizedClientLink
              href="/"
              className="hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              <Image
                src="/Logo-Colour.svg"
                alt="Medusa Store logo"
                width={138}
                height={39}
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <SideMenu regions={regions} />
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/developer"
                data-testid="nav-developer-link"
              >
                Developer
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex items-center"
                  href="/cart"
                  data-testid="nav-cart-link"
                  aria-label="Cart"
                >
                  <ShoppingCart className="w-6 h-6" />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <Button asChild className="whitespace-nowrap">
              <LocalizedClientLink href="/start">Start for Free</LocalizedClientLink>
            </Button>
          </div>
        </nav>
      </header>
    </div>
  )
}
