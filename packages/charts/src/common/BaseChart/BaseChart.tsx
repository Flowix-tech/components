import React, { ReactNode, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components';
import ChartTitle from '../../common/ChartTitle';
import { CommonProps, DataPoint } from '../../types/props';
import Container from '../../components/Container';
import * as d3 from 'd3';
import { getFinalData, getMinMaxOfSeries } from '../../services/data-manipulation';
import { xAxisHeight, yAxisWidth } from '../../constants/chart';
import { DateTime } from 'luxon';

interface Props extends CommonProps {
  children: React.ReactNode;
}

const ChartContent = styled.div``;

export interface ChartContextI {
  realWidth: number;
  realHeight: number;
  svgRef: React.MutableRefObject<SVGSVGElement>;
  series: DataPoint[][];
  xScale: d3.ScaleContinuousNumeric<any, any>;
  xValues: string[];
  yScale: d3.ScaleContinuousNumeric<any, any>;
}

export const ChartContext = React.createContext<ChartContextI | undefined>(undefined);

/**
 * Base chart components which render container styles and possible title and description.
 * It's aware of context width and height
 */
const BaseChart: React.FC<Props> = ({
  title,
  description,
  style,
  maxWidth,
  disableContainer,
  children,
  series,
  height = 300
}) => {
  console.log('BASE CHART');
  const outerRef = React.useRef<HTMLDivElement>(null);
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = React.useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined
  });

  const [chartContext, setChartContext] = React.useState<ChartContextI | null>(null);

  const handleResize = useCallback(() => {
    if (outerRef.current) {
      const containerWidth = outerRef.current.offsetWidth;
      setDimensions({
        width: maxWidth && containerWidth > maxWidth ? maxWidth : containerWidth,
        height
      });
    }
  }, []);

  // Resizing
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [outerRef.current]);

  useEffect(() => {
    console.log('BASE CHART -USE EFFECT ');
    if (dimensions.height && dimensions.width && series.length > 0) {
      // reset
      const { width, height } = dimensions;
      // Add width and height attribute
      // Add g element for axis and series
      d3.select(svgRef.current).attr('width', width).attr('height', height);
      const finalSeries = getFinalData(series);
      const realHeight = dimensions.height - xAxisHeight;
      const realWidth = dimensions.width - yAxisWidth;
      // ---- xScale -----
      const first = finalSeries[0];
      const indexTicks = d3
        .ticks(0, first.length, 5)
        .filter(num => num < first.length)
        .slice(0, -1);
      const xValues = indexTicks.map(index =>
        typeof first[index].x === 'string'
          ? DateTime.fromISO(first[index].x as string).toFormat('LLL, d')
          : DateTime.fromMillis(first[index].x as number).toFormat('LLL, d')
      );
      const xScale = d3.scaleLinear().range([0, realWidth]).domain([0, indexTicks.length]);

      // ---- yScale -----
      const yDomain = getMinMaxOfSeries(finalSeries);
      const yScale = d3.scaleLinear().domain(yDomain).range([realHeight, 0]);

      setChartContext({
        realHeight,
        realWidth,
        svgRef,
        series: finalSeries,
        yScale,
        xScale,
        xValues
      });
    }
  }, [dimensions]);

  return (
    <ChartContext.Provider value={chartContext}>
      <Container disable={disableContainer} style={style} maxWidth={maxWidth}>
        <ChartTitle title={title} description={description} />
        <ChartContent ref={outerRef}>
          <svg ref={svgRef}>
            <g className={'chart'}>
              <g className={'axis'} />
              <g className={'series'} />
            </g>
          </svg>
        </ChartContent>
        {children}
      </Container>
    </ChartContext.Provider>
  );
};

export default BaseChart;
