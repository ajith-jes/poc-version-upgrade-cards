
import React, { FC } from 'react';

import { BulkPageProps } from './index.interface';
import { Table } from '../Table';
import { StagedSelect } from '../StagedSelect';
import { Button } from '../Button';
import { Chips } from '../Chips';
import "./BulkPage.scss";

/**
 * Primary UI component for user interaction
 */
export const BulkPage: FC<BulkPageProps> = (_props) => {
  return (
    <div className='bst-bulk-page'>
      <div className='div-1'>
        <StagedSelect {..._props.selectProps} />
        <div className='flex-1'></div>
        <Button onClick={_props.submit} 
          size='small' disables={!(!!_props.selectProps.selectedOne &&
          !!_props.selectProps.selectedTwo && 
          (!!_props.selectProps.selectedThree ||
          !!_props.selectProps.selectedDateRange.map((e) => !!e).filter(e => e).length)
        )} 
        >Submit</Button>
      </div>

      <div className="py-2 pb-5">
        <Chips
          items={_props.chips}
          onClose={_props.onChipsChange}
        />
      </div>

      <Table
        headers={_props.tableHeaders}
        items={_props.tableItems}
        selected={_props.tableItemSelected}
        onSelectChange={_props.onTableItemSelectedChange}
        withCheckbox
      />
    </div>
  );
};


