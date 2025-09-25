import { FC } from "react";
import { Icon } from "../index.interface";

export const IconCircleX: FC<Icon> = ({ size = 24, color = "#333333" }) =>  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
    >
      <circle
        cx="16"
        cy="16"
        r="14.5"
        stroke={color}
        strokeWidth="3"
      ></circle>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="3"
        d="M11.25 21.5l10-10.5M11 11.25l10.5 10"
      ></path>
    </svg>