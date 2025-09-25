
import React, { FC, useMemo } from 'react';

import { PaginationCountProps, PaginationProps } from './index.interface';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss'

const range = (start: number, end: number) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

const DOTS = "..."

type usePagination = {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}: usePagination) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
	
    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }
     
    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};


export const PaginationCount: FC<PaginationCountProps> = (_props) => {

  const calc = useMemo(() => {
    let left = 0;
    left = (_props.pageSize * _props.currentPage) - _props.pageSize;
    let right = left + _props.pageSize
    if (_props.totalCount < right) {
      right = _props.totalCount
    }
    return `${left + 1}-${right} of ${_props.totalCount}`
  }, [_props.currentPage, _props.pageSize])

  return (
    <div style={{display: "inline-block"}}>
      {calc}
    </div>
  )
}


/**
 * Primary UI component for user interaction
 */
export const Pagination: FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = !!paginationRange ? paginationRange[paginationRange.length - 1] : 0;

  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <div className={style[`bst-pagination-wrapper`]}> 
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onClick={(e:any) => {
          onPageChange(e.selected + 1)
        }}
        onPageChange={(e:any) => {
          onPageChange(e.selected + 1)
        }}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
