import React from 'react'
import { FC } from "react";
import { Icon } from "../index.interface";

export const IconClose: FC<Icon> = ({size = 40, color = "black"}) => 
<svg width={size} height={size} viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M67.5614 71.8052L97.2618 101.506L102.919 95.8487L73.2183 66.1483L102.567 36.7996L96.9102 31.1428L67.5614 60.4915L37.154 30.084L31.4971 35.7409L61.9046 66.1483L31.1454 96.9075L36.8023 102.564L67.5614 71.8052Z" fill={color} />
</svg>

