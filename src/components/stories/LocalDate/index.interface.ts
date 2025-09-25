export type LocalDateProps = {

    /**
     * Date as UTC string
     */
    dateTime: string,

    /**
     * Format to display string as
     */
    format: string,

    /**
     * Offset time in minutes (-300, 300 etc)
     */
    offset?: number,

    /**
     * Classname
     */
    className?: string
    /**
     * placeholder for empty date
     */
    emptyPlaceholder?: string
}