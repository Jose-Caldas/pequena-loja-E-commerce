import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan("medium")`
      display: flex;

    `}
  `}
`;
export const Container = styled.div`
  display: flex;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  &:hover {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 9.6rem;
    height: 5.6rem;

    img {
      width: 7rem;
      height: 7rem;
    }

    ${media.greaterThan("medium")`
      margin-right: ${theme.spacings.xsmall};
      width: 20rem;
      height: 7rem;
    `};
  `}
`;
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
    ${media.greaterThan("medium")`
      font-size: 2rem;
      line-height: 2rem;
    `};
  `}
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Remove = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    margin-left: 2rem;
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 0.2rem ${theme.spacings.xxsmall};
    background-color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`;
