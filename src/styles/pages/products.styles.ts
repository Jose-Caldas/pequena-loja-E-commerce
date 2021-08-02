import styled, { css } from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    overflow-y: auto;
  `}
`;
