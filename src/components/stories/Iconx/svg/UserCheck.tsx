import React, { FC } from 'react';
import { Icon } from '../index.interface';
export const IconUserCheck: FC<Icon>  = ({ color='black', size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="7" r="4.4" stroke={color} stroke-width="1.2"/>
<path d="M17.875 20H3.26361C2.61844 20 2.14035 19.3955 2.34406 18.7833C4.13754 13.3938 8.44318 12 10.5 12C15.5807 12.4368 18.0312 16.1807 18.7793 18.8981C18.9383 19.4754 18.4738 20 17.875 20Z" stroke={color} stroke-width="1.2"/>
<circle cx="17.5" cy="18" r="5" fill="white"/>
<circle cx="17.4987" cy="17.9997" r="3.66667" fill="white" stroke={color}/>
<path d="M15.832 18.3667L16.6654 19.25L17.4987 18.4167L19.1654 16.75" stroke={color} stroke-linecap="round"/>
</svg>
