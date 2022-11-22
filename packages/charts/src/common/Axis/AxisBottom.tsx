import * as d3 from 'd3';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChartContext } from '../BaseChart/BaseChart';
import { DateTime } from 'luxon';

interface Props {}

const Wrapper = styled.div``;

const AxisBottom: React.FC<Props> = ({}) => {
  const chartContext = React.useContext(ChartContext);
  console.log('AXIS BOTTOM');

  useEffect(() => {
    console.log('AXIS BOTTOM - USE EFFECT');
    // d3.select(chartContext.svgRef.current).select(".axis .bottom").remove();
    if (chartContext.series.length > 0) {
      // All time series will share same x value, and will have same length- its design choice
      // So we can use first as reference
      const first = chartContext.series[0];
      const indexTicks = d3
        .ticks(0, first.length, 5)
        .filter(num => num < first.length)
        .slice(0, -1);
      const xValues = indexTicks.map(index => DateTime.fromISO(first[index].x).toFormat('LLL, d'));
      const xScale = d3
        .scaleLinear()
        .range([0, chartContext.realWidth])
        .domain([0, indexTicks.length]);
      const axis = d3.select(chartContext.svgRef.current);
      console.log('AXIS---', axis);
      axis.append('g').attr('class', 'test');
      // 	.attr("transform",`translate(${getyAxisWidth()+10},${height})`)
      // 	.attr("class",'axis-domain')
      // 	.selectAll("g")
      // 	.append("g")
      // 	.attr("class","axis-domain")
      // 	.attr("fill","none")
      // 	.attr("font-family","var(--font-family-heading)")
      // 	.attr("text-anchor","middle")
      // 	.attr("font-size","12")
      // 	.data(xValues)
      // 	.enter()
      // 	.append("g")
      // 	.attr("class","tick")
      // 	.attr("opacity","1")
      // 	.attr("transform",(value,index) => `translate(${xScale(index)},0)`)
      // 	.append("text")
      // 	.attr("fill","var(--color-gray-700)")
      // 	.text((value,index) => value)
    }
  }, [chartContext.realHeight, chartContext.realWidth]);

  return null;
};

export default React.memo(AxisBottom);
