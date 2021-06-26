import styled from "styled-components";
import * as mq from "styles/media-queries";
import * as fonts from "styles/fonts";
import * as colors from "styles/colors";

export const Container = styled.ul`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  visibility: hidden;
  display: flex;
  justify-content: space-evenly;
  font-size: 1ch;
  font-weight: bold;
  font-family: ${fonts.primary};
  margin-bottom: 8ch;

  ${mq.small} {
    visibility: visible;
  }
`;

export const Section = styled.li`
  text-transform: uppercase;
  padding: 20px 10px;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? 1 : 0.4)};
  border-bottom: ${(props) =>
    props.$isActive ? `3px solid ${props.$accent}` : null};
`;
