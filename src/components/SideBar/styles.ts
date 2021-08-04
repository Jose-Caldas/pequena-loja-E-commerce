import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.large};
      text-decoration: none;

      h2 {
        margin-left: 2rem;
        position: relative;

        &:hover {
          &::after {
            content: "";
            position: absolute;
            display: block;
            height: 0.3rem;
            background-color: ${theme.colors.primary};
            animation: hoverAnimation 0.2s forwards;
          }
          @keyframes hoverAnimation {
            from {
              width: 0;
              left: 50%;
            }
            to {
              width: 100%;
              left: 0;
            }
          }
        }
      }
    }
  `}
`;

export const Container = styled.div``;
