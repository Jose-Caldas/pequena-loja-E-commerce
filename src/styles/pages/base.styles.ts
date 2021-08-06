import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 6rem;

  ${media.greaterThan("medium")`
 grid-template-columns: 26rem 1fr;
 `}
`;
export const Section = styled.section`
  background-color: white;
  padding: 2rem;
`;
