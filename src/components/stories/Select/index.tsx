// import React, { useState, useRef, useEffect } from 'react';
// import styles from './select.module.scss';

// interface Option {
//   label: string;
//   value: string;
// }

// interface Props {
//   items: Option[] | string[];
//   selected?: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
//   className?: string;
//   backgroundColor?: string;
//   textColor?: string;
// }

//  const Select: React.FC<Props> = ({
//   items,
//   selected,
//   onChange,
//   placeholder = 'Select an option',
//   className = '',
//   backgroundColor = '#1d4ed8', // Default background
//   textColor = '#ffffff',       // Default text color
// }) => {
//   const [open, setOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   const normalizedItems: Option[] = items.map((item) =>
//     typeof item === 'string' ? { label: item, value: item } : item
//   );

//   const selectedLabel = normalizedItems.find((item) => item.value === selected)?.label;

//   const toggleDropdown = () => setOpen((prev) => !prev);

//   const handleClickOutside = (e: MouseEvent) => {
//     if (ref.current && !ref.current.contains(e.target as Node)) {
//       setOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className={`${styles.customSelect} ${className}`} ref={ref}>
//       <button
//         type="button"
//         className={styles.selectButton}
//         onClick={toggleDropdown}
//         style={{ backgroundColor, color: textColor }}
//       >
//         {selectedLabel || placeholder}
//         <span className={styles.arrow}>▼</span>
//       </button>

//       {open && (
//         <div className={styles.options}>
//           {normalizedItems.map((item) => (
//             <div
//               key={item.value}
//               className={`${styles.option} ${item.value === selected ? styles.selected : ''}`}
//               onClick={() => {
//                 onChange(item.value);
//                 setOpen(false);
//               }}
//             >
//               {item.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Select

import React, { useCallback, useMemo, useState } from 'react';
// import './Select.scss';
import { SelectProps } from './index.interface';
import { FC, useRef, } from "react"
import { Iconx } from '../Iconx';
import style from './select.module.scss'


export const Select: FC<SelectProps> = (_props) => {
    const hide = useRef<HTMLButtonElement>(null);
    const _onSelect = (e: any) => {
        _props.onChange(e)
        hide.current?.focus()
    }

    function makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const id = useMemo(() => {
        return makeid(10) + "-" + Date.now()
    }, [_props])

    const label = useMemo(() => {
        if (!!_props.selected) {
            return !!_props.selected?.label ? _props.selected?.label : String(_props.selected).replace(/\-/g, " ")
        }
        if (!!_props.label) {
            return _props.label
        }
        return "Please Select"
    }, [_props])

    const [search, setSearch] = useState("")

    const searchElement = useCallback((data: any[]) => {
        if (!_props.searchable) {
            return data
        }
        return data.filter((e) => JSON.stringify(e).toLowerCase().indexOf(String(search).toLowerCase()) != -1)
    }, [_props.items, search])

    return (
        <div className={style[`bst-select`]} >
            <button type={"button"} style={{ width: "0px", height: "0px" }} ref={hide} id={id} ></button>
            <button type={"button"} className={`${style[`bst-select__button`]} ${_props.buttonClass}`}  style={{textAlign:"left"}}>
                <span  style={{display:"flex",alignItems:"center", justifyContent:"space-between",textTransform:"capitalize"}}>
                    <span >
                        {label}
                    </span>
                    <Iconx size={18} name='ChevronDown' color={_props.iconColor} />
                </span>
                <span className={`${style[`bst-select__list`]} ${!!_props.listClass ? _props.listClass : ''}`} style={{textDecoration:"none"}}>
                    {_props.searchable ? <div style={{textTransform:"capitalize",textDecoration:"none"}}>
                        <input 
                        onChange={(e) => setSearch(e.target.value)}
                        type="search" name="search" 
                        placeholder='Search...'
                         className={style[`bst-select__search`]} />
                    </div> : ""}
                    {searchElement(_props.items).map((e, k: any) => !!_props.itemElement ?
                        _props.itemElement(e, k) : 
                        <div style={{textTransform:"capitalize",textDecoration:"none"}}
                            className={`${style[`bst-select__list__item`]}  ${!!_props.listItemClass ? _props.listItemClass : ''} `}
                            key={k} onClick={() => _onSelect(e)}>
                            <label htmlFor={id}>
                                {
                                    typeof e != "string" ?
                                    <span>
                                        {String(e.label).replace(/\-/g, " ")}
                                        {e.mandatory ? <span className="star">*</span> : ""}
                                    </span> 
                                    : <span>{e}</span>
                                }
                            </label>
                        </div>)}
                </span>
            </button>
        </div>
    )
}

