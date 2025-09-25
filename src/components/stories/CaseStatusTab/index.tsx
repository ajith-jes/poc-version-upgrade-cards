import React, { FC } from 'react';

import { CaseStatusTabProps } from './index.interface';
import { Tab, TabItem, TabItemTitle } from '../Tab';
import { Loader } from '../Loader';
import { Table } from '../Table';
import { Pagination } from '../Pagination';






/**
 * Primary UI component for user interaction
 */
export const CaseStatusTab: FC<CaseStatusTabProps> = (_props) => {
  const TableComponent = () => {
    const headers = [
        {label: "Case ID", key: "caseId"},
        {label: "Dispute Category", key: "disputeCategory"},
        {label: "Dispute Amount", key: "disputeAmount"},
        {label: "Transaction Amount", key: "transactionAmount"},
        {label: "Created Date", key: "createdDate"},
        {label: "Due Date", key: "deadLine"},
        {label: "Card Network", key: "cardType"}
    ]

    return (
        <div>
            {!!!_props.loader ? <div style={{
                marginTop: "1rem",
            }}>
                <Table
                    variant="variant1"
                    headers={headers}
                    items={_props.tableData}
                    itemAction={_props.tableItemAction}
                    tdElement={_props.tableTdElement}
                />
            </div>
                : <Loader center height={100} />}
        </div>
    )
  }
  return (
    <div className='bst-case-status-tab'>
       <Tab selected={_props.tabSelected} 
        selectedBasedOn={"index"} 
        onChange={_props.tabOnChange}>
          <TabItem
              headComponent={<TabItemTitle className="flex-1" title={"Open"} value={`${_props.statusValue.open}`} color="#2FB67E" />}>
              <TableComponent />
          </TabItem>
          <TabItem 
          headComponent={<TabItemTitle className="flex-1" title={"Overdue"} value={`${_props.statusValue.overdue}`} color="#CA3521" />}>
              <TableComponent />
          </TabItem>
          <TabItem 
          headComponent={<TabItemTitle className="flex-1" title={"Pending"} value={`${_props.statusValue.pending}`} color="#EBB22D" />}>
              <TableComponent />
          </TabItem>
          <TabItem 
          headComponent={<TabItemTitle className="flex-1" title={"Resolved"} value={`${_props.statusValue.resolved}`} color="#757575" />}>
              <TableComponent />
          </TabItem>
        </Tab>
         {!!_props.tableData.length ? <div className="bst-case-status-tab__table_data">
              <span>{_props.paginationLeftData}</span>
              <Pagination 
              onPageChange={_props.paginationOnChange} 
              totalCount={_props.totalCount} 
              siblingCount={1} currentPage={_props.currentPage} 
              pageSize={_props.perPage} className={"justify-center"} />
                
              <div className="bst-case-status-tab__table_data__pagination">
                  <span>Rows per page </span>
                  <select name="perPage" id="perPage" 
                  value={_props.perPage} onChange={(e) => _props.perPageChange(e.target.value)} >
                      {[10, 20, 30].map((e, key) => <option key={key} value={e}>{e}</option>)}
                  </select>
              </div>
          </div> : ""}
    </div>
  );
};

