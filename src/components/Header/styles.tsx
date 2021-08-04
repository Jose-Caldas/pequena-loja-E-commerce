import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.white};
    padding-top: ${theme.spacings.small};

    a {
      text-decoration: none;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
