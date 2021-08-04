import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    li {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.large};

      h2 {
        margin-left: 2rem;
      }
    }
  `}
`;
