
export type Item = string | { label: string, value: string }

export type SelectChipProp = {
    text: Item
    close: () => void
    selectedElementItem?: (e: Item) => string
}

export type MultiSelectProps = {
    onChange: (val: any[]) => void
    selected: Item[]
    items: Item[]
    placeHolder: string
    selectedElementItem?: (e: Item) => string
}