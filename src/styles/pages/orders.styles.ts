import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${theme.grid.gutter};
    overflow-y: auto;
    height: 70vh;
    padding: ${theme.spacings.xlarge};

    ${media.lessThan("large")`
    grid-template-columns: 1fr;
    `}
  `}
`;

export const Orders = styled.div`
  ${media.greaterThan("large")`
    overflow-y: auto;
   
`}
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
  width: 30rem;
  height: 36rem;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;

  ${media.lessThan("large")`
  width: 100%;
  `}
`;
export const Card = styled.div``;

const ItemStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.lightGray};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const CardInfo = styled.span`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;
