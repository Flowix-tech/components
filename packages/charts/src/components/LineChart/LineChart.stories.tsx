import React from 'react';
import { Meta, Story } from '@storybook/react';
import LineChart, { LineChartProps } from './LineChart';
import { DataPoint } from '../../types/props';

export default {
  title: 'Charts/Line Chart',
  component: LineChart
} as Meta;

const data = [];
const volumes = [
  { date: '2022-01-01', btc: 1200000, eth: 800000, others: 300000 },
  { date: '2022-01-02', btc: 2200000, eth: 1200000, others: 900000 },
  { date: '2022-01-03', btc: 800000, eth: 500000, others: 100000 },
  { date: '2022-01-04', btc: 1200000, eth: 800000, others: 300000 },
  { date: '2022-01-05', btc: 1100000, eth: 700000, others: 230000 },
  { date: '2022-01-06', btc: 1800000, eth: 1800000, others: 800000 },
  { date: '2022-01-07', btc: 3300000, eth: 2200000, others: 900000 },
  { date: '2022-01-08', btc: 1200000, eth: 800000, others: 400000 },
  { date: '2022-01-09', btc: 1900000, eth: 900000, others: 500000 },
  { date: '2022-01-10', btc: 1900000, eth: 900000, others: 500000 },
  { date: '2022-01-11', btc: 800000, eth: 500000, others: 200000 },
  { date: '2022-01-12', btc: 4400000, eth: 1800000, others: 1000000 },
  { date: '2022-01-13', btc: 4400000, eth: 1800000, others: 1000000 },
  { date: '2022-01-14', btc: 2200000, eth: 1100000, others: 700000 }
];

const series1: DataPoint[] = volumes.map(item => ({ x: item.date, y: item.btc }));
const series2: DataPoint[] = volumes.map(item => ({ x: item.date, y: item.eth }));

interface Args extends LineChartProps {}

/**
 *  LineChart with only one time series
 */
export const SingleSeries: Story<Args> = ({ ...args }) => {
  return <LineChart {...args} />;
};

SingleSeries.args = {
  series: [series1]
} as Args;

/**
 *  LineChart with multiple time series
 */
export const MultiSeries: Story<Args> = ({ ...args }) => {
  return <LineChart {...args} />;
};

MultiSeries.args = {
  series: [series1, series2]
} as Args;

export const SingleSeriesBothAxis: Story<Args> = ({ ...args }) => {
  return <LineChart {...args} />;
};

export const MultiSeriesBothAxis: Story<Args> = ({ ...args }) => {
  return <LineChart {...args} />;
};
