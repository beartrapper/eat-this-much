import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "react-calendar/dist/Calendar.css";

//importing bootstrap for all the components
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
