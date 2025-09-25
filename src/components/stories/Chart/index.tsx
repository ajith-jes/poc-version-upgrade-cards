
import React, { FC, useCallback, useEffect, useMemo, useRef, useState, MouseEvent } from 'react';

import { BarChartPosition, BarChartVariantType, ChartProps } from './index.interface';
import { ChartPattern } from '../ChartPattern';


type BarContentProps = {
  i: number
  sessionWidth: number
  segmentHeight: number
  data: any[][]
  chartHeight: number
  chartWidth: number
  colors: string[]
  barGap?: number
  position?: BarChartPosition
}

const BarContent: FC<BarContentProps> = (_props) => {
  let gap = 24

  if (_props.barGap) {
    gap = _props.barGap
  }

  const xCoordinate = useCallback((i: any) => {
    return (_props.sessionWidth * i) + gap
  }, [_props.sessionWidth])

  const yCoordinate = useCallback((e: any) => {
    return _props.chartHeight - (e[1][1] * _props.segmentHeight)
  }, [_props.chartHeight, _props.segmentHeight])

  const width = useCallback((e: any, i: any) => {
    return _props.sessionWidth - (gap*2)
  }, [_props.sessionWidth])

  const height = useCallback((e: any, i: any) => {
    return Number(e[1][1]) * _props.segmentHeight
  }, [_props.segmentHeight])


  return (
    <g>
      {_props.data.map((e, k) =>
        <rect 
          key={k}
          data-label={e[1][1]}
          data-description={`${e[0]}: ${e[1][1]}`}
          data-index={_props.i}
          className={`${!!_props.position ? 'bst-vertical-animation' : 'bst-horizontal-animation'} transition hover:brightness-125 hover:cursor-default`}
          y={yCoordinate(e)}
          x={xCoordinate(_props.i)}
          width={width(e,k)}
          height={height(e,k)}
          fill={!!_props.colors.length ? _props.colors[k] : "blue"}
        ></rect>
      )}
    </g>
  )
}

type YAxisValueProps = {
  segmentHeight: number
  index: number
  text: string
}

const YAxisValue: FC<YAxisValueProps> = (_props) => {
  return (
    <text  dominantBaseline="end" textAnchor="end" x={40} y={
      (_props.index * _props.segmentHeight) 
      // + _props.segmentHeight
    }>{Math.round(Number(_props.text))}</text>
  )
}

type XAxisValueProps = {
  segmentWidth: number
  index: number
  text: string
  labelRotateAngle?: number
  labelYPosition?: number
  data: number[][]
  variant: BarChartVariantType
  xMaxValue: number
  width: number
  fontSize?: number
}

const XAxisValue: FC<XAxisValueProps> = (_props) => {
  const x = useMemo(() => {
    switch (_props.variant) {
      case 'bar':
        return (_props.index * _props.segmentWidth) + (_props.segmentWidth / 2)
      case 'dot':
        return (_props.index * _props.width / 10) - 5
      default:
        return (_props.index * _props.segmentWidth) + (_props.segmentWidth / 2)
    }
  }, [_props.index, _props.segmentWidth, _props.variant])
  const y = !!_props.labelYPosition ? _props.labelYPosition : 20

  return (
    <g className='relative'>
      <text 
        dominantBaseline={_props.variant == "bar" ? "middle" : "end" }
        textAnchor={_props.variant == "bar" ? "middle" : "end" }
        y={y} 
        x={x}
        transform={`rotate(${!!_props.labelRotateAngle ? _props.labelRotateAngle : 0},${x},${y}) translate(0 0)`}
        fontSize={_props.fontSize ? _props.fontSize : 14}
      >{_props.text}</text>
    </g>
  )
}

type LineGraphLineProps = {
  data: number[][]
  segmentXUnitValue: number
  segmentYUnitValue: number
  color?: string
  height: number
}

const LineGraphLine: FC<LineGraphLineProps> = ({ height, data,segmentXUnitValue, segmentYUnitValue, color }) => {
  const linePath = useMemo(() => {
    let plot: number[][] = []
    let path =  data[0].map((e: any, i) => {
      let description = (e[1][1])
      let y = height - (description * segmentYUnitValue)
      let label = e[1][0]
      let x = label * segmentXUnitValue

      plot.push([x,y,label, description])
      return `${!!i ? 'L' : 'M'} ${x} ${y}`
    }).join(' ')
    return {path, plot: plot}
  }, [
    data,
  ])
  return (
    <g>
      <path d={linePath.path} fill='none' 
      stroke-linejoin="round"
      stroke={color} className='hover:stroke-[4px] hover:opacity-75' />
      {linePath.plot.map((e, i) => (
        <circle 
        cx={e[0]} 
        cy={e[1]}
        r="3"
        data-label={Math.floor(e[2])}
        data-description={Math.floor(e[3])}
        data-index={i}
        stroke={color}
        fill={color}
        className='hover:stroke-[10px] cursor-default transition-[1s] hover:opacity-75'
        key={i} />
      ))}
    </g>
  )
}

