import { Icons } from "../Icons"
import { FC, useMemo, useState } from "react"

import { MultiSelectProps, Item, SelectChipProp } from './index.interface';


const SelectChip: FC<SelectChipProp> = (_props) => {

    const text = () => typeof _props.text == "string" ? _props.text : _props.text.label

    return (
        <div className="inline-flex items-center p-2 capitalize">
            <span className={`pr-1`}>{!!_props.selectedElementItem ? _props.selectedElementItem(text()) : text()}</span>
            <span onClick={_props.close} className="cursor-pointer h-5 w-5 rounded-md flex justify-center items-center bg-[#1F6EE2]"><Icons name="close" color="white" size={24} /></span>
        </div>
    )
}

/**
 * Primary UI component for user interaction
 */
export const MultiSelect: FC<MultiSelectProps> = (_props) => {
    const [hide, setHide] = useState(false);

    const va = (va: Item): string => {
        return typeof va == "string" ? va : va.label
    }

    const _addItem = (e: Item) => {
        _removeItem(e)
        let newVal = [..._props.selected, e]
        _props.onChange(newVal)
        setHide(false)
    }
    
    const _removeItem = (e: Item) => {
        let newVal = [..._props.selected].filter((el) => 
            JSON.stringify(el) != JSON.stringify(e)
        )
        _props.onChange(newVal)
        return newVal
    }

    const _listItems = useMemo(() => {
        let selected = [..._props.selected].map((e) => JSON.stringify(e))
        return _props.items.filter((e) => !selected.includes(JSON.stringify(e)))
    }, [_props.items, _props.selected])

    return (
        <div className={`inline-block relative`} >
            <div onClick={() => setHide(true)} className={`relative flex flex-wrap min-h-[38px] min-w-[200px] border rounded-md z-10 bg-white cursor-pointer`}>
                {!!_props.selected.length ? _props.selected.map((e, k) => (
                    <SelectChip selectedElementItem={_props.selectedElementItem} text={e} key={k} close={() => _removeItem(e)} />
                )) : <div className="relative h-[38px] w-full flex items-center">
                    <span className="pl-3">{_props.placeHolder}</span>
                </div>}
            </div>
            {hide ? <><div className=" rounded-sm shadow-md absolute bg-white min-w-full z-10">
                <ul className="bg-buttonText">
                    {_listItems.map((e, k) => (
                        <li className="p-4 py-2 hover:bg-slate-200 cursor-pointer capitalize" key={k} onClick={() => _addItem(e)}>{va(e)}</li>
                    ))}
                </ul>
            </div> 
            <div className="h-screen w-screen bg-transparent fixed left-0 top-0 z-[2]" onClick={() => setHide(false)}></div></> : ""}
        </div>
    )
}





