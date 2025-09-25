export type PaginationProps = {
    onPageChange: (currentPage: number) => void
    totalCount: number
    siblingCount: number
    currentPage: number
    pageSize: number
    className: string
}

export type PaginationCountProps = {
    currentPage: number
    pageSize: number
    totalCount: number
}
