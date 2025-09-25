
import React from 'react';

import { AppDrawerProps } from './index.interface';
import classNames from 'classnames';

/**
 * Primary UI component for user interaction
 */
export const AppDrawer = (_props: AppDrawerProps) => {
  return (
      <nav className={`bst-app-drawer`}>
        <ul className='bst-app-drawer__ul'>
          {_props.data.map((e: any, k) => <li key={k}
            className={classNames({
              "bst-app-drawer__ul__li flex flex-col items-center ": true,
              "bst-app-drawer__ul__li--active": e.active(e)
            })}
            onClick={() => !!e.onClick ? e.onClick(e) : null} >
            <div className={classNames({
              "bst-app-drawer__ul__li__logo flex justify-center items-center": true,
            })}>
              {!!e.icon ? <img 
                src={e.active(e) ? e.active_icon : e.icon} 
                alt="img" 
                height={30} width={30}
              /> : ""}
            </div>
            <span>{e.label}</span>
          </li>)}
        </ul>
      </nav>
  );
};