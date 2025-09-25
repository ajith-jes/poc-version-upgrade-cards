export type DropZoneProps = {
    onUploadFile: (files: any) => void
    extensions: string[]
    children: any
    multiple?: boolean
    className?: string
    disabled?: boolean
}