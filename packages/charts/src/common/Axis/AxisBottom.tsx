import * as d3 from 'd3';
import React, { useEffect } from 'react';
import { ChartContext } from '../BaseChart/BaseChart';
import { xAxisHeight, yAxisWidth } from '../../constants/chart';

interface Props {}

const AxisBottom: React.FC<Props> = ({}) => {
  const chartContext = React.useContext(ChartContext);

  useEffect(() => {
    // Select target axis and delete it, because we will repaint it
    if (chartContext) {
      const { xValues, xScale } = chartContext;
      d3.select(chartContext.svgRef.current).select(".axis > *[data-label='axis-bottom']").remove();
      // All time series will share same x value, and will have same length- its design choice
      // So we can use first as reference

      const axis = d3.select(chartContext.svgRef.current).select('.axis');
      axis
        .append('g')
        .attr('data-label', 'axis-bottom')
        .attr('transform', `translate(${yAxisWidth + 10},${chartContext.realHeight + xAxisHeight})`)
        .attr('class', 'axis-domain')
        .append('g')
        .attr('class', 'axis-domain')
        .attr('fill', 'var(--color-text,black)')
        .attr('font-family', 'var(--font-family-heading)')
        .attr('text-anchor', 'middle')
        .attr('font-size', '12')
        .selectAll('g')
        .data(xValues)
        .enter()
        .append('g')
        .attr('class', 'tick')
        .attr('opacity', '1')
        .attr('transform', (value, index) => `translate(${xScale(index)},0)`)
        .append('text')
        .attr('fill', 'var(--color-gray-700)')
        .text((value, index) => value);
    }
  }, [chartContext]);

  return null;
};

export default React.memo(AxisBottom);
