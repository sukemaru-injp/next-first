import styled from "styled-components";
import { mediaQuery } from "../../styles/mixin";

export const Page = styled.div`
padding: 40px;

  ${mediaQuery('mobile', `
    padding: 20px;
  `)}
`
