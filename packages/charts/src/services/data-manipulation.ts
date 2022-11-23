// Utils for time series manipulation
import { DataPoint } from '../types/props';
import { DateTime } from 'luxon';

/**
 *
 */
export const getFinalData = (seriesArray: DataPoint[][]) => {
  // We are searching for min last index
  // We want only datapoint which are common in all series
  const minIndex = Math.max(...seriesArray.map(series => series.length));
  return seriesArray.map(series => series.slice(0, minIndex - 1));
};

/**
 *
 */
export const getMinMaxOfSeries = (seriesArray: DataPoint[][]): [number, number] => {
  const yValues = seriesArray.flatMap(series => series.map(item => item.y));
  return [Math.min(...yValues), Math.max(...yValues)];
};
