import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    text-align: center;
    padding: ${theme.spacings.medium};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 25rem;
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 400;
  `}
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
