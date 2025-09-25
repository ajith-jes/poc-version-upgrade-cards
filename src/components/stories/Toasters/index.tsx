
import React, { FC, useEffect, useMemo } from 'react';

import { ToasterMessageProps, ToastersProps } from './index.interface';
import { Icons } from '../Icons';




export const ToastersMessage: FC<ToasterMessageProps> = (_props) => {
  const toasterIcon = useMemo(() => {
    switch (_props.type) {
      case 'ERROR': return <Icons name="circle-x" size={24} color='#CA3521' />
      case 'WARNING': return <Icons name="warning" size={24}  color='#EE9500'/>
      case 'SUCCESS': return <Icons name="check-circle" size={24} color='#236227' />
      default:
        return <Icons name="check-circle" size={24} />
    }
  }, [_props.type])

  const className = useMemo(() => {
    switch (_props.type) {
      case 'ERROR': return 'border-[#CA3521] bg-[#FDEDEE]'
      case 'WARNING': return 'border-[#EE9500] bg-[#FEF7EA]'
      case 'SUCCESS': return 'border-[#92C69F] bg-[#E7FAE8]'
      default:
        return ''
    }
  }, [_props.type])


  setTimeout(() => {
    _props.close(_props);
  }, _props.duration);


  return (
    <div className={`flex items-center p-4 rounded-sm w-80 border ${className}`} >
      <span className='pr-3'>
        {toasterIcon}
      </span>
      <span>{_props.text}</span>
    </div>
  )
}


/**
 * Primary UI component for user interaction
 */
export const Toasters: FC<ToastersProps> = (_props) => {

  const activeClass = 'bst-toasters--active'
  
  return (
    <div style={{zIndex: !!_props.index ? _props.index : 1000}} className={`bst-toasters fixed bottom-[5px] right-[5px]
      ${_props.show ? activeClass : ''}`}>
      {_props.data.map((e, i) => (
        <ToastersMessage key={i} id={e.id} text={e.text} type={e.type} 
          duration={_props.duration} close={_props.close}
        />
      ))}
    </div>
  );
};