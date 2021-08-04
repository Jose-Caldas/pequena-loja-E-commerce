import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Container } from "../../components/Container";

export const Wrapper = styled.div``;
export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    overflow-y: auto;
  `}
`;

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan("medium")`   display: grid;
        grid-template-columns: 26rem 1fr;
        gap: ${theme.grid.gutter};`}
  `}
  .image img {
    width: 60px;
  }
`;
