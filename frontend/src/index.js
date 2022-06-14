import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import StartPage from "components/StartPage";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
