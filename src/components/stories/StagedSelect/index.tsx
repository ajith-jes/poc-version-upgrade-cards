
import React, { FC, useCallback, useState } from 'react';

import { StagedSelectProps, StagedSelectItem } from './index.interface';
import { Dropdown } from '../Dropdown';
import { Button } from '../Button';
import { Iconx } from '../Iconx';
import { Select } from '../Select';
import { InputField } from '../InputField';

/**
 * Primary UI component for user interaction
 */
export const StagedSelect: FC<StagedSelectProps> = (_props) => {


  const [model, setModel] = useState(false)


  const _objToArr = useCallback((obj: any) => {
    let arr = [];
    for (const key in obj) {
      arr.push(key)
    }
    return arr;
  }, [_props])

  const value = () => !(!!_props.selectedOne && !!_props.selectedTwo) ? "" : (
          (typeof _props.options[_props.selectedOne][_props.selectedTwo] != "object")
          ? _props.valueInputType() == "text" ? <input className='border border-[#808080] w-full rounded-[4px] p-2 px-5 outline-default' 
          type="text" value={_props.selectedThree} onChange={(e) => {
            _props.setSelectedThree(e.target.value)
          }} /> : _props.valueOptions && <Select
          {..._props.valueOptions}
          />
          : 
          <div className='flex items-center'>
              <input 
              className='border border-[#808080] rounded-[2px] p-2'
              type="date" value={_props.selectedDateRange[0]} onChange={(e) => {
                _props.setSelectedDateRange([e.target.value, _props.selectedDateRange[1]])
              }} />
            <div className='px-3'>-</div>
              <input 
              className='border border-[#808080] rounded-[2px] p-2'
              type="date" value={_props.selectedDateRange[1]} onChange={(e) => {
                _props.setSelectedDateRange([_props.selectedDateRange[0], e.target.value,])
              }} />
          </div>)

  return (
    <div>
      <Dropdown 
        label={<Button size="small" className="relative">
                  <span className="text-red-600 absolute right-[-10px] top-[-10px] text-xl">*</span>
                  <span className="flex">
                      <span className="scale-75 pr-2 relative top-[1px]"><Iconx name="Create" color="#fff" size={18} /></span>
                      <span className="flex items-center">Add Filter</span>
                  </span>
              </Button>} 
        dropDownSide={_props.modelDirection} 
        model={model} 
        onModelClose={setModel}
      >
        <form className='bg-buttonText w-[300px] p-3 shadow-lg rounded-sm pt-3 py-6' onSubmit={(e) => {
          e.preventDefault();
        }}>
          <div className='pt-3 pb-1'>
            Filter
          </div>
          <Select id='0' items={_objToArr(_props.options)} 
          selected={_props.selectedOne} onChange={(e) => {
            _props.setSelectedOne(e)
            _props.setSelectedTwo("")
            _props.setSelectedThree("")
            _props.setSelectedDateRange(["", ""])
          }} />

          <div className='pt-3 pb-1'>
            Operator
          </div>
          <Select id='2' items={typeof _props.options[_props.selectedOne] == "undefined" ? [] : _objToArr(_props.options[_props.selectedOne])} 
          selected={_props.selectedTwo} 
          onChange={(e) => {
            _props.setSelectedTwo(e)
            _props.setSelectedThree("")
            _props.setSelectedDateRange(["", ""])
          }} />

          {!!value() ? <div className='pt-3 pb-1'>
            Value
          </div> : ""}
          {value()}

          <div className='flex pt-3'>
              <Button type='reset' disables={!!!_props.selectedOne} block onClick={() => {
                _props.setSelectedOne("")
                _props.setSelectedTwo("")
                _props.setSelectedThree("")
                _props.setSelectedDateRange(["", ""])
              }} >reset</Button>
              <div className='w-4'></div>
              <Button onClick={_props.onApply} type='button' disables={
                !(
                  (!!_props.selectedOne && !!_props.selectedTwo)
                  && (!!_props.selectedThree || !!_props.selectedDateRange.map((e) => !!e).filter((e) => e).length)
                )} block >Apply</Button>
          </div>
        </form>
      </Dropdown>
    </div>
  );
};














