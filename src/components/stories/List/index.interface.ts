

export type ListItemProps = {
    /**
     * list item content
     */
    children?: React.ReactNode
    /**
     * class list for the component
     */
    className?: string
    /**
     * unique identifier for which passes along with click event
     */
    id?: any
    /**
     * event triggers on click
     */
    onClick?: (id: any) => void
}

export type ListItemTitleProps = {
    /**
     * class list for the component
     */
    className?: string
    /**
     * list item title content
     */
    children?: React.ReactNode
}

export type ListItemActionProps = {
    /**
     * class list for the component
     */
    className?: string
    /**
     * list item title content
     */
    children?: React.ReactNode
}

export type ListItemCaptionProps = {
    /**
     * class list for the component
     */
    className?: string
    /**
     * list item caption content
     */
    children?: React.ReactNode
}


export type ListProps = {
    /**
     * class list for the component
     */
    className?: string
    /**
     * title text which will appear when hover on the element
     */
    title?: string
    /**
     * list item children
     */
    children?: React.ReactNode
}