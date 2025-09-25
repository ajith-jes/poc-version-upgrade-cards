import React, { FC } from 'react';
import { Icon } from '../index.interface';
export const IconOverdue: FC<Icon>  = ({ color='black', size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.83827 18.5097L11.1284 5.54947C11.5107 4.86982 12.4893 4.86982 12.8716 5.54947L20.1617 18.5097C20.5367 19.1763 20.055 20 19.2902 20H12H4.70985C3.94502 20 3.46331 19.1763 3.83827 18.5097Z" stroke={color} stroke-width="1.6" stroke-linecap="round"/>
<path d="M12 9V15" stroke={color} stroke-width="1.6" stroke-linecap="round"/>
<path d="M13 17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5C11 16.9477 11.4477 16.5 12 16.5C12.5523 16.5 13 16.9477 13 17.5Z" fill={color}/>
</svg>
