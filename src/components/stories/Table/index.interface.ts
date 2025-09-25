import React, { HTMLAttributes } from 'react'


type cbFun = (ele: any, index?: any) => JSX.Element | string

export interface TdElement {
    [key: string]: cbFun;
}

export interface TdElementTextWidth {
    [key: string]: {
        char: number
        noCopy?: boolean
    }
}

export type TableProps = {
    headers: {label: string, key: string}[]
    items: any[]
    withCheckbox?: boolean
    selected?: any[]
    onSelectChange?: (selectedItems: any) => void
    itemAction?: cbFun
    tdElement?: TdElement,
    tdClass?: string
    maxHeight?: string
    scrollable?: boolean
    stickyAction?: boolean
    maxTextWidthForCell?: TdElementTextWidth
    /**
     * font size in pixel
     */
    dataFontSize?: number
    /**
     * font size in pixel
     */
    headerFontSize?: number
    /**
     * loading indicator
     */
    loading?: boolean
    variant?: "default" | "variant1"
    expandedRow?: number
    expandableData?: cbFun
}


