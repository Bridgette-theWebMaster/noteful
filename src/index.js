import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faTrashAlt,
  faCheckDouble,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";

library.add(faPlus, faCaretLeft, faTrashAlt, faCheckDouble);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
