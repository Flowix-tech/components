import React from 'react';
import styled from 'styled-components';
import { CommonProps } from "../../common/props";
import Container from "../Container";
import ChartTitle from "../../common/ChartTitle";



interface Props extends CommonProps{
  children: React.ReactNode
}

const Wrapper = styled.div`

`;
/**
 * Base chart components which render container styles and possible title and description
 */
const BaseChart:React.FC<Props> = ({
	title,
	description,
	style,
	disableContainer,
	children
}) => {

	return(
		<Container disable={disableContainer} style={style}>
			<ChartTitle title={title} description={description}/>
			{children}
		</Container>
	);
};

export default BaseChart;
