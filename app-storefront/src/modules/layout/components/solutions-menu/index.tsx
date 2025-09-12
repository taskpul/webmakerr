"use client"

import {
  Buildings,
  CommandLine,
  User,
  UserGroup,
  ArrowRightMini,
} from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"
import { FC } from "react"

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

const SolutionsMenu: FC<{
  regions: HttpTypes.StoreRegion[] | null
  close: () => void
}> = ({ regions, close }) => {
  const toggleState = useToggleState()

  return (
    <div
      data-testid="nav-menu-popup"
      className="bg-white rounded-rounded shadow-md border border-ui-border-base p-6 flex flex-col gap-y-8"
    >
      <div>
        <Text className="txt-compact-medium mb-4">By team size</Text>
        <ul className="grid grid-cols-2 gap-4">
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
                    <Text className="font-medium">{item.title}</Text>
                    <Text className="text-ui-fg-subtle">{item.description}</Text>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
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
            <CountrySelect toggleState={toggleState} regions={regions} />
          )}
          <ArrowRightMini
            className={clx(
              "transition-transform duration-150",
              toggleState.state ? "-rotate-90" : ""
            )}
          />
        </div>
        <Text className="txt-compact-small">
          © 2025 Webmakerr. All rights reserved.
        </Text>
      </div>
    </div>
  )
}

export default SolutionsMenu
