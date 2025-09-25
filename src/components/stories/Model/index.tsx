import React, { FC } from 'react';
import { ModelProps } from './index.interface';
import style from './model.module.scss'
import { XMarkIcon } from '@heroicons/react/24/solid';


export const CloseModel = ({close}: {close: (val: boolean) => void}) => 
    <span className={style.closeModel}
    onClick={() => close(false)}>
        {/* <Icons name="close" size={20}  /> */}
        <XMarkIcon height={25} />
    </span>

/**
 * Primary UI component for user interaction
 */
export const Model: FC<ModelProps> = ({ children, model, close, hideClose, closeClass, persist}) => {
    return (
        model ? <div className={style[`bst-model`]}>
            <div className={style[`bst-model__content`]}>
                <div className="relative" style={{position: "relative"}}>
                    {children}
                </div>
            </div>
            <div onClick={() => !!persist ? {} : close(false)} 
            className={style[`bst-model__close`]}></div>
        </div> : <></>
    )
}



