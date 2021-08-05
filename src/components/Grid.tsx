import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Grid = styled.div`
  ${({ theme }) => css`
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
    background-color: white;
    padding: ${theme.spacings.xsmall};
    overflow-y: auto;

    ${media.lessThan("medium")`
    padding: 0;`}
  `}
`;
