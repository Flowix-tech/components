import React from 'react';
import styled from 'styled-components';

export interface TableProps {}

const Wrapper = styled.div`
  color: #000066;
`;

const Table: React.FC<TableProps> = ({}) => {
  return (
    <Wrapper>
      <h2>Table</h2>
      <h3>New</h3>
    </Wrapper>
  );
};

export default Table;
