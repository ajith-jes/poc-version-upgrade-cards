import React, { FC } from 'react';

import { LocalDateProps } from './index.interface';
import moment from "moment";
import style from './localdate.module.scss'

/**
 * Primary UI component for user interaction
 */
export const LocalDate: FC<LocalDateProps> = (_props) => {
  const date = moment.utc(_props.dateTime)
  const offset = _props.offset || moment().utcOffset()
  return (
    !!_props.dateTime 
      ? <span className={`${_props.className}`}>{date.utcOffset(offset).format(_props.format)}</span> 
      : <span>{!!_props.emptyPlaceholder ? _props.emptyPlaceholder : "N/A" }</span>
  );
};
