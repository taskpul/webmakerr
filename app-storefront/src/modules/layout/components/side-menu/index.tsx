"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import {
  AcademicCap,
  Buildings,
  ChartBar,
  CommandLine,
  CurrencyDollar,
  DocumentText,
  Heart,
  Lifebuoy,
  Phone,
  User,
  UserGroup,
  ArrowRightMini,
} from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems: [string, string][] = [
  ["Solutions", "/solutions"],
  ["Developer", "/developer"],
  ["Home", "/"],
  ["Store", "/store"],
  ["Account", "/account"],
  ["Cart", "/cart"],
]

const teamSizeItems = [
  {
    title: "For Individuals",
    description: "Personal scheduling made simple",
    icon: User,
  },
  {
    title: "For Teams",
    description: "Collaborative scheduling for groups",
    icon: UserGroup,
  },
  {
    title: "For Enterprises",
    description: "Enterprise-level scheduling solutions",
    icon: Buildings,
  },
  {
    title: "For Developers",
    description: "Powerful features and integrations",
    icon: CommandLine,
  },
]

const useCaseItems = [
  { title: "Recruiting", icon: UserGroup },
  { title: "Sales", icon: CurrencyDollar },
  { title: "HR", icon: DocumentText },
  { title: "Education", icon: AcademicCap },
  { title: "Support", icon: Lifebuoy },
  { title: "Healthcare", icon: Heart },
  { title: "Telehealth", icon: Phone },
  { title: "Marketing", icon: ChartBar },
]

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

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
                <PopoverPanel className="absolute left-0 top-full z-30 w-screen max-w-3xl text-ui-fg-base mt-2 px-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="bg-white rounded-rounded shadow-md border border-ui-border-base p-6 flex flex-col gap-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <Text className="txt-compact-medium mb-4">
                          By team size
                        </Text>
                        <ul className="flex flex-col gap-4">
                          {teamSizeItems.map((item) => {
                            const Icon = item.icon
                            return (
                              <li key={item.title}>
                                <a
                                  href="#"
                                  className="flex items-start gap-4"
                                  onClick={close}
                                >
                                  <span className="flex h-12 w-12 items-center justify-center rounded-md border border-dashed border-ui-border-base">
                                    <Icon />
                                  </span>
                                  <span className="flex flex-col">
                                    <Text className="font-medium">
                                      {item.title}
                                    </Text>
                                    <Text className="text-ui-fg-subtle">
                                      {item.description}
                                    </Text>
                                  </span>
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <div className="md:col-span-2">
                        <Text className="txt-compact-medium mb-4">
                          By use case
                        </Text>
                        <div className="grid grid-cols-2 gap-4">
                          {useCaseItems.map((item) => {
                            const Icon = item.icon
                            return (
                              <a
                                key={item.title}
                                href="#"
                                className="flex items-center gap-4 p-2 rounded-md hover:bg-ui-bg-subtle"
                                onClick={close}
                              >
                                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-dashed border-ui-border-base">
                                  <Icon />
                                </span>
                                <Text className="font-medium">{item.title}</Text>
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6 border-t border-ui-border-base pt-6">
                      <ul className="flex flex-col sm:flex-row gap-4">
                        {SideMenuItems.map(([name, href]) => (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              className="hover:text-ui-fg-disabled"
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        ))}
                      </ul>
                      <div
                        className="flex justify-between items-center"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="txt-compact-small">
                        © {new Date().getFullYear()} Medusa Store. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
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
