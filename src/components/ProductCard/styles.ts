import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`;
export const ImageBox = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    min-height: 14rem;
    position: relative;
    width: 100%;
    background: ${theme.colors.darkGray};
    padding: 20px;
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;
export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`;
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;
export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: ${theme.spacings.xxsmall};

    span {
      /* background-color: ${theme.colors.secondary}; */
      color: ${theme.colors.white};
      padding: 0.6rem ${theme.spacings.xsmall};
      font-weight: ${theme.font.bold};

      border: none;
      border-radius: ${theme.border.radius};
    }
  `}
`;
export const Price = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkGray};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    border-radius: ${theme.border.radius};
  `}
`;
