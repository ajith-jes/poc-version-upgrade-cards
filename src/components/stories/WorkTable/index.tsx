
import React, { FC } from 'react';

import { WorkTableProps } from './index.interface';
import { Loader } from '../Loader';
import { MultiSelect } from '../MultiSelect';
import { Pagination } from '../Pagination';
import moment from 'moment';
import { Table } from '../Table';




/**
 * Primary UI component for user interaction
 */
export const WorkTable: FC<WorkTableProps> = (_props) => {

    
  const TableComponent = () => {
      const fD = (d: any) => moment(d).format("ddd MMM DD, YYYY")

      return (
          <div>
              {!!!_props.loader ? <div className="mt-4">
                  <Table
                      variant="variant1"
                      headers={_props.tableHeaders}
                      items={_props.data}
                      itemAction={_props.tableActionItem}
                      tdElement={_props.tableTdElement}
                  />
              </div>
                  : <Loader center height={100} />}
          </div>
      )
  }



  return (
      _props.loader ? 
      <div>
          <Loader height={350} center size={75} />
      </div>
      : <div >
          <div className="flex items-center py-5">
              <span className="pr-4 font-medium">Status</span>
              <div className="w-60">
              <MultiSelect 
              placeHolder="Please select status"
              items={_props.multiSelectItems} 
              selected={_props.multiSelectSelected} 
              onChange={_props.onMultiSelectChange} />
              </div>
              <div className="flex-1"></div>
          </div>
          <div className="min-h-[230px]">
              <TableComponent />
          </div>
          {!!_props.data.length ? <div className="flex justify-between items-center pt-10 px-6">
              <span>{_props.paginationLeftData}</span>
              <Pagination 
              onPageChange={_props.paginationOnChange} 
              totalCount={_props.totalCount} 
              siblingCount={1} currentPage={_props.currentPage} 
              pageSize={_props.perPage} className={"justify-center"} />
              <div className="flex items-center justify-center">
                  <span>Rows per page </span>
                  <select name="perPage" id="perPage" 
                  className="bg-slate-200 ml-2" 
                  value={_props.perPage} 
                  onChange={(e) => _props.perPageChange(e.target.value)}>
                      {[10, 20, 30].map((e, key) => <option key={key} value={e}>{e}</option>)}
                  </select>
              </div>
          </div> : '' }
      </div>
  )
}


