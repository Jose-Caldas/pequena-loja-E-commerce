import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.large};

    ${media.lessThan("huge")`
    grid-template-columns: 1fr
    `}
  `}
`;
