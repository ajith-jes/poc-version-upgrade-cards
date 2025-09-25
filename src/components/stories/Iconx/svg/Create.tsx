import React, { FC } from 'react';
import { Icon } from '../index.interface';
export const IconCreate: FC<Icon>  = ({ color='black', size=24 }) => <svg width={size} height={size} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.36719 13.7773H24.1872" stroke={color} stroke-width="1.6" stroke-linecap="round"/>
<path d="M13.7773 3.36719V24.1872" stroke={color} stroke-width="1.6" stroke-linecap="round"/>
</svg>