type LineGraphProps = {
  data: any[][]
  width: number
  height: number
  segmentYUnitValue: number
  segmentXUnitValue: number
  colors: string[]
}

const LineGraph: FC<LineGraphProps> = (_props) => {
  return (
    <g>
      {_props.data.map((e, k) => (
        <LineGraphLine key={k} data={e} 
        color={_props.colors[k]}
        height={_props.height}
        segmentYUnitValue={_props.segmentYUnitValue} 
        segmentXUnitValue={_props.segmentXUnitValue} />
      ))}
    </g>
  )
}


/**
 * Primary UI component for user interaction
 */
export const Chart = (_props: ChartProps) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false);
  const { labels = [] } = _props

  const variant = useMemo(() => {
    return !!_props.variant ? _props.variant : "bar"
  }, [_props.variant])

  useEffect(() => {
    if (parentRef.current) {
      setMounted(true)
    }
  }, [parentRef])

  const width = useMemo(() => {
    if (_props.responsive) {
      if (!!parentRef) {
        return Number(parentRef.current?.scrollWidth) - 1
      }
    }
    return _props.width - 1
  }, [_props.width, parentRef, mounted])

  const height = useMemo(() => {
    if (_props.height) {
      return _props.height
    }
    return _props.height
  }, [_props.height, parentRef, mounted])

  const viewBox = useMemo(() => {
    return `0 0 ${width + 1} ${height}`
  }, [width, height, parentRef, mounted])
  
  const yAxisViewBox = useMemo(() => {
    return `0 0 ${50} ${height+50}`
  }, [width, height, parentRef, mounted])

  const segmentCount = () => {
    let count = 0;
    _props.data.forEach((e) => {
      if (count < e.length) {
        count = e.length
      }
    })
    return count
  }

  const numArr = (fNum: number, tNum: number) => {
    let val = []
    for (let i = fNum; i < tNum; i++) {
      val.push(i+1)
    }
    return val;
  }

  const extractMinMax = () => {
    let val = _props.data.map((e) => e.map((e) => {
      return e[1].map((el: any) => el).flat()
    })).flat().flat().sort((x,y) => x > y ? 1 : -1);
    let max = val[val.length - 1]
    let min = val[0]
    return [min, max]
  }

  const barDivisionHeight = useMemo(() => {
    const [_, max] = extractMinMax()
    return (height) / max
  }, [height, _props.data])



  const [label, setLabel] = useState({label: "", description: "", last: false});
  const [mouseCoordinated, setMouseCoordinated] = useState({x: 0, y: 0});
  const [mouseOver, setMouseOver] = useState(false);
  const svgElement = useRef<SVGSVGElement>(null)

  const onMouseMove = (e: MouseEvent) => {
    let target: any = e.target
    const rect = svgElement.current?.getBoundingClientRect();
    let x = e.clientX;
    let y = e.clientY;
    if (!!rect) {
      x-=rect.left;
      y-=rect.top;
    }
    setMouseCoordinated({x: x, y: y})
    if (mouseOver) {
      if (target.localName == "rect" || target.localName == "circle") {
        let dLabel = target.hasAttribute("data-label")
        setLabel({
          label: `${!!dLabel ? target.getAttribute("data-label") : ""}`,
          description: `${!!dLabel ? target.getAttribute("data-description") : ""}`,
          last: dLabel ? (Number(target.getAttribute("data-index")) + 1) > (_props.data[0].length / 2): false,
        })
      }
    }
  }

  const onMouseEnter = () => {
    setMouseOver(true)
  }

  const onMouseLeave = () => {
    setMouseOver(false)
    setLabel({
      label: "",
      description: "",
      last: false
    });
    setMouseCoordinated({x: 0, y: 0})
  }

  const yMaxValue = useMemo(() => {
    return _props.data[0].map((e) => {
      return e[1][1]
    }).sort((x,y) => x > y ? -1 : 1)[0]
  }, [_props.data])
  
  const xMaxValue = useMemo(() => {
    return _props.data[0].map((e) => {
      return e[1][0]
    }).sort((x,y) => x > y ? -1 : 1)[0]
  }, [_props.data])

  const segmentXUnitValue = useMemo(() => {
    let unitValue = width / xMaxValue
    return unitValue
  }, [_props.data, width, xMaxValue])

  const segmentYUnitValue = useMemo(() => {
    let unitValue = height / yMaxValue
    return unitValue
  }, [_props.data, height, yMaxValue])

  const yAxisSegmentCount = useMemo(() => {
    let base = 10;
    if (yMaxValue < 10) {
      base = yMaxValue
    }
    return base
  }, [height, _props.data, yMaxValue])

  const segmentHeight = useMemo(() => {
    const count = segmentCount();
    let base = 10;
    if (yMaxValue < 10) {
      base = yMaxValue
    }

    let size = Number(height) / base
    return size
  }, [height, _props.data])

  const segmentWidth = useMemo(() => {
    const count = segmentCount();
    let size = Number(width) / count
    switch (_props.variant) {
      case 'bar':
        return size
      case 'dot':
        return size
      default:
      return size
    }
  }, [width, _props.data, segmentXUnitValue])

  const xPlotReadingValue = useMemo(() => {
    let arr: number[] = []
    const val = xMaxValue / 10
    for (let i = 0; i <= 10; i++) {
      arr.push(Math.floor(val*i))
    }
    return arr
  }, [xMaxValue])

  const yAxisValue = useMemo(() => {
    let arr0: number[] = []
    let base = 10;
    if (yMaxValue < 10) {
      base = yMaxValue
    }
    let  val0 = yMaxValue / base;

    for (let i = 0; i <= base; i++) {
      let val = base - i
      arr0.push(val0*val)
    }
    return arr0
    // .sort((x,y) => Number(x) > Number(y) ? 1 : -1)
  }, [_props.data, height, yMaxValue])

  const labelTransition = useMemo(() => {
    let x = (mouseCoordinated.x+20) - (label.last ? ((String(label).length * 10) + 40) : 0)
    let y = (mouseCoordinated.y-60)
    if (mouseCoordinated.y < 60) {
      y += 70
    }
    return `translate(${x},${y})`
  }, [mouseCoordinated, label])

  return (
    <div 
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='flex'>
        <div className='w-[50px]'>
          <svg height={height+50} width={50} viewBox={yAxisViewBox}
          xmlns="http://www.w3.org/2000/svg"  style={{
          }}>
            <g style={{
              transform: `translateY(${30}px)`
            }}>
              {yAxisValue
              .map((e: any, k: any) => (
                <YAxisValue key={k} index={k} segmentHeight={segmentHeight} text={Number(e).toFixed(1)} />
              ))}
            </g>
          </svg>
        </div>
        <div ref={parentRef} className='flex-1 flex flex-col' 
        >
          <div className='h-[30px]'></div>
          <div className='flex-1'>
            {!!parentRef && mounted ? <svg 
            ref={svgElement}
            className='cursor-crosshair'
            height={height} width={width + 1} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
              

              {_props.bullsEye ? <g>
                <line 
                x1={mouseCoordinated.x} y1={0} 
                x2={mouseCoordinated.x} y2={height} 
                stroke={!!_props.backgroundPatternColor ? _props.backgroundPatternColor : '#8080804a'}  />
                <line 
                x1={0} y1={mouseCoordinated.y} 
                x2={width} y2={mouseCoordinated.y} 
                stroke={!!_props.backgroundPatternColor ? _props.backgroundPatternColor : '#8080804a'}  />
              </g> : ""}

              <ChartPattern width={width} height={height} segmentHeight={
                (height / yAxisSegmentCount)
              } segmentWidth={
                variant == "bar" ? segmentWidth : Math.floor(width / 10)
              } color={_props.backgroundPatternColor} />
              
              {
              variant == "bar" ? 
              <g>
                {_props.data[0].map((e, k) => (
                  <BarContent key={k} i={k} 
                  sessionWidth={segmentWidth} 
                  data={[e]} 
                  segmentHeight={barDivisionHeight}
                  colors={_props.colors}
                  chartHeight={height} 
                  barGap={_props.barGap}
                  chartWidth={width} />
                ))}
              </g> 
              : <LineGraph 
                colors={_props.colors}
                data={[_props.data]}  
                height={height}
                width={width}
                segmentXUnitValue={segmentXUnitValue}
                segmentYUnitValue={segmentYUnitValue}
              />
              }



                {!!label.label ? <g 
                transform={labelTransition} 
                >
                   <foreignObject x="0" y="0" width={(String(label).length * 10) + 6} height="60">
                    <div className='text-buttonText bg-[#000000b0] p-2 select-none'>
                      <div>{_props?.labelText} {label.label}</div>
                      {/* <div className='flex items-center'>
                        <div className='h-4 w-4' style={{backgroundColor: _props.colors[0]}}></div>
                        <div className='pl-2'>
                           {label.description}
                        </div>
                      </div> */}
                    </div>
                   </foreignObject>
                </g> : "" }






            </svg> : ""}




            <div className='h-[60px]'>
              <svg height={100} width={width} xmlns="http://www.w3.org/2000/svg">
                {_props.data[0].map((e, k) => (
                  <g className='relative' key={k} 
                    onMouseEnter={() => onMouseEnter()} 
                    onMouseOver={() => onMouseEnter()} 
                    onMouseOut={() => onMouseLeave()} 
                    onMouseLeave={() => onMouseLeave()} 
                  >
                    <XAxisValue fontSize={_props.labelYFontSize} width={width} labelYPosition={_props.labelYPosition} 
                    xMaxValue={xMaxValue} variant={_props.variant} data={e} index={k} 
                    segmentWidth={segmentWidth}

                    text={_props.variant == "bar" ? !!labels && labels.length ? typeof labels[k] != "undefined" 
                    ? labels[k] : e[0] : e[0] : xPlotReadingValue[k]} labelRotateAngle={_props.labelRotateAngle} />
                  </g>
                ))}
              </svg>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

