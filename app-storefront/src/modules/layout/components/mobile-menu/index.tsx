"use client"

import { Popover, Transition } from "@headlessui/react"
import { BarsThree } from "@medusajs/icons"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const MobileMenu = () => {
  return (
    <div className="h-full flex small:hidden items-center">
      <Popover className="relative h-full">
        {({ open, close }) => (
          <>
            <Popover.Button
              data-testid="mobile-menu-button"
              className="h-full flex items-center focus:outline-none hover:text-ui-fg-base"
            >
              <BarsThree className="w-6 h-6" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute right-0 top-full z-30 mt-2 w-48 rounded-rounded shadow-md border border-ui-border-base bg-white p-4 flex flex-col gap-y-4 text-ui-fg-base">
                <LocalizedClientLink
                  href="/solutions"
                  onClick={close}
                  className="hover:text-ui-fg-disabled"
                  data-testid="mobile-solutions-link"
                >
                  Solutions
                </LocalizedClientLink>
                <LocalizedClientLink
                  href="/developer"
                  onClick={close}
                  className="hover:text-ui-fg-disabled"
                  data-testid="mobile-developer-link"
                >
                  Developer
                </LocalizedClientLink>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default MobileMenu

