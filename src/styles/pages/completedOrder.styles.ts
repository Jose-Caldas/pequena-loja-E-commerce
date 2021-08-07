import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg {
      fill: ${theme.colors.secondary};
      margin: ${theme.spacings.large} 0;
    }
  `}
`;
