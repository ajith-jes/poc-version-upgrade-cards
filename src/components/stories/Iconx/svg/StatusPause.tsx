import { FC } from "react";
import { Icon } from "../index.interface";

export const IconStatusPause: FC<Icon>  = ({ color="#EBB22D", size=24 }) => 
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8" fill={color} />
<path d="M10 9L10 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
<path d="M14 9L14 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
</svg>