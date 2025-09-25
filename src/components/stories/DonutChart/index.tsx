
import React, { FC, useMemo, useRef } from 'react';

import { DonutChartProps, DonutSlice, DonutSliceWithCommands } from './index.interface';


class CalculusHelper {
  getSlicesWithCommandsAndOffsets(
    donutSlices: DonutSlice[],
    radius: number,
    svgSize: number,
    borderSize: number
  ): DonutSliceWithCommands[] {
    let previousPercent = 0;
    return donutSlices.map((slice) => {
      const sliceWithCommands: DonutSliceWithCommands = {
        ...slice,
        commands: this.getSliceCommands(slice, radius, svgSize, borderSize),
        offset: previousPercent * 3.6 * -1,
      };
      previousPercent += slice.percent;
      return sliceWithCommands;
    });
  }

  getSliceCommands(
    donutSlice: DonutSlice,
    radius: number,
    svgSize: number,
    borderSize: number
  ): string {
    const degrees = this.percentToDegrees(donutSlice.percent);
    const longPathFlag = degrees > 180 ? 1 : 0;
    const innerRadius = radius - borderSize;

    const commands: string[] = [];
    commands.push(`M ${svgSize / 2 + radius} ${svgSize / 2}`);
    commands.push(
      `A ${radius} ${radius} 0 ${longPathFlag} 0 ${this.getCoordFromDegrees(
        degrees,
        radius,
        svgSize
      )}`
    );
    commands.push(
      `L ${this.getCoordFromDegrees(degrees, innerRadius, svgSize)}`
    );
    commands.push(
      `A ${innerRadius} ${innerRadius} 0 ${longPathFlag} 1 ${
        svgSize / 2 + innerRadius
      } ${svgSize / 2}`
    );
    return commands.join(' ');
  }

  getCoordFromDegrees(angle: number, radius: number, svgSize: number): string {
    const x = Math.cos((angle * Math.PI) / 180);
    const y = Math.sin((angle * Math.PI) / 180);
    const coordX = x * radius + svgSize / 2;
    const coordY = y * -radius + svgSize / 2;
    return [coordX, coordY].join(' ');
  }

  percentToDegrees(percent: number): number {
    return percent * 3.6;
  }
}


const EmptyBar: FC<DonutSlice & { radius: number, borderSize: number }> = (_props) => {
  return (
    <g>
      <circle cx={_props.radius} cy={_props.radius} r={_props.radius-(_props.borderSize/2)} stroke={_props.color} stroke-width={_props.borderSize} fill="transparent" />
    </g>
  )
}


/**
 * Primary UI component for user interaction
 */
export const DonutChart = (_props: DonutChartProps) => {

  const {
    data,
    radius,
    viewBox,
    borderSize,
    clickCb,
  } = _props

  const helper = new CalculusHelper();

  const haveSingleFullChart: any = useMemo(() => {
    return data.find((e) => e.percent == 100)
  }, [data])

  const emptyPar = {
    radius: _props.radius,
    borderSize: _props.borderSize,
    ...haveSingleFullChart
  }

  return (
    <div>
      <div >
         {!!haveSingleFullChart ?  
            <svg className='bst-donut' viewBox={'0 0 ' + viewBox + ' ' + viewBox}>
              <EmptyBar {...emptyPar} />
            </svg>
         : data && (
            <svg className='bst-donut' viewBox={'0 0 ' + viewBox + ' ' + viewBox}>
              {helper
                .getSlicesWithCommandsAndOffsets(data, radius, viewBox, borderSize)
                .map((slice, k) => (
                  <g 
                    key={k}
                    onClick={() => clickCb(slice)}
                  >
                    <path
                      fill={slice.color}
                      d={slice.commands}
                      transform={'rotate(' + slice.offset + ')'}
                    >
                      <title>({slice.label})</title>
                    </path>
                  </g>
                ))}
            </svg>
          )}
      </div>
    </div>
  );
};