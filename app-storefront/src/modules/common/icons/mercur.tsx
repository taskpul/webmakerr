import React from "react"
import { IconProps } from "types/icon"

const Mercur: React.FC<IconProps> = ({ size = "32", ...attributes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      {...attributes}
    >
      <defs>
        <linearGradient
          id="mercur-gradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#2A0C6A" />
        </linearGradient>
      </defs>
      <path
        d="M6 6H12L16 13L20 6H26V26H20V17L16 24L12 17V26H6V6Z"
        fill="url(#mercur-gradient)"
      />
    </svg>
  )
}

export default Mercur
