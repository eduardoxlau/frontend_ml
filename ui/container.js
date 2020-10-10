import styled from "styled-components";
import {
  color,
  background,
  layout,
  border,
  space,
  position,
  flexbox,
  typography,
} from "styled-system";

export const Container = styled.div`
  ${typography}
  ${flexbox}
  ${border}
  ${layout}
  ${color}
  ${background}
  ${space}
  ${position}
  ${(props) =>
    props.flexResponsive &&
    `
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  
  `}
`;
