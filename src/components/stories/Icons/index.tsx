
import React from 'react';

import { Icon, IconsProps } from './index.interface';
import { IconClose } from './svg/close';
import { IconAdd } from './svg/add';
import { IconWork } from './svg/work';
import { IconGrowth } from './svg/growth';
import { IconList } from './svg/list';
import { IconBell } from './svg/bell';
import { IconQuestion } from './svg/question';
import { IconAccount } from './svg/account';
import { IconSearch } from './svg/search';
import { IconMail } from './svg/mail';
import { IconEye } from './svg/eye';
import { IconEye2 } from './svg/eye2';
import { IconCheck } from './svg/check';
import { ChevronDown } from './svg/chevron-down';
import { IconCheckCircle } from './svg/check-circle';
import { IconCircleX } from './svg/circle-x';
import { IconWarning } from './svg/warning';
import { IconEdit } from '../Iconx/svg/EditIcon';

const componentMap = (name: string, props: Icon) => {
  switch (name) {
    case "add":
      return <IconAdd {...props} />
    case "close":
      return <IconClose {...props} />
    case "work":
      return <IconWork {...props} />
    case "growth":
      return <IconGrowth {...props} />
    case "list":
      return <IconList {...props} />
    case "bell":
      return <IconBell {...props} />
    case "question":
      return <IconQuestion {...props} />
    case "account":
      return <IconAccount {...props} />
    case "search":
      return <IconSearch {...props} />
    case "mail":
      return <IconMail {...props} />
    case "eye":
      return <IconEye {...props} />
    case "eye2":
      return <IconEye2 {...props} />
    case "check":
      return <IconCheck {...props} />
    case "chevron-down":
      return <ChevronDown {...props} />
    case "check-circle":
      return <IconCheckCircle {...props} />
    case "circle-x":
      return <IconCircleX {...props} />
    case "warning":
      return <IconWarning {...props} />
      case "edit":
        return <IconEdit {...props}/>
    default:
      return <span></span>
  }
}


/**
 * Primary UI component for user interaction
 */
export const Icons = (_props: IconsProps) => {
  return (
    componentMap(_props.name, _props)
  );
};