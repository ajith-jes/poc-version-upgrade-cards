
import React, { cloneElement, FC, } from 'react';

import { TabItemProps, TabItemTitleProps, TabProps } from './index.interface';
import style from './tab.module.scss'


export const TabItemTitle: FC<TabItemTitleProps> = (_props) => {
  const color = { '--color': _props.color } as React.CSSProperties;
  return (
    <div onClick={() => !_props.active ? !!_props.onClick ? _props.onClick() : null : null} key={_props.index}
      style={color}
      data-color={_props.color}
      className={`${style['bst-tab__header__item']} 
       ${_props.active ? style['bst-tab__header__item--active'] : ''}
        ${!!_props.className ? _props.className : ''
        }`}>
      <div className={style[`bst-tab__header__item__title`]} data-text={_props.title}></div>
      <div className={style[`bst-tab__header__item__value`]} data-color={_props.color} data-text={_props.value}></div>
    </div>
  )
}


export const TabItem: FC<TabItemProps> = (_props) => {
  return (
    <div className={style[`bst-tab-item`]}>
      {_props.children}
    </div>
  )
}


/**
 * Primary UI component for user interaction
 */
export const Tab = (_props: TabProps) => {
  const { selectedBasedOn = "index" } = _props;
  const _clickEvent = (v: any) => {
    _props.onChange(v)
  }
  const headers = _props.children.map((e: any, i) => {
    if (e) {
      if (e.props) {
        if (selectedBasedOn == "index") {
          return cloneElement(e.props.headComponent, { ...e.props.headComponent.props, active: _props.selected == i, index: i, onClick: () => _clickEvent(i) })
        } else {
          return cloneElement(e.props.headComponent, { ...e.props.headComponent.props, active: _props.selected == e.props.id, index: i, onclick: () => _clickEvent(e.props.id) })
        }
      }
    }
    return e
  })
  return (
    <div className={style[`bst-tab`]}>
      <div className={style[`bst-tab__header`]}>
        {headers.map((e) => e)}
      </div>
      {_props.children.filter((e: any, i) => {
        return selectedBasedOn == "index" ? i == _props.selected : e.props.id == _props.selected
      }).map((e, i) => <div key={i}>
        {e}
      </div>)}
    </div>
  );
};