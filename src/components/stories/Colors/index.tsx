
import React, { FC } from 'react';


type Colors = {
  color: 
  'primary' | 
  'secondary' |
  'default' |
  'success' |
  'warning' |
  'error' | 
  'primaryFont' |
  'secondaryFont' |
  'footNoteFont' |
  'buttonText'
}

/**
 * this is just for demonstrate how the color scheme is configured
 * in our ui we don't need to use this component to achieve the result
 */
export const Colors: FC<Colors> = (_props) => {
  const className = () => `bst-colors bg-${_props.color}`
  return (
    <div data-testid="colors" className={`${className()}`}></div>
  );
};





