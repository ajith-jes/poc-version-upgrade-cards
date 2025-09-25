import { FC } from "react";
import { Icon } from "../index.interface";

export const IconUserCheckStatus: FC<Icon>  = ({ color='#F58431', size=24 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8" fill={color} />
<path d="M11.8448 15.4996L7.5 15.4997C7.5 14.5997 8.12069 12.9496 9.67241 12.1996C10.5 11.7996 12.5897 11.2996 14.3276 12.4996" stroke="white" strokeWidth="0.7"/>
<path d="M13.707 15.5H15.8794H16.1898C16.1378 15.1485 15.9815 14.575 15.6816 14" stroke="white" strokeWidth="0.7"/>
<path d="M11.2246 13.6998L12.7763 15.1998L16.5005 11.2998" stroke="white" strokeWidth="0.7" strokeLinecap="round"/>
<path d="M14.0123 9.01736C14.0123 10.2166 13.0474 11.1847 11.8623 11.1847C10.6772 11.1847 9.7123 10.2166 9.7123 9.01736C9.7123 7.81807 10.6772 6.85 11.8623 6.85C13.0474 6.85 14.0123 7.81807 14.0123 9.01736Z" stroke="white" strokeWidth="0.7"/>
</svg>
