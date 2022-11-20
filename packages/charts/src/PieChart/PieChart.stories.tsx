import React from 'react';
import { Meta, Story } from '@storybook/react';
import PieChart from './PieChart';

export default {
	title: 'charts/PieChart',
	component: PieChart
} as Meta;

export const Default: Story = () => {
	return <PieChart />;
};
