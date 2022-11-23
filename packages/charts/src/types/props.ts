import { CSSProperties } from 'react';

export interface DataPoint {
  x: string | number;
  y: number;
}

export interface CommonProps {
  title?: string;
  description?: string;
  disableContainer?: boolean;
  style?: CSSProperties;
  maxWidth?: number;
  height?: number;
  /** Data for left axis */
  series: DataPoint[][];
}
