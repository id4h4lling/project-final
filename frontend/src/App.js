import React from "react";
import StartPage from "components/StartPage";
import { Policy } from "components/Policy";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  HashRouter,
  Navigate,
} from "react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </HashRouter>
  );
};
