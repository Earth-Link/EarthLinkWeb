import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppTest from "./AppTest";
import styles from './styles/Application.scss'; 

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.Fragment>
    <AppTest></AppTest>
  </React.Fragment>
);
