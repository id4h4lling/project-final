import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  HashRouter,
  Navigate,
} from "react-router-dom";

import StartPage from "components/StartPage";
import { Navbar } from "components/Navbar";
import { Policy } from "components/Policy";
import { JewelleryGallery } from "components/JewelleryGallery";
import { TravelPage } from "components/TravelPage";
import { Video } from "components/Video";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<StartPage />}></Route>
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
