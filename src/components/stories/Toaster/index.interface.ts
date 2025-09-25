
export type ToasterType = "ERROR" | "WARNING" | "SUCCESS"

export type ToasterMessageProps = {
    text: string
    type: ToasterType
    duration: number
    close: (val: boolean) => void
}

export type ToasterProps = {
    text: string
    type: ToasterType
    /**
     * duration in millisecond
     */
    duration: number
    index: number
    show: boolean
    close: (val: boolean) => void
}