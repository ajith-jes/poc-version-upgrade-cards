import { Item } from "../MultiSelect/index.interface"
import { TdElement } from "../Table/index.interface"

export type WorkTableProps = {
    /**
     * other content
     */
    loader?: boolean
    multiSelectItems: Item[]
    multiSelectSelected: Item[]
    onMultiSelectChange: (e: any[]) => void

    /**
     * main data content
     */
    data: any[]
    tableActionItem?: (ele: any) => JSX.Element
    tableTdElement: TdElement
    tableHeaders: { label:string, key: string}[]
    
    /**
     * pagination content
     */
    paginationLeftData: string
    paginationOnChange: (page: number) => void
    currentPage: number
    totalCount: number
    perPage: number
    perPageChange: (perPage: string) => void
}