import { StagedSelectProps } from "../StagedSelect/index.interface";

export type BulkPageProps = {
    tableHeaders: { label: string; key: string; }[]
    filterChips: string[]
    tableItems: any[]
    tableItemSelected: any[]
    onTableItemSelectedChange: (item: any[]) => void
    selectProps: StagedSelectProps
    applyFilter: () => void
    submit: () => void

    chips: {label: string, id: number}[]
    onChipsChange: (ele: any) => void

    paginationLeftData: string
    paginationOnChange: (page: number) => void
    currentPage: number
    totalCount: number
    perPage: number
    perPageChange: (perPage: string) => void
}