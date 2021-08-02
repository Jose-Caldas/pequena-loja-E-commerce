import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};
  `}
`;
