export type ModelProps = {
    children: any,
    model: boolean,
    close: (val: boolean) => void
    hideClose?: boolean
    closeClass?: string
    persist?: boolean;
}