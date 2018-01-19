import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const mountNode = document.querySelector(".js-mount");

ReactDom.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  mountNode
);
