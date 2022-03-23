import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import forecast from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App location={forecast.location} />
  </React.StrictMode>,
  document.getElementById("root")
);
