import React from 'react';
import styled from 'styled-components';
import AxisBottom from '../../common/Axis/AxisBottom';
import { CommonProps } from '../../types/props';
import BaseChart from '../../common/BaseChart/BaseChart';

export interface PieChartProps extends CommonProps {
  data: Record<string, number>;
  width?: number;
  height?: number;
  valueType?: 'percentage' | 'absolute';
  maxValues?: number;
}

const Wrapper = styled.div`
  color: #000066;
`;

const PieChart: React.FC<PieChartProps> = ({ data, ...props }) => {
  return (
    <BaseChart {...props}>
      <h2>sta sad</h2>
      <AxisBottom />
    </BaseChart>
  );
};

export default PieChart;
