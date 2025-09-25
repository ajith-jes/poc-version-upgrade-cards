import React, { FC, useMemo } from 'react';
import { ToasterMessageProps, ToasterProps } from './index.interface';
import { Icons } from '../Icons';
import style from './toster.module.scss'

export const ToasterMessage: FC<ToasterMessageProps> = (_props) => {
  const toasterIcon = useMemo(() => {
    switch (_props.type) {
      case 'ERROR': return <Icons name="circle-x" size={24} color='#CA3521' />
      case 'WARNING': return <Icons name="warning" size={24} color='#EE9500' />
      case 'SUCCESS': return <Icons name="check-circle" size={24} color='#236227' />
      default:
        return <Icons name="check-circle" size={24} />
    }
  }, [_props.type])

  const className = useMemo(() => {
    switch (_props.type) {
      case 'ERROR': return style[`toast--error`]
      case 'WARNING': return style[`toast--warning`]
      case 'SUCCESS': return style[`toast--success`]
      default:
        return ''
    }
  }, [_props.type])


  setTimeout(() => {
    _props.close(false);
  }, _props.duration);


  return (
    <div className={`${style.toast} ${className}`} >
      <span className={style.end}>
        <span className='title'>
          {toasterIcon}

        </span>
        <span>{_props.text}</span>
      </span>

      <div className={style.close} onClick={() => _props.close(false)}>
        <Icons name='close' size={16} />
      </div>

    </div>
  )
}


/**
 * Primary UI component for user interaction
 */
export const Toaster: FC<ToasterProps> = (_props) => {



  return (
    <div style={{ zIndex: !!_props.index ? _props.index : 1000 }} className={`${style[`bst-toaster`]} ${_props.show ? style[`bst-toaster--active`] : ''}`}>
      {_props.show ? <ToasterMessage text={_props.text} type={_props.type}
        duration={_props.duration} close={_props.close}
      /> : ""}
    </div>
  );
};