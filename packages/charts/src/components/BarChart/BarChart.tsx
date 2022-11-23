import React from 'react';
import styled from 'styled-components';
import BaseChart from '../../common/BaseChart/BaseChart';
import { CommonProps } from '../../types/props';

export interface BarChartProps extends CommonProps {}

const Wrapper = styled.div``;

const BarChart: React.FC<BarChartProps> = ({ series }) => {
  return (
    <BaseChart series={series}>
      <h2>Bar chart</h2>
    </BaseChart>
  );
};

export default BarChart;
