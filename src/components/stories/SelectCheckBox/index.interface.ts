export type SelectCheckBoxProps = {
  selected: any[]
  items: any[]
  id: string
  onChange: (e: any[]) => void
  model: boolean, 
  label: any
  selectOption?: {
      label: string
      value: string
  }
  setModel: (va: boolean) => void
}
