import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan("medium")`   display: grid;
        grid-template-columns: 26rem 1fr;
        gap: ${theme.grid.gutter};`}
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;

    ${media.greaterThan("medium")`
        grid-template-columns: 2fr 1fr;

        `};
  `}
`;
