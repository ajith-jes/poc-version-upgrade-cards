import React, { FC, useEffect, useState } from 'react';

import { DropdownProps } from './index.interface';

/**
 * Primary UI component for user interaction
 */
export const Dropdown: FC<DropdownProps> = ({
  dropDownSide = "left", label, children, model, onModelClose
}) => {
  return (
    <div className={`bst-dropdown ${model ? 'bst-dropdown--active' : ''} bst-dropdown--${dropDownSide}`}>
      <span className='bst-dropdown__trigger' onClick={() => onModelClose(!model)}>
        {label}
      </span>
      <div className="bst-dropdown__content">
        {children}
      </div>
      <div className="bst-dropdown__close" onClick={() => onModelClose(false)}></div>
    </div>
  );
};

