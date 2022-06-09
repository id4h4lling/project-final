import React from "react";
import StartPage from "components/StartPage";
import { Policy } from "components/Policy";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
};
