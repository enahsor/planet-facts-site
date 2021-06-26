import styled from "styled-components";
import * as mq from "styles/media-queries";
import * as fonts from "styles/fonts";

export const Section = styled.li`
  background-color: ${(props) => props.$isActive ? props.$accent : null};
  border: ${(props) => props.$isActive ? null : "1px solid rgba(255, 255, 255, 0.5)"}
`

export const Container = styled.main`
  display: grid;
  margin: 0 auto;
  max-width: 85%;
  overflow: hidden;

  > ul{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-family: ${fonts.primary};
    font-weight: bold;

      li{
      text-transform: uppercase;
      font-size: 10px;
      padding: 15px 20px;
      
      margin-bottom: 20px;
    }
  }

  div:first-of-type {
    
    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    margin-top: 2ch;
    margin: 0 auto;
    margin-bottom: 3ch;
    
    img{
      max-width: 100%;
    }
    
  }



  section {
    h1 {
      text-transform: uppercase;
      font-size: 8ch;
      margin-bottom: 1.5ch;
      font-weight: normal;
    }
    p, figcaption {
      font-family: ${fonts.primary};
      line-height: 2.1;
      word-spacing: 2px;
    }

    figcaption{
      display: flex;
      justify-content: center;
      opacity: 0.5;

      span{
        font-weight: lighter;
      }

      a{
        color: white;
        font-weight: bold;
        font-style: normal;
      }

      cite{
      display: flex;
      
      align-items: center;
      }

      svg{
        margin-left: 0.5ch;
      }
  
    }

    p{
      margin-bottom: 1ch;
    }

    ${mq.small} {
      text-align: center;
    }
  }

  aside {
    li {
      padding: 15px 30px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 1.5ch;
        font-family: ${fonts.primary};
        color: rgba(255, 255, 255, 0.6);
      }

      span {
        font-size: 4ch;
        opacity: 0.9;
      }
    }
  }

  ${mq.medium}{

    grid-template-rows: 300px auto auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    "planet planet"
    "text sections"
    "summary summary";
    grid-gap: 30px;

    div:first-of-type{
      
      grid-area: planet;
      margin-bottom: 3ch;
      img{
        width: 100%;
        object-fit: contain;
        max-height: 100%;
      }
    }

    section{
      grid-area: text;

      h1{
        font-size: 8ch;
      }
      p{
        font-size: 2ch;
      }
      figcaption{
        justify-content: flex-start;
      }
    }

    aside{
      grid-area: summary;
      margin-bottom: 30px;
      ul{
      
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2.5ch;
      }

      li{
        flex-direction: column;
        align-items: start;
        h2{
          font-size: 8px;
          padding: 8px 0px;
        }
        span{
          font-size: 3ch;
        }
      }

    }

    > ul{
      padding-left: 30px;
      grid-area: sections;
    }


  }

  ${mq.small} {
    grid-template-rows: repeat(3, auto);
    grid-gap: 30px;

      > ul{
        display: none;
      }
  }

  
`;
