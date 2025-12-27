import { createRoot } from "react-dom/client";
import MainRouter from "./MainRouter";
import "./index.css";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
