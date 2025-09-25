import { FC, useEffect, useRef, useState } from "react"
import style from './SelectSearch.module.scss'

type SelectSearchType = {
  search: string
  setSearch: (e: any) => void
  searchKeys: string[]
  suggestions: any[]
  suggestionValue: (e: any) => any
  displayValue: () => string
  onSelectValue: (e: any) => void
  placeholder: string
}


export const SelectSearch: FC<SelectSearchType> = (props) => {

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const inp = useRef<HTMLInputElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={style.selectSearch} ref={dropdownRef}>
      <div onClick={() => {
        setOpen(true);
        inp.current?.focus();
      }} className={style.label}>
        {!!props.displayValue() ? props.displayValue() : props.placeholder}
      </div>
      {open ? <div className={style.options}>
        <input 
          ref={inp}
          type="text" 
          autoFocus
          value={props.search}
          placeholder={'Search...'}
          onChange={(e) => props.setSearch(e.target.value)} 
        />
        <ul>
          {props.suggestions?.map((e, i) => (
            <li onClick={() => {
              props.onSelectValue(e);
              setOpen(false);
            }} key={i}>
              {props.suggestionValue(e)}
            </li>
          ))}
        </ul>
      </div> : <></>}
    </div>
  )
}