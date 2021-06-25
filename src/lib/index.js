import * as colors from "styles/colors";
import * as fonts from "styles/fonts";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body{
      background-color: ${colors.bgColor};
      color: ${colors.fontColor};
      height: 100vh;
      width: 100vw;
      overflow-x: hidden;
      position: relative;
      font-family: ${fonts.secondary};
    
      display: flex;
      flex-direction: column;

      ::-webkit-scrollbar{
        width: 3px;
      }

      ::-webkit-scrollbar-thumb{
        background: rgba(84, 90, 254, 0.1)
      }

      
    }

    ul, ol{
      list-style: none;
    }
`;
