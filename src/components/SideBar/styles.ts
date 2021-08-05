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
      &:hover {
        color: ${darken(0.2, theme.colors.primary)};
        transform: ${theme.transition.default};
        
      }

      h2 {
        margin-left: 2rem;
        position: relative;

        &:hover {}
       
  `}
`;

export const Container = styled.div``;
