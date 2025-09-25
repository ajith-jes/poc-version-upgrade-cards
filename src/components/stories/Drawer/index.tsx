
import React, { FC, useCallback } from 'react';

import { DrawerProps } from './index.interface';
import { Iconx } from '../Iconx';

/**
 * Primary UI component for user interaction
 */
export const Drawer: FC<DrawerProps> = (_props) => {
  const { wrapper } = _props;
  const active = useCallback((path: string[]) => path.includes(_props.pathName), [_props.pathName])

  const element = (e: any) => {
    return <div className={`flex justify-center items-center flex-col`} >
      <span className='scale-75'>
        {e.icon(active(e.activeOn))}
      </span>
      <span className={`${active(e.activeOn) ? '!text-orange-500' : 'text-[#A9A9A9]'} text-[10px]`}>{e.label}</span>
    </div>
  } 

  return (
    <aside className='bst-layout-1__drawer h-full py-2  sticky top-0'>
        <ul>
            {!!_props.pathName.includes("/profile") ? <li>
                <div onClick={() => _props.onBack()} className='flex justify-center'>
                  <span ><Iconx name="BackArrow" color="#1F6EE2" /></span>
                  <span className='px-2 font-[500] text-[#1F6EE2]'>back</span>
                </div>
            </li> : ""}
            {_props.data.filter((e) => true
            ).map((e, key) => (
              <li key={key} className={
                `bst-drawer-li my-4 text-[#A9A9A9] border-l-4 border-solid border-transparent ${
                active(e.activeOn) ? 'bst-drawer-li--active' : ''}`}>
                  {wrapper(element(e), e)}
              </li>
            ))}
        </ul>
    </aside>
  );
};