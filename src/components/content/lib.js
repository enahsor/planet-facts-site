import styled from "styled-components";
import * as mq from "styles/media-queries";
import * as fonts from "styles/fonts";

export const Container = styled.main`
  display: grid;
  margin: 0 auto;
  max-width: 85%;

  div:first-of-type {
    margin: 0 auto;
    height: 200px;
  }

  img {
    width: 24ch;
    margin-bottom: 4ch;
  }

  ${mq.small} {
    grid-template-rows: repeat(3, auto);
    grid-gap: 30px;
  }

  section {
    h1 {
      text-transform: uppercase;
      font-size: 8ch;
      margin-bottom: 1.5ch;
    }
    p {
      font-family: ${fonts.primary};
      line-height: 2.1;
      word-spacing: 2px;
    }
    ${mq.small} {
      text-align: center;
    }
  }

  aside {
    li {
      padding: 15px;
      border: 1px solid rgba(255, 255, 255, 0.5);
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
      }
    }
  }
`;
