export type DropdownProps = {
    /**
     * label content
     */
    label: React.ReactNode
    /**
     * children content
     */
    children: React.ReactNode
    dropDownSide: "left" | "right"
    close?: boolean
    model: boolean
    onModelClose: (val: boolean) => void
}