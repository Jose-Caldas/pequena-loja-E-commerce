import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${theme.grid.gutter};
    overflow-y: auto;
    height: 70vh;
    padding: 2rem;

    ${media.lessThan("large")`
    grid-template-columns: 1fr;
    `}
  `}
`;

export const Orders = styled.div`
  overflow-y: auto;
`;
export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-right: 2rem;
  }
`;

export const Box = styled.div`
  display: flex;
  height: 35rem;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  padding: 3rem;

  ${media.lessThan("large")`
  width: 100%;
  `}
`;
export const Card = styled.div``;
