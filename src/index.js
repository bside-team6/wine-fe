import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root")
);
