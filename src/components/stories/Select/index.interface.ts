import React from "react"
import { JsxElement } from "typescript"



type ItemValue = string[] | {
    label: string
    mandatory: string
}[]

export type SelectProps = {
    label?: string
    selected: any
    items: string[] | {
        label: string
        mandatory?: boolean
    }[]
    onChange: (val: string | {
        label: string
        mandatory: string
    }) => void
    buttonClass?: string
    listClass?: string
    listItemClass?: string
    className?: string
    id: string
    appendIcon?: any
    prependIcon?: any
    iconColor?: string
    itemElement?: (val: any, i: any) => any
    mandatory?: boolean
    searchable?: boolean
}


