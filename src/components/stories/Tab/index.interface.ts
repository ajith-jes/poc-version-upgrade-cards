import { ReactElement, ReactNode } from "react"

export type TabItemTitleProps = {
    active?: boolean
    title: string
    value: string
    index?: number
    color: string
    onClick?: () => void
    className?: string;
}

export type TabItemProps = {
    headComponent: ReactNode
    children: ReactNode
    id?: string
    className?: string;
}

export type TabProps = {
    children: ReactNode[]
    selected: number | string
    selectedBasedOn: "index" | "id"
    onChange: (val: any) => void
}








