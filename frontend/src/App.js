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
import { JewelleryGallery } from "components/JewelleryGallery";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/policy/:id" element={<Policy />} />
        <Route path="/jewelleryGallery" element={<JewelleryGallery />} />
      </Routes>
    </BrowserRouter>
  );
};
