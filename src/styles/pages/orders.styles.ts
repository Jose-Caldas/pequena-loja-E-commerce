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

export const Orders = styled.div``;
export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  /* background-color: gray; */
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 6rem; */
  /* margin-bottom: 6rem; */

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
export const Card = styled.div`
  /* margin-top: 1rem; */
`;
