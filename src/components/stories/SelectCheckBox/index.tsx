
import React, { FC } from 'react';

import { SelectCheckBoxProps } from './index.interface';
import { Iconx } from '../Iconx';

/**
 * Primary UI component for user interaction
 */
export const SelectCheckBox: FC<SelectCheckBoxProps> = (_props) => {
    const { items, id, selected, model, setModel, selectOption } = _props;

    const _onChange = (ev: any) => {
        let value = !!selectOption ? JSON.parse(ev.target.value) : ev.target.value
        if (!ev.target.checked) {
            _props.onChange(selected.filter(e => {
                let leftValue = !!selectOption ? JSON.stringify(e) : e
                return leftValue != ev.target.value
            }))
        } else {
            _props.onChange([...selected, value])
        }
    }

    return (
        <div className='relative w-full'>
            <div onClick={() => setModel(!model)}>
               <button className="border rounded-sm border-solid border-gray-500 p-4 py-2 w-full text-left relative"> {
                    _props.selected.length > 0 
                    ? <span>
                        {!!_props.selectOption ? _props.selected.map((e) => e[_props.selectOption!.label]).join(',') : _props.selected.join(',')}
                        {model ? <span className='absolute right-2 top-2 bg-white p-1'>
                            <Iconx name='Close' size={14} />
                        </span> : "" }
                    </span>
                    : _props.label
                }</button>
            </div>
            {model ? <ul 
                className='bg-white shadow-md rounded-sm w-60 absolute top-[100%] z-10 max-h-48 overflow-y-auto'
            >
                {items.length > 0 ? items.map((e, i) => <li key={i}>
                    <label htmlFor={`multi-select-check-${id}-${i}`} className='flex p-2 py-1 cursor-pointer'>
                        <input 
                            checked={selected.map(e => JSON.stringify(e)).indexOf(JSON.stringify(e)) != -1}
                            type="checkbox" name={id} value={!!_props.selectOption ? JSON.stringify(e) : e} id={`multi-select-check-${id}-${i}`} 
                            onChange={(ev) => {
                                _onChange(ev)
                            }}
                        />
                        <span className='pl-1'>{!!_props.selectOption ? e[_props.selectOption.label] : e}</span>
                    </label>
                </li>) : ""}
            </ul> : ""}
        </div>

    )
};