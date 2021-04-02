import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import(/* webpackPreload: true */ "./fonts/gt-pressura-bold.woff");
import(/* webpackPreload: true */ "./fonts/gt-pressura-regular.woff");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
