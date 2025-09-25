export type BarChartVariantType = 'bar' | 'dot'
export type BarChartPosition = "vertical" | "horizontal"

export type ChartProps = {
    height: number
    width: number
    responsive: boolean,
    position: BarChartPosition
    variant: BarChartVariantType
    titleText: 'Chart.js Bar Chart',
    data: any[][]
    labels?: string[]
    backgroundPatternColor: string
    colors: string[]
    barGap?: number
    labelRotateAngle?: number
    bullsEye?: boolean
    labelYPosition?: number
    labelYFontSize?: number
    labelText?: string
}