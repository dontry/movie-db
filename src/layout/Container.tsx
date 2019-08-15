import styled from "styled-components";
import { space, layout, LayoutProps } from "styled-system";

export const Container = styled("div")<LayoutProps>`
  margin: 0 auto;
  width: 80vw;
  max-width: 1800px;
  min-width: 600px;
  ${space}
  ${layout}
`;
