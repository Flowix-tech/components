import React from 'react';
import styled from 'styled-components';
import { CommonProps } from '../../types/props';
import BaseChart from '../../common/BaseChart/BaseChart';
import AxisBottom from '../../common/Axis/AxisBottom';

export interface LineChartProps extends CommonProps {}

const Wrapper = styled.div``;

const LineChart: React.FC<LineChartProps> = ({ series }) => {
  console.log('Rendering line chart');
  return (
    <BaseChart series={series}>
      <h2>Line series</h2>
      <AxisBottom />
    </BaseChart>
  );
};

export default LineChart;
