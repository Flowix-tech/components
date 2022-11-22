import React, { ReactNode, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components';
import ChartTitle from '../../common/ChartTitle';
import { CommonProps } from '../../types/props';
import Container from '../../components/Container';
import * as d3 from 'd3';
import { getFinalData } from '../../services/data-manipulation';

interface Props extends CommonProps {
  children: React.ReactNode;
}

const ChartContent = styled.div``;

export interface ChartContextI {
  realWidth: number;
  realHeight: number;
  svgRef: React.MutableRefObject<SVGSVGElement>;
  series: { x: string; y: number }[][];
}

export const ChartContext = React.createContext<ChartContextI | undefined>(undefined);

/**
 *  Constants related to chart
 */
const xAxisHeight = 26;
const yAxisWidth = 26;

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
    if (dimensions.height && dimensions.width) {
      // reset
      const { width, height } = dimensions;
      // d3.select(svgRef.current).selectAll("*").remove();
      // Add width and height attribute
      // Add g element for axis and series
      console.log('Creating width height');
      const chart = d3.select(svgRef.current).attr('width', width).attr('height', height);
      // 	.append("g")
      // 	.attr("class","chart");
      // // Axis container
      // chart.append("g").attr("class","axis");
      // // Series container
      // chart.append("g").attr("class",'series');
    }
  }, [dimensions]);

  const value = useMemo(
    () =>
      ({
        realHeight: dimensions.height - xAxisHeight,
        realWidth: dimensions.width - yAxisWidth,
        svgRef: svgRef,
        series: getFinalData(series)
      } as ChartContextI),
    [dimensions, svgRef]
  );

  return (
    <ChartContext.Provider value={value}>
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
        {value.realWidth && value.realHeight && children}
      </Container>
    </ChartContext.Provider>
  );
};

export default BaseChart;
