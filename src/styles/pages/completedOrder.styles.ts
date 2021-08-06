import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 5rem;

  ${media.lessThan("huge")`
flex-direction: column;
  img{
    width: 35rem;
  };
 
  `}
`;

export const Content = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  margin-left: 5rem;
  box-shadow: 0 0 8px 1px white;

  ${media.lessThan("huge")`
  margin-top: 5rem;

  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 20px;

    footer {
      text-align: end;
      background-color: ${theme.colors.secondary};
      padding: 2rem;
      box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
  `}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-bottom: 2rem;
  margin-top: 2rem;
`;
