import React, { FC } from 'react';

import { LoaderProps } from './index.interface';

/**
 * Primary UI component for user interaction
 */
export const Loader: FC<LoaderProps> = ({ size = 50, height, center, color = "#0000ff"}) => {
  return (
    <span style={{
      height: !!height ? `${height}px` : size,
    }} className={`${center ? 'flex justify-center items-center w-full' : ''} scale-150`} >
      <svg version="1.1" id="L9" height={size} width={size}
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        x="0px" y="0px"
        viewBox="0 0 100 100" 
        enableBackground="new 0 0 0 0" xmlSpace="preserve">
          <path fill={color} d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="1s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      </svg>
    </span>
  );
}
