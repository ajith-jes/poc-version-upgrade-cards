
import React, { Children, FC, useState } from 'react';

import { ListTransactionProps } from './index.interface';
import { Table } from '../Table';
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { LocalDate } from '../LocalDate';

const Transactions: FC<{ index: number; subHeaderMap: any, props: any }> = ({ index, subHeaderMap, props }) => {
  return (
    <div className='p-3 '>
      <Table
        variant="variant1"
        headers={props.headers}
        items={subHeaderMap.transaction_group}
        tdElement={{
          radio: (e: any) => {
            return (
              <input
                name="transactionList"
                type="radio"
                disabled={e.transaction_type === "Auth Info" || e.transaction_type === "Auth Reversal Info"}
                className={`cursor-pointer`}
                onChange={() => props.onCaseCreateDataSelected([e])}
              />
            )
          },
          transaction_currency_code: (e) => <span>{!!e.transaction_currency_code ? e.transaction_currency_code : "NA"}</span>,
          local_transaction_date_time: (e) => <span>{!!e.local_transaction_date_time ? <LocalDate dateTime={e.local_transaction_date_time} format="MM/DD/YYYY HH:mm:ss" /> : "NA"}</span>,
          response_code: (e:any) => <span>{ e.response_code === null ?  "NA": e.response_code }</span>,
          merchant_location: (e) => <span>{!!e.merchant_location ? e.merchant_location : "NA"}</span>,
          moto_indicator: (e) => <span>{!!e.moto_indicator ? e.moto_indicator : "NA"}</span>,
          pos_entry_mode: (e) => <span>{!!e.pos_entry_mode ? e.pos_entry_mode : "NA"}</span>,
          auth_code: (e) => <span>{!!e.auth_code ? e.auth_code : "NA"}</span>,
          mcc: (e) => <span>{!!e.mcc ? e.mcc : "NA"}</span>,
          rrn: (e) => <span>{!!e.rrn ? e.rrn : "NA"}</span>
        }}
      />
    </div>
  )
}


/**
 * Primary UI component for user interaction
 */
export const ListTransaction: FC<ListTransactionProps> = (_props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [close, setClose] = useState(false);
  const handleIconClick = (index: any) => {
    setClose(() => true)
    if (activeIndex == index) {
      setClose(() => false)
      setActiveIndex(-1);
      return
    }
    setActiveIndex(index);
  };
  return (
    <div className='wrapper'>
      {_props.data.transactions && _props.data.transactions.length > 0 && _props.data.transactions.map((subHeaderMap: any, index: number) => (
        <div className={`wrappertail mb-2 ${index === activeIndex && close ? "bg-gray-200" : ""}`} key={index}>
          <div className="flex items-center justify-between p-2 rounded-sm cursor-pointer" onClick={() => handleIconClick(index)}>
            <div className={`font-medium flex transition-all ${index === activeIndex && close ? "items-center" : "flex-col"}`}>
              <span>
                Transaction ID
              </span>
              <span className=''>
                <span className={`text-[13px] ${index === activeIndex && close ? 'pl-2':""}`} >{subHeaderMap.auth_transaction_ref_id}</span>
              </span>
            </div>
            <span className="ml-2">
              {index === activeIndex && close ?  <ChevronDownIcon height={24} /> : <ChevronUpIcon height={24} />}
            </span>
          </div>
          
            <div className="p-2" style={{
              display: index === activeIndex && close ? "block" : "none"
            }}>
              <Transactions index={index} subHeaderMap={subHeaderMap} props={_props} />
            </div>
            
        </div>
      ))}
    </div>

  );
};