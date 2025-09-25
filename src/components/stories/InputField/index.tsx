
import React, { FC, useState, useMemo } from 'react';

import { InputFieldProps } from './index.interface';
import classNames from 'classnames';
import { Icons } from '../Icons';
import { Field, ErrorMessage } from 'formik';
import style from './InputField.module.scss'


/**
 * Primary UI component for user interaction
 */
export const InputField: FC<InputFieldProps> = (_props) => {
  const inputProps = {..._props};
  delete inputProps.appendIconAction;
  delete inputProps.prependIconAction;
  delete inputProps.label;
  const [show, setShow] = useState(false)

  const _computedProps = {
      ...inputProps,
      className:`${style['bst-input-field__input']}
        ${!!style[`${_props.className}`] ? style[`${_props.className}`] : ''}
        ${!!_props.appendIcon ? style['bst-input-field__input--append'] : ''}
        ${!!_props.prependIcon ? style['bst-input-field__input--prepend'] : ''} 
        ${_props.block ? style['w-full']: "" }
      `
  }

  const inputType = useMemo(() => {
    if (_props.type == "password") {
      return !show ? "password" : "text"
    }
    return _props.type
  }, [_props.appendIcon, _props.type, show])

  const appendIcon = useMemo(() => {
    if (_props.appendIcon || _props.type == "password") {
      if (_props.type == "password") {
        return inputType == "password" ? "eye" : "eye2"
      } return _props.appendIcon
    } return _props.appendIcon
  }, [_props.appendIcon, _props.type, show])

  const _appendIconAction = () => {
    
    if (_props.type == "password") {
      setShow(!show)
    } else {
      if (_props.appendIconAction) {
        _props.appendIconAction(_props)
      }
    }
  }

  return (
    <label htmlFor={_props.id} className={
      classNames({
        [style['bst-input-field']]: true,
        [`${_props.wrapperClass}`]: !!_props.wrapperClass,
        [style['w-full']]: _props.block,
        [style['bst-input-field--plain']]: _props.noPadding,
      })
    } >
 
      {!_props.noPadding ? <span 
      className={
        classNames({
          [style['bst-input-field__label']]: true,
          [`${_props.labelClass}`]: !!_props.labelClass,
        })
      }
      >
        {/* {_props.required ? <span className='text-error absolute top-[-2px] right-[-6px]'>*</span> : ""} */}
        {_props.label}
      </span> : "" }
      { _props.formField ? <Field {..._computedProps} /> : <input {..._computedProps} type={inputType} />}

      {/* { _props.formField ? <Field {..._computedProps} /> : <input {..._computedProps} type={inputType} onChange={(e) => {
        if (/ /g.test(e.target.value)) {
          
        }
      }} />} */}

      {!!_props.prependIcon ? <span className={classNames({
        [style['bst-input-field__icon']]: true,
        [style['bst-input-field__icon--prepend']]: true,
      })}>
        <Icons size={24} name={_props.prependIcon}></Icons>
      </span> : "" }
      {!!appendIcon ? <span onClick={_appendIconAction} className={classNames({
        [style['bst-input-field__icon']]: true,
        [style['bst-input-field__icon--append']]: true,
      })} >
        <Icons size={24} name={appendIcon}></Icons>
      </span> : "" }

      { !!_props.error ? 
        <span className={style["bst-input-field__error"]} >{_props.error}</span>
       : "" }

    </label>
  );
};