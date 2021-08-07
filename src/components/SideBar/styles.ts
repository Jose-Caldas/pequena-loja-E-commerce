import styled, { css } from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.large};
      text-decoration: none;
      font-size:${theme.font.sizes.xxlarge};
      font-weight: bold;
      &:hover {
        color: ${darken(0.2, theme.colors.primary)};
        transform: ${theme.transition.default};
        
      }

      svg {
        margin-right: 2rem;
        width: ${theme.font.sizes.xxlarge};

        &:hover {}
       
  `}
`;

export const Container = styled.div``;
