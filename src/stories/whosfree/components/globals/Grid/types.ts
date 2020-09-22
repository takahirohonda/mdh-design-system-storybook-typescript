export type SpanOptions = 'auto' | number;
export type OffsetOptions = number;
export type ExcludeBottomGutter = boolean;

export type ResponsiveBreakpoints<Options> = {
  sm?: Options;
  md?: Options;
  lg?: Options;
}
