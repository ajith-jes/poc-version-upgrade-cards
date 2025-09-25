
import React, { FC } from 'react';


type Text = {
  /**
   * this describes the size of the text
   */
  className: 'display-1' | 'display-2' | 'display-3' | 'display-4' | 'display-5' | 'display-6' | 'default',
  /**
   * this will display in text content for the component
   */
  text: string
}
/**
 * this component is just for demonstration and testing purpose, we can just use the class to achieve the result
 */
export const Text: FC<Text> = ({ className = 'default', text = "default text"}) => {
  return (
    <div className={className}>
      {text}
    </div>
  );
};