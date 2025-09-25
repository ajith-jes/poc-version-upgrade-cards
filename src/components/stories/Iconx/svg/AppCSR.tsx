import { FC } from "react";
import { Icon } from "../index.interface";

export const IconAppCSR: FC<Icon>  = ({ color='#AAA', size=24 }) => <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <mask id="path-1-inside-1_1509_1190" fill="#fff">
        <path d="M25.6 13.199A11.197 11.197 0 0014.133 2.003a11.2 11.2 0 00-10.92 11.73l2.614-.125a8.581 8.581 0 0111.715-8.395 8.582 8.582 0 015.441 7.986H25.6z"></path>
      </mask>
      <path
        stroke={color}
        strokeWidth="1.6"
        d="M25.6 13.199A11.197 11.197 0 0014.133 2.003a11.2 11.2 0 00-10.92 11.73l2.614-.125a8.581 8.581 0 0111.715-8.395 8.582 8.582 0 015.441 7.986H25.6z"
        mask="url(#path-1-inside-1_1509_1190)"
      ></path>
      <mask id="path-2-inside-2_1509_1190" fill="#fff">
        <path d="M18.937 26.307a11.2 11.2 0 006.728-6.323l-.637-.262a10.509 10.509 0 01-6.314 5.933l.223.652z"></path>
      </mask>
      <path
        stroke={color}
        strokeWidth="1.6"
        d="M18.937 26.307a11.2 11.2 0 006.728-6.323l-.637-.262a10.509 10.509 0 01-6.314 5.933l.223.652z"
        mask="url(#path-2-inside-2_1509_1190)"
      ></path>
      <path
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="0.8"
        d="M7.04 21.277v-8.799a.32.32 0 00-.32-.32H3.6a1.6 1.6 0 00-1.6 1.6v6.24a1.6 1.6 0 001.6 1.6h3.12a.32.32 0 00.32-.32zM21.76 21.2v-8.8a.32.32 0 01.32-.32h3.12a1.6 1.6 0 011.6 1.6v6.24a1.6 1.6 0 01-1.6 1.6h-3.12a.32.32 0 01-.32-.32z"
      ></path>
      <path
        fill={color}
        stroke={color}
        strokeWidth="0.8"
        d="M18.96 26.237a.48.48 0 11-.96 0 .48.48 0 01.96 0z"
      ></path>
    </svg>