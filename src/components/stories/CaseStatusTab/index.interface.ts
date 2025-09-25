import { TabProps } from "../Tab/index.interface"
import { TdElement } from "../Table/index.interface"

export type CaseStatusTabProps = {
    tabSelected: string | number
    tabOnChange: (v: any) => void
    loader: boolean
    tableData: any[]
    tableTdElement?: TdElement | undefined
    tableItemAction?: ((ele: any) => JSX.Element) | undefined
    statusValue: {
        open: any,
        overdue: any,
        pending: any,
        resolved: any,
    }
    paginationLeftData: string
    paginationOnChange: (page: number) => void
    currentPage: number
    totalCount: number
    perPage: number
    perPageChange: (perPage: string) => void
}