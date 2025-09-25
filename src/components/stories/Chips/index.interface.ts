export type ChipsProps = {
    items: {id: number,label: string}[]
    onClose: (id: number) => void
}