
import React, { FC, HTMLAttributes, useMemo } from 'react';

import { ToolTipProps } from './index.interface';

/**
 * Primary UI component for user interaction
 */
export const ToolTip: FC<ToolTipProps & HTMLAttributes<HTMLSpanElement>> = (_props) => {

  const direction = useMemo(() => {
    if (!!!_props.direction) {
      return `bst-ui-tooltip__data--top`
    }

    const dat = {
      "TOP": "top",
      "BOTTOM": "bottom",
      "LEFT": "left",
      "RIGHT": "right",
    }

    return `bst-ui-tooltip__data--${dat[_props.direction]}`
  }, [_props])

  return (
    <span {..._props} className={`bst-ui-tooltip ${_props.className}`}>
      <span className={`bst-ui-tooltip__data ${_props.inline ? 'bst-ui-tooltip__data--inline' : ''} ${direction}`}>{_props.tooltip}</span>
      {_props.children}
    </span>
  );
};