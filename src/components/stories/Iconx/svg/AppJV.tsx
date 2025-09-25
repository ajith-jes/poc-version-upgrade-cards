import { FC } from "react";
import { Icon } from "../index.interface";

export const IconAppJV: FC<Icon>  = ({ color='#AAA', size=24 }) => <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke={color}
        strokeWidth="0.8"
        d="M19.112 27.61V11.95a1.44 1.44 0 00-.812-1.295L8.511 5.908A1.18 1.18 0 018.36 3.87a3.488 3.488 0 013.507-.25l10.808 5.31c.493.242.805.744.805 1.293v16.025a.835.835 0 101.669-.016l-.31-16.9a1.44 1.44 0 00-.79-1.259L12.11 2.045a4.32 4.32 0 00-4.085.103l-.843.48A4.32 4.32 0 005 6.382v15.285c0 .534.295 1.024.767 1.273l11.232 5.942a1.44 1.44 0 002.113-1.273z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.08"
        d="M10.04 4.77l10.701 5.118c.5.24.82.745.82 1.3V27.97"
      ></path>
    </svg>