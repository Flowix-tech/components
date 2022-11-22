import React from 'react';
import styled from 'styled-components';

const ChartTitleHeading = styled.h5`
  font-size: 17px;
  font-family: var(--font-family-heading, inherit);
  font-weight: 500;
`;

const ChartTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

interface ChartTitleProps {
  title?: string;
  description?: string;
}

const ChartTitle: React.FC<ChartTitleProps> = ({ title, description }) => {
  return (
    title && (
      <ChartTitleContainer>
        <ChartTitleHeading>{title}</ChartTitleHeading>
      </ChartTitleContainer>
    )
  );
};

export default ChartTitle;
