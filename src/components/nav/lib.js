import styled from "styled-components";
import { animated } from "react-spring";
import * as mq from "styles/media-queries";
import * as colors from "styles/colors";
import * as fonts from "styles/fonts";

export const MenuItem = styled.li`
  color: ${props => props.$isActive ? props.$accent : null};
  
`

export const HiddenMenu = styled(animated.ul)`
  position: fixed;
  background-color: ${(props) => props.$accent};
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  font-size: 2ch;
  justify-content: center;
  z-index: 1;
  font-family: ${fonts.primary};
  font-weight: bold;
  outline: none;
  > li {
    padding: 12px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2ch;
    padding-left: 2ch;
    transition: background 0.3s;
    :hover {
      background-color: ${colors.secondaryColor};
    }
  }
`;

export const Container = styled.header`
  nav > ul {
    text-transform: uppercase;
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    > li {
      font-weight: bolder;
      line-height: 15px;
      user-select: none;
    }

    > span {
      display: flex;

      svg {
        display: none;
        cursor: pointer;
      }

      > li {
        margin-left: 25px;
        font-size: 1.7ch;
        font-family: ${fonts.primary};
        opacity: 0.8;
        cursor: pointer;
        
      }

    }

    ${mq.medium}{
        flex-direction: column;
        > li {
          font-size: 3.5ch;
          padding: 3ch 0ch 4ch 0ch;
        }

        > span{
         width: 100%;
         justify-content: space-around;
         letter-spacing: 1px;
         margin-bottom: 1ch;
        }
    }

    ${mq.small} {
      > li {
        font-size: 4ch;
      }

      > span {
        > li {
          display: none;
        }
        svg {
          display: block;
          cursor: pointer;
        }
      }
    }
  }
`;
