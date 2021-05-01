import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import ThemeState from "./context/ThemeState";

ReactDOM.render(
  <ThemeState>
    <App />
  </ThemeState>,
  document.getElementById("App")
);
