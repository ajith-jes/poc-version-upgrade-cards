
import React from 'react'
import { FC } from "react";
import { Icon } from "../index.interface";

export const IconWork: FC<Icon> = ({color = "black", size = 24}) => 
<svg width={size} height={size} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 9.5C20.5 8.11929 21.6193 7 23 7H42C43.3807 7 44.5 8.11929 44.5 9.5V16H20.5V9.5ZM17.5 16V9.5C17.5 6.46243 19.9624 4 23 4H42C45.0376 4 47.5 6.46243 47.5 9.5V16H59.5C62.5376 16 65 18.4624 65 21.5V54.5C65 57.5376 62.5376 60 59.5 60H5.5C2.46243 60 0 57.5376 0 54.5V21.5C0 18.4624 2.46243 16 5.5 16H17.5ZM3 21.5C3 20.1193 4.11929 19 5.5 19H59.5C60.8807 19 62 20.1193 62 21.5V54.5C62 55.8807 60.8807 57 59.5 57H5.5C4.11929 57 3 55.8807 3 54.5V21.5Z" fill={color} />
</svg>

