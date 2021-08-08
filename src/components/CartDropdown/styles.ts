import styled from "styled-components";
import media from "styled-media-query";

import { Wrapper as CartWrapperStyles } from "../CartList/styles";

export const Wrapper = styled.div`
  ${CartWrapperStyles} {
    width: 45rem;

    ${media.lessThan("small")`
    width: 35rem;
    `}
  }
`;
