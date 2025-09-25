import { SelectProps } from "../Select/index.interface"

export type StagedSelectItemType = "text" | "select" | "none" | "dateRange"

export type StagedSelectItem = {
    label: string
    type: StagedSelectItemType
    value: string | string[]
    items: StagedSelectItem[]
} 

export type StagedSelectProps = {
    options: { [key: string]: any }
    modelDirection: "left" | "right"
    selectedOne: string
    selectedTwo: string
    selectedThree: string
    selectedDateRange: string[]
    setSelectedOne: (val: string) => void
    setSelectedTwo: (val: string) => void
    setSelectedThree: (val: string) => void
    setSelectedDateRange: (val: string[]) => void
    onApply: () => void,
    valueInputType: () => "text" | "select"
    valueOptions?: SelectProps
}