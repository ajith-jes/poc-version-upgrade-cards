import React, { FC } from 'react';
import { Icon } from '../index.interface';

export const IconEdit: FC<Icon> = ({ color = 'black', size = 24 }) => <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8.99988L13 4.99988M1.5 20.4999L4.88437 20.1239C5.29786 20.0779 5.5046 20.055 5.69785 19.9924C5.86929 19.9369 6.03245 19.8585 6.18289 19.7593C6.35245 19.6475 6.49955 19.5004 6.79373 19.2062L20 5.99988C21.1046 4.89531 21.1046 3.10444 20 1.99987C18.8955 0.895312 17.1046 0.895301 16 1.99987L2.79373 15.2062C2.49955 15.5004 2.35246 15.6475 2.24064 15.817C2.14143 15.9675 2.06301 16.1306 2.00751 16.3021C1.94496 16.4953 1.92198 16.7021 1.87604 17.1156L1.5 20.4999Z" stroke={color} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
