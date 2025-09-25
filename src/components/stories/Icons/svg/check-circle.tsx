import { FC } from "react";
import { Icon } from "../index.interface";

export const IconCheckCircle: FC<Icon> = ({ size = 24, color = "#333333" }) => <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 28.8C8.942 28.8 3.2 23.058 3.2 16 3.2 8.942 8.942 3.2 16 3.2c7.058 0 12.8 5.742 12.8 12.8 0 7.058-5.742 12.8-12.8 12.8zm4.894-17.38a1.6 1.6 0 112.267 2.256l-7.683 7.717a1.525 1.525 0 01-2.158.002l-3.72-3.72a1.6 1.6 0 112.263-2.263L14.4 17.95l6.494-6.53z"
        clipRule="evenodd"
      ></path>
    </svg>