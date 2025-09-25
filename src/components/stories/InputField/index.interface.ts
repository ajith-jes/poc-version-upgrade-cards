import { InputHTMLAttributes, ReactNode } from "react"
import { IconType } from "../Icons/index.interface"

type InputField = {
    appendIcon?: IconType
    appendIconAction?: (val: any) => void
    prependIcon?: IconType
    prependIconAction?: (val: any) => void
    label?: string
    labelClass?: string
    wrapperClass?: string
    block?: boolean
    formField?: boolean
    error?: string
    required?: boolean
    noPadding?: boolean
}

export type InputFieldProps = InputField & InputHTMLAttributes<HTMLInputElement>


