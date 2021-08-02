import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25rem 1fr;
  margin-left: auto;
  margin-right: auto;

  padding: 6rem;

  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
   padding: 2rem;
  `}
`;
