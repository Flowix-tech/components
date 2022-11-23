import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../BaseChart/BaseChart';

interface Props {}

const Wrapper = styled.div``;

const AxisRight: React.FC<Props> = ({}) => {
  const chartContext = React.useContext(ChartContext);

  useEffect(() => {
    if (chartContext.series.length > 0) {
    }
  }, [chartContext.realHeight, chartContext.realWidth]);

  return null;
};

export default AxisRight;
