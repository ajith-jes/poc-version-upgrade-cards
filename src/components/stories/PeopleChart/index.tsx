
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';

import { PeopleChartProps } from './index.interface';
import { ChartPattern } from '../ChartPattern';


class Person {
  id: string
  name: string
  email: string
  child: Person[]
  reportsTo: string
  level: number
  role: string;
  constructor(id: string, name: string, email: string, child: Person[], reportsTo: string, level: number, role: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.child = child;
    this.reportsTo = reportsTo;
    this.level = level;
    this.role = role;
  }
}

type Card = {
  index: number
  currentUserID: any
}

const Card: FC<Card & Person> = (props) => {
  const height = 50;
  const width = 140;
  
  const y = useMemo(() => {
    return (props.level * 80) - 50
  }, [props])
  
  const yH = useMemo(() => {
    return (props.level * 80)
  }, [props])
  
  const x = useMemo(() => {
    return 180 * props.index
  }, [props])
  

  const childTranslate = useMemo(() => {
    if (props.child.length > 1) {
      return ((props.child.length * width) / 2) * -1
    } return 0
  }, [props.child])
  const childEle = useRef<SVGAElement>(null)

  const line = useMemo(() => {
    let yVal = y+height;
    let mx = x;
    let my = y + height + 10;
    let w = (width * props.child.length) - (width/2) + (props.child.length * 3)
    return `M${mx},${my} H${w}`;
  }, [props, childEle])

  const childPathTranslate = useMemo(() => {
    if (props.child.length > 1) {
      return (((props.child.length * width) / 2) * -1) + (width / 2)
    } return 0
  }, [props.child])

  const isCurrent = useMemo(() => {
    return props.currentUserID == props.id
  }, [props.currentUserID])

  return (
    <g>
      <g>
        <g>
          {
          !!props.child.length 
          ? props.child.length > 1
          ? <line x1={x+(width/2)} y1={y} x2={x+(width/2)} y2={y+height + 10} stroke='black'></line> 
          : <line x1={x+(width/2)} y1={y} x2={x+(width/2)} y2={yH+height + 10} stroke='black'></line> 
          : <line x1={x+(width/2)} y1={y} x2={x+(width/2)} y2={y-20} stroke='black'></line>
          }
          
          {props.child.length > 1
          ? <path  transform={`translate(${childPathTranslate} 0)`} d={line} stroke='#000' strokeWidth={1} />
          : ""}
          
        </g>
        <rect x={x} y={y} width={width} height={height} stroke='#c9c9c9' fill='#ffffff'>
          <title>{props.name}</title>
        </rect>
        <rect x={x} y={y} width={10} height={height} fill={isCurrent ? "#F58431" : "#00386B"} />
        <g transform='translate(0 8)'>
          <text x={x + 48} y={y + 14} fill="#000">{props.name}</text>
          <text x={x + 48} y={y + 30} fill="#000">{props.role}</text>
        </g>
        <g>
          <circle cx={x+28} cy={y+24} r="14" stroke="black" stroke-width="0" fill={isCurrent ? "#F58431" : "#00386B"} />
          <text x={x + 25} y={y + 28} fill="#fff" >{String(props.name)[0]}</text>
        </g>
      </g>
      {props.child.length ? <g transform={`translate(${childTranslate} 0)`} ref={childEle} id={props.id} >
        {props.child.map((e, i) => (
          <Card {...e} key={i} index={i} currentUserID={props.currentUserID} />
        ))}
      </g> : "" }
    </g>
  )
}


/**
 * Primary UI component for user interaction
 */
export const PeopleChart: FC<PeopleChartProps> = (_props) => {
  const [mounted, setMounted] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null)
  
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

  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    const compute = (item: Person, items: Person[]) => {
      item.child = items.filter((e) => e.reportsTo == item.id)
      return items.map((e) => {
        if (e.id == item.id) {
          return item
        }
        return e
      })
    }
    let da = _props.data.map((e: any) => {
      return new Person(e[0], e[1], e[5], [], e[3], e[4], e[2])
    });
    for (let i = 0; i < da.length; i++) {
      let e = da[i]
      da = compute(e, da)
    }
    setData(da.filter((e: any) => e.name != "AUTO" && !!!e.reportsTo))
  }, [_props.data])

  useEffect(() => {
    if (!!parentRef.current) {
      setMounted(true)
    }
  }, [])
 
  const viewBox = useMemo(() => {
    return `0 0 ${width + 1} ${height}`
  }, [width, height, parentRef, mounted])


  const [groupTranslate, setGroupTranslate] = useState({x: 0, y: 0});
  const [currentPosition, setCurrentPosition] = useState({x: 0, y: 0});
  const [canPan, setCanPan] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    if (canPan) {
      let cX = e.clientX
      let cY = e.clientY;
      let x = cX - currentPosition.x
      let y = cY - currentPosition.y

      setGroupTranslate({x: groupTranslate.x + x, y: groupTranslate.y + y})
      setCurrentPosition({x:cX, y:cY})
    }
    return
  }
  
  useEffect(() => {
    if(!!parentRef.current) {
      setGroupTranslate({
        x: (parentRef.current.scrollWidth / 2) - 100, 
        y: 40,
      })
    }
  }, [data])

  const onMouseDown = (e: MouseEvent) => {
    setCurrentPosition({x: e.clientX, y: e.clientY})
    setCanPan(true)
    return
  }

  const onMouseUp = () => {
    setCanPan(false)
    return
  }

  return (
      <div ref={parentRef}>
        <svg 
          style={{
            cursor: "move"
          }}
          height={height} 
          width={width}
          viewBox={viewBox}
          onMouseMove={(e: any) => onMouseMove(e)}
          onMouseDown={(e: any) => onMouseDown(e)}
          onMouseUp={(_: any) => onMouseUp()}
          onMouseLeave={(_: any) => onMouseUp()}
        >
          <g transform={`translate(${groupTranslate.x} ${groupTranslate.y})`} >
            {data.filter((_, i) => i == 0).map((e, i) => (
              <Card key={i} {...e} index={i} currentUserID={_props.currentUserID} />
            ))}
          </g>
        </svg>
      </div>
  );
};

