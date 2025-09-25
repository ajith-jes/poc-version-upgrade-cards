import { FC } from "react";
import { Icon } from "../index.interface";

export const IconWarning: FC<Icon> = ({ size = 24, color = "#333333" }) =>  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        stroke={color}
        strokeWidth="3"
        d="M19.299 5.25l10.392 18a1.5 1.5 0 01-1.299 2.25H7.608a1.5 1.5 0 01-1.3-2.25l10.393-18c.577-1 2.02-1 2.598 0z"
      ></path>
      <path
        fill={color}
        d="M19.367 12.095l-.3 7.185h-2.175l-.3-7.185h2.775zm-1.35 11.025c-.45 0-.82-.13-1.11-.39-.28-.27-.42-.6-.42-.99 0-.4.14-.735.42-1.005.29-.27.66-.405 1.11-.405.44 0 .8.135 1.08.405.29.27.435.605.435 1.005 0 .39-.145.72-.435.99-.28.26-.64.39-1.08.39z"
      ></path>
    </svg>