export type IconType = "" | "add" | "close" | "work" | "growth" | "list" | "bell" | "question" | "account" | "search" | "mail" | "eye" | "eye2" | "check" | "chevron-down" | "check-circle" | "circle-x" | "warning"

export type Icon = {
    /**
     * size of the icon
     */
    size: number
    /**
     * color
     */
    color?: string
}

export type IconsProps = {
    /**
     * size of the icon
     */
    size: number
    /**
     * icon name
     */
    name: IconType
    /**
     * color
     */
    color?: string
    /**
     * to capture click event
     * @returns {void}
     */
    onClick?: () => void
}

