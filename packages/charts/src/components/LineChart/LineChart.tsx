import React from 'react';
import styled from 'styled-components';
import { CommonProps } from '../../types/props';
import BaseChart from '../../common/BaseChart/BaseChart';
import AxisBottom from '../../common/Axis/AxisBottom';
import AxisLeft from '../../common/Axis/AxisLeft';
import LineSeries from '../../common/LineSeries/LineSeries';

export interface LineChartProps extends CommonProps {}

const Wrapper = styled.div``;

const LineChart: React.FC<LineChartProps> = ({ series }) => {
  console.log('Rendering line chart');
  return (
    <BaseChart series={series}>
      <LineSeries />
      <AxisLeft />
      <AxisBottom />
    </BaseChart>
  );
};

export default LineChart;
