import styled, { css } from "styled-components";
import { darken } from "polished";
import media from "styled-media-query";

export const Wrapper = styled.menu<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: ${theme.spacings.small};
    position: relative;
    z-index: ${isOpen ? theme.layers.menu : `calc(${theme.layers.menu} - 1)`};

    ${media.lessThan("medium")`
    padding-left: 2rem
    `}
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
  `}
`;
export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    a {
      color: ${theme.colors.white};
      cursor: pointer;
      font-size: ${theme.font.sizes.xlarge};
      text-decoration: none;

      &:hover:first-child {
        color: ${darken(0.2, theme.colors.primary)};
      }
    }
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuNav = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    padding: none;
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
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};

    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${isOpen ? "all" : "none"};
    z-index: ${theme.layers.alwaysOnTop};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};

      transform: ${isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;
