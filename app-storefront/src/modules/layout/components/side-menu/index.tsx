"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { Fragment } from "react"

import { HttpTypes } from "@medusajs/types"
import SolutionsMenu from "../solutions-menu"

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base hover:bg-ui-bg-subtle"
                >
                  Solutions
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="absolute right-0 top-full z-30 w-screen max-w-lg text-ui-fg-base mt-2 px-2">
                  <SolutionsMenu regions={regions} close={close} />
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
