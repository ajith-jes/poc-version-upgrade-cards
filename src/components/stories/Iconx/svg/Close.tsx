import React, { FC } from 'react';
import { Icon } from '../index.interface';
export const IconClose: FC<Icon>  = ({ color='black', size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20L20 4M4 4L20 20" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
