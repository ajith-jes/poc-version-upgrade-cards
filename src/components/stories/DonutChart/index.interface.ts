export type DonutChartProps = {
    data: DonutSlice[];
    radius: number;
    viewBox: number;
    borderSize: number;
    clickCb: (slice: DonutSlice) => void
}


export interface DonutSlice {
  id: number;
  percent: number;
  color: string;
  label?: string;
  onClickCb?: () => void;
}

export interface DonutSliceWithCommands extends DonutSlice {
  offset: number; // This is the offset that we will use to rotate the slices
  commands: string; // This will be what goes inside the d attribute of the path tag
}