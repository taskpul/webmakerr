"use client"

import { Popover, Transition } from "@headlessui/react"
import { BarsThree, ArrowRightMini } from "@medusajs/icons"
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
  const [showSolutions, setShowSolutions] = useState(false)
  return (
    <div className="h-full flex small:hidden items-center">
      <Popover className="relative h-full">
        {({ close }) => (
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
              <Popover.Panel className="absolute right-0 top-full z-30 mt-2 w-screen max-w-lg rounded-rounded shadow-md border border-ui-border-base bg-white p-4 flex flex-col gap-y-4 text-ui-fg-base">
                <button
                  onClick={() => setShowSolutions((prev) => !prev)}
                  className="flex items-center justify-between hover:text-ui-fg-disabled"
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
                  <SolutionsMenu regions={regions} close={close} />
                )}
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

