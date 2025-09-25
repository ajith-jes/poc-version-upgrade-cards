import { FC } from "react";
import { Icon } from "../index.interface";

export const ChevronDown: FC<Icon> = ({ size = 24, color = "#333333" }) =>  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7L8.96811 11.8601C9.04708 11.9374 9.17373 11.936 9.25097 11.857L14 7" stroke={color} stroke-linecap="round"/>
</svg>