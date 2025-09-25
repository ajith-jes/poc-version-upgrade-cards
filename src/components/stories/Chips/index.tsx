
import React, { FC } from 'react';

import { ChipsProps } from './index.interface';
import { Iconx } from '../Iconx';

/**
 * Primary UI component for user interaction
 */
export const Chips: FC<ChipsProps> = (_props) => {
  return (
    <div className='flex flex-wrap'>
      {_props.items.map((e, i) => <div key={i} 
        className='flex items-center bg-default text-buttonText p-1 px-3 bg-blue-600 rounded-md mr-2'
      >
        <span className='pr-2'>{e.label}</span>
        <span className='cursor-pointer' onClick={() => _props.onClose(e.id)}>
          <Iconx name='Close' size={12} color='#fff' />
        </span>
      </div>)}
    </div>
  );
};