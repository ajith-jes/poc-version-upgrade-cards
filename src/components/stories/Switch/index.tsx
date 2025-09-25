
import React, { FC, useState } from 'react';
import style from './Switch.module.scss'
import { SwitchProps } from './index.interface';

export const SwitchDemo: FC<SwitchProps> = (_props) => {
  const [mode, setMode] = useState(_props.value);
  return (
    <div>
      <Switch value={mode} onChange={setMode} id={'switch'} />
    </div>
  )
}

/**
 * Primary UI component for user interaction
 */
export const Switch = (_props: SwitchProps) => {
  return (
    <label className={`${style["bst-switch"]} ${_props.value ? style["bst-switch--active"] : ''}`} htmlFor={_props.id} data-testid={'switch'}>
      <input 
        className={`${style['bst-switch__input']}`} 
        type="checkbox" id={_props.id} checked={_props.value} 
        defaultChecked={_props.value} 
        onChange={(e) => _props.onChange(e.target.checked)}
      />
      <span className={style['bst-switch__handle']}></span>
    </label>
  );
};


