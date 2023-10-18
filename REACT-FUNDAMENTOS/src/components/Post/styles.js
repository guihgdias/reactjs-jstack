import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 12px;

  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
    color: ${removed ? 'red' : 'blue'};
  `}
`;

