export type DrawerProps = {
    onBack: () => void
    wrapper: (val: any, e: {
        access: string[]
        label: string
        path: string
        query: any,
        activeOn: string[]
        icon: (col: any) => any
    }) => any
    pathName: string
    data: {
        access: string[]
        label: string
        path: string
        query: any,
        activeOn: string[]
        icon: (col: any) => any
    }[]
}