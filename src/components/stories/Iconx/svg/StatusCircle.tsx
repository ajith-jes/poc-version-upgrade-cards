import { FC } from "react";
import { Icon } from "../index.interface";

export const IconStatusCircle: FC<Icon>  = ({ color="#2FB67E", size=24 }) =>
<svg width={color} height={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="6.5" stroke={color} stroke-width="3"/>
</svg>