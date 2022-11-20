import styled, { css } from "styled-components";


const Container = styled.div<{disable?:boolean}>`
  display: inline-block;
  height: 100%;
  ${(props) => !props.disable && css`
    padding: 16px;
    border-radius: 6px;
    background-color: var(--color-surface,#eceef3);
    margin-bottom: 30px;
  ` }
`;


export default Container;
