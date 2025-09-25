import { FC } from "react";
import { Icon } from "../index.interface";

export const IconCorrespondence: FC<Icon>  = ({ color='black', size=24 }) => 
 <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M4.84 2.796c-.112 0-.204.1-.204.224v17.96c0 .124.092.224.205.224h14.318c.113 0 .205-.1.205-.224V8.184h-3.887V2.796H4.841zM3 3.02C3 1.905 3.824 1 4.84 1H15.6c.559 0 1.088.279 1.437.758l3.56 4.884c.26.358.403.803.403 1.262V20.98c0 1.115-.824 2.02-1.84 2.02H4.84C3.825 23 3 22.095 3 20.98V3.02z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.2"
        d="M7.09 11.102h9.205M7.09 14.47h9.205M7.09 17.837h9.205"
      ></path>
    </svg>