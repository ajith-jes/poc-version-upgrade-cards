import { FC } from "react";
import { Icon } from "../index.interface";

export const IconAppCard: FC<Icon>  = ({ color='#AAA', size=24 }) =>     <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke={color}
        strokeWidth="0.8"
        d="M1 10.48V8.56A2.56 2.56 0 013.56 6H26.6a2.56 2.56 0 012.56 2.56v1.92M1 16.495v4.864a2.56 2.56 0 002.56 2.56H26.6a2.56 2.56 0 002.56-2.56v-4.864"
      ></path>
      <path
        stroke={color}
        strokeWidth="0.8"
        d="M1.4 11.518H28.759999999999998V14.814H1.4z"
      ></path>
      <path
        stroke={color}
        strokeWidth="0.8"
        d="M3.816 18.143L12.008 18.143"
      ></path>
      <path
        stroke={color}
        strokeWidth="0.8"
        d="M3.816 20.193L12.008 20.193"
      ></path>
    </svg>