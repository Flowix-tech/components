import styled, { css } from 'styled-components';

const Container = styled.div<{ disable?: boolean; maxWidth?: number }>`
  height: 100%;
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : 'none')};

  ${props =>
    !props.disable &&
    css`
      padding: 16px;
      border-radius: 6px;
      background-color: var(--color-surface, #eceef3);
      margin-bottom: 30px;
    `}
`;

export default Container;
