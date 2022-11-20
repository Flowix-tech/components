import React from 'react';
import { Meta, Story } from '@storybook/react';
import PieChart, { PieChartProps } from "./PieChart";

export default {
	title: 'charts/PieChart',
	component: PieChart
} as Meta;

interface Args extends PieChartProps{

}

export const Default: Story<Args> = ({...args}) => {
	return <PieChart {...args} />;
};

Default.args = {
	title: "Pie Chart"
} as Args;
