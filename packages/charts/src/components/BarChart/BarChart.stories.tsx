import React from 'react';
import { Meta, Story } from '@storybook/react';
import BarChart, { BarChartProps } from './BarChart';

export default {
  title: 'Charts/Bar Chart',
  component: BarChart
} as Meta;

interface Args extends BarChartProps {}

export const Simple: Story<Args> = ({ ...args }) => {
  return <BarChart {...args} />;
};
