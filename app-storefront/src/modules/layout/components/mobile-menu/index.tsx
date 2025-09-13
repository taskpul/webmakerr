"use client"

import { Dialog, Transition } from "@headlessui/react"
import {
  BarsThree,
  ArrowRightMini,
  XMark,
} from "@medusajs/icons"
import { Fragment, useState } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SolutionsMenu from "../solutions-menu"
import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"

const MobileMenu = ({
  regions,
}: {
  regions: HttpTypes.StoreRegion[] | null
}) => {
  const [open, setOpen] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)

  return (
    <div className="flex h-full items-center small:hidden">
      <button
        data-testid="mobile-menu-button"
        className="flex h-full items-center focus:outline-none hover:text-ui-fg-base"
        onClick={() => setOpen(true)}
      >
        <BarsThree className="h-6 w-6" />
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog onClose={setOpen} className="relative z-40">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-ui-bg-base/60" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-150"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-150"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col gap-y-4 bg-ui-bg-base p-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <XMark className="h-6 w-6" />
                </button>
              </div>

              <button
                onClick={() => setShowSolutions((prev) => !prev)}
                className="flex w-full items-center justify-between py-4"
                data-testid="mobile-solutions-link"
              >
                <span>Solutions</span>
                <ArrowRightMini
                  className={clx(
                    "transition-transform duration-150",
                    showSolutions ? "-rotate-90" : ""
                  )}
                />
              </button>
              {showSolutions && (
                <SolutionsMenu regions={regions} close={() => setOpen(false)} />
              )}
              <LocalizedClientLink
                href="/pricing"
                onClick={() => setOpen(false)}
                className="block py-4"
                data-testid="mobile-pricing-link"
              >
                Pricing
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/developer"
                onClick={() => setOpen(false)}
                className="block py-4"
                data-testid="mobile-developer-link"
              >
                Developer
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/tenant-signup"
                onClick={() => setOpen(false)}
                className="block py-4"
                data-testid="mobile-tenant-signup-link"
              >
                Tenant Signup
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/account"
                onClick={() => setOpen(false)}
                className="block py-4"
                data-testid="mobile-account-link"
              >
                Account
              </LocalizedClientLink>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}

export default MobileMenu

