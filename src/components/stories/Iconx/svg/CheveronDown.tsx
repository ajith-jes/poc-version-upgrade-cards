import React, { FC } from 'react';
import { Icon } from '../index.interface';

export const IconChevronDown: FC<Icon>  = ({ color='black', size=24 }) => <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M3 8l8.02 8.281a1 1 0 001.414.023L21 8"
      ></path>
    </svg>

