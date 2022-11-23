import React, { useEffect } from 'react';
import { ChartContext } from '../BaseChart/BaseChart';
import * as d3 from 'd3';
import { DataPoint } from '../../types/props';
import { yAxisWidth } from '../../constants/chart';

interface Props {}

const LineSeries: React.FC<Props> = ({}) => {
  const chartContext = React.useContext(ChartContext);

  useEffect(() => {
    if (chartContext) {
      const { svgRef, xScale, yScale, xValues } = chartContext;
      d3.select(svgRef.current).select('.series > *').remove();
      const seriesElem = d3.select(svgRef.current).select('.series');
      for (const [index, currentSeries] of chartContext.series.entries()) {
        const line = d3
          .line<DataPoint>()
          .x(function (item, index) {
            return xScale(index);
          })
          .y(function (item, index) {
            return yScale(item.y);
          })
          .curve(d3.curveCatmullRom.alpha(0.5));

        console.log('line current series', line(currentSeries));
        seriesElem
          .append('g')
          .attr('data-label', `series-${index}`)
          .attr('transform', `translate(${yAxisWidth},0)`)
          .append('path')
          .datum(currentSeries)
          .attr('class', 'line')
          .attr('d', line as any)
          .attr('stroke', 'red')
          .attr('opacity', '1')
          .style('fill', 'none')
          .style('stroke-width', '2');
      }
    }
  }, [chartContext]);

  return null;
};

export default LineSeries;
