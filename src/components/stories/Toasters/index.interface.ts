
export type ToastersType = "ERROR" | "WARNING" | "SUCCESS"

export type ToasterMessageProps = {
  text: string
  type: ToastersType
  duration: number
  id: string
  close: (val: ToasterMessageProps) => void
}

export type ToastersProps = {
  duration: number
  index: number
  show: boolean
  data: ToasterMessageProps[]
  close: (val: ToasterMessageProps) => void
}