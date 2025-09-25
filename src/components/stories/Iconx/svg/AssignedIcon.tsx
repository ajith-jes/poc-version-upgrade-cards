import { FC } from 'react';
import { Icon } from '../index.interface';

export const IconAssigned:FC<Icon> = ({color="black",size=24}) =>  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="7" r="4.4" stroke="#ffffff" stroke-width="1.2" />
<path d="M17.875 20H3.26361C2.61844 20 2.14035 19.3955 2.34406 18.7833C4.13754 13.3938 8.44318 12 10.5 12C15.5807 12.4368 18.0312 16.1807 18.7793 18.8981C18.9383 19.4754 18.4738 20 17.875 20Z" stroke="#ffffff" stroke-width="1.2" fill={color}/>
<path d="M15.833 18.3667L16.6663 19.25L17.4997 18.4167L19.1663 16.75" stroke="#ffffff" stroke-linecap="round" fill={color} />
</svg>