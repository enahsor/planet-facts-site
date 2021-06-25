import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Global } from "lib/index";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>,
  rootElement
);
