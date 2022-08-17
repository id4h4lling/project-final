import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "components/StartPage";
import { Policy } from "components/Policy";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartPage />}></Route>

        <Route path="/policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
};
