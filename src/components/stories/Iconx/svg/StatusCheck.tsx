import { FC } from "react";
import { Icon } from "../index.interface";

export const IconStatusCheck: FC<Icon>  = ({ color='#A9A9A9', size=24 }) => 
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8" fill={color} />
<path d="M7.86816 12.3535L10.4985 14.6666L16.1348 9.06659" stroke="white" strokeWidth="1.50015" strokeLinecap="round"/>
</svg>
