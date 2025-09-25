import { FC } from "react";
import { Icon } from "../index.interface";

export const IconAudit:FC<Icon> = ({color="white",size=24}) =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 26 25"
    >
        <path
            stroke="#1F6EE2"
            strokeWidth="1.5"
            d="M21.338 15.177c0 2.872-2.311 5.191-5.152 5.191-2.84 0-5.152-2.32-5.152-5.19 0-2.872 2.311-5.191 5.152-5.191s5.152 2.319 5.152 5.19z"
            fill={color}
        ></path>
        <path
            stroke="#1F6EE2"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M0.75 -0.75L6.957 -0.75"
            transform="scale(.99672 1.00327) rotate(45 -13.685 33.433)"
            fill={color}
        ></path>
        <path
            stroke="#1F6EE2"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M13.744 15.817l1.259 1.095 3.638-3.47M16.99 7.177V2a1 1 0 00-1-1H2a1 1 0 00-1 1v18.591a1 1 0 001 1h8.8M3.58 6.148h10.83M3.58 11.296h5.673M3.58 16.444h4.125"
            fill={color}
        ></path>
    </svg>