import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../BaseChart/BaseChart';
import { getMinMaxOfSeries } from '../../services/data-manipulation';
import * as d3 from 'd3';
import formatNumber from '../../utils/formatNumber';
import { yAxisWidth } from '../../constants/chart';

interface Props {}

const AxisRight: React.FC<Props> = ({}) => {
  const chartContext = React.useContext(ChartContext);

  useEffect(() => {
    if (chartContext) {
      const { realWidth, series, yScale, svgRef } = chartContext;
      d3.select(svgRef.current).select(".axis > *[data-label='axis-left']").remove();

      const axis = d3.select(svgRef.current).select('.axis');
      const yDomain = getMinMaxOfSeries(series);
      const ticks = d3.ticks(yDomain[0], yDomain[1], 8).slice(0, -1);

      const yAxis = d3
        .axisLeft(yScale)
        .tickSize(-realWidth)
        .tickFormat((value, index) => formatNumber(value as number))
        .tickValues(ticks);

      const yAxisNode = axis
        .append('g')
        .attr('data-label', 'axis-left')
        .attr('transform', `translate(${yAxisWidth},0)`)
        .attr('class', 'y-axis')
        .call(yAxis)
        .attr('font-size', '11px')
        .attr('font-weight', 'bold');

      // Change fill of line
      yAxisNode.selectAll('line').style('color', 'var(--color-gray-400)');
      yAxisNode.selectAll('text').style('color', 'var(--color-gray-700)');
      yAxisNode.select('path').attr('display', 'none');
    }
  }, [chartContext]);

  return null;
};

export default AxisRight;
