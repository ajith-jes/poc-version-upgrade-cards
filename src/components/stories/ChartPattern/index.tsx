
import React from 'react';

import { ChartPatternProps } from './index.interface';

/**
 * Primary UI component for user interaction
 */
export const ChartPattern = ({ segmentHeight, segmentWidth, height, width, color }: ChartPatternProps) => {
  return (
    <g>
      <defs>
        <pattern id="grid" x="0" y="0" width={segmentWidth} height={segmentHeight} viewBox={`0 0 ${segmentWidth} ${segmentHeight}`} patternUnits="userSpaceOnUse">
          <path 
          d={`M ${segmentWidth} 0 L 0 0 0 ${0}`} 
          fill="none" stroke={color ? color : '#8080804a'} strokeWidth="1"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="url(#grid)" />
      <line x1={0} y1={height-1} x2={width} y2={height-1} stroke={color ? color : '#8080804a'} />
      {/* <line x1={width-1} y1={0} x2={width-1} y2={height-1} stroke={color ? color : '#8080804a'} /> */}
    </g>
  );
};