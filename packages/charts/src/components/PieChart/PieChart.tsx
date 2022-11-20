import React from 'react';
import styled from 'styled-components';
import Container from "../Container";
import ChartTitle from "../../common/ChartTitle";
import { CommonProps } from "../../common/props";
import BaseChart from "../BaseChart/BaseChart";

export interface PieChartProps extends CommonProps{
  data: Record<string, number>;
  width?: number;
  height?: number;
  valueType?: 'percentage' | 'absolute';
  maxValues?: number;
}

const Wrapper = styled.div`
  color: #000066;
`;

const PieChart: React.FC<PieChartProps> = ({
	data,
	...props
}) => {
	return (
		<BaseChart {...props}>
			<h2>sta sad</h2>
		</BaseChart>
	);
};

export default PieChart;
