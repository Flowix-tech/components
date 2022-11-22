// Utils for time series manipulation
import { DataPoint } from '../types/props';

export const getFinalData = (seriesArray: DataPoint[][]) => {
  // We are searching for min last index
  // We want only datapoint which are common in all series
  const minIndex = Math.max(...seriesArray.map(series => series.length));
  return seriesArray.map(series => series.slice(0, minIndex - 1));
};
