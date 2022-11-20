import React from 'react';
import styled from 'styled-components';

export interface PieChartProps {
	title: string
	data: Record<string, number>
	description?:string
	width?:number
	height?:number
	valueType?: "percentage" | "absolute"
	maxValues?:number
	maxWidth?:string
}

const Wrapper = styled.div`
  color: #000066;
`;

const PieChart: React.FC<PieChartProps> = ({}) => {
	return (
		<Wrapper>
			<h2>PieChart</h2>
		</Wrapper>
	);
};

export default PieChart;
