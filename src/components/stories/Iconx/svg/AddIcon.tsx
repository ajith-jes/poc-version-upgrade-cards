import React, { FC } from 'react';
import { Icon } from '../index.interface';

export const IconAdd: FC<Icon>  = ({ color='black', size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z" fill={color} />
<path fillRule="evenodd" clipRule="evenodd" d="M11.9992 4.9502C12.441 4.9502 12.7992 5.30837 12.7992 5.7502V18.2502C12.7992 18.692 12.441 19.0502 11.9992 19.0502C11.5574 19.0502 11.1992 18.692 11.1992 18.2502V5.7502C11.1992 5.30837 11.5574 4.9502 11.9992 4.9502Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.94922 12.0002C4.94922 11.5584 5.30739 11.2002 5.74922 11.2002L18.2492 11.2002C18.691 11.2002 19.0492 11.5584 19.0492 12.0002C19.0492 12.442 18.691 12.8002 18.2492 12.8002L5.74922 12.8002C5.30739 12.8002 4.94922 12.442 4.94922 12.0002Z" fill="white"/>
</svg>
