
import React, { FC } from 'react';

import { ListItemActionProps, ListItemCaptionProps, ListItemProps, ListItemTitleProps, ListProps } from './index.interface';


/**
 * lite item will be each and individual list item
 */
export const ListItem: React.FC<ListItemProps> = (_props) => {
  const _onClick = () => {
    if (_props.onClick) {
      _props.onClick(`${_props.id}`)
    }
  }
  return (
    <li data-testid="listItem" className={`list__item ${_props.className}`} onClick={_onClick}>
      {_props.children}
    </li>
  )
}


/**
 * lite item title
 */
export const ListItemTitle: React.FC<ListItemTitleProps> = (_props) => {
  return (
    <div data-testid="listItemTitle" className={`list__item__title ${_props.className}`}>
      {_props.children}
    </div>
  )
}

/**
 * list item icon
 */
export const ListItemIcon: React.FC<ListItemTitleProps> = (_props) => {
  return (
    <div data-testid="listItemIcon" className={`list__item__icon ${_props.className}`}>
      {_props.children}
    </div>
  )
}

/**
 * list item action for list
 */
export const ListItemAction: React.FC<ListItemActionProps> = (_props) => {
  return (
    <div data-testid="listItemAction" className={`list__item__action ${_props.className}`}>
      {_props.children}
    </div>
  )
}

/**
 * smaller caption text
 */
export const ListItemCaption: FC<ListItemCaptionProps> = (_props) => {
  return (
    <div data-testid="listItemCaption" className={`list__item__caption ${_props.className}`}>
      {_props.children}
    </div>
  )
}

/**
 * Primary UI component for user interaction, this is a nested component please view the code for example implementation
 */
export const List: FC<ListProps> = (_props) => {
  return (
    <ul data-testid="list" className={`list ${_props.className}`}>
      {_props.children}
    </ul>
  );
};






