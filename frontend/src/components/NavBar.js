import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { JewelleryGallery } from "./JewelleryGallery";

export const NavBar = () => {
  //...
  return (
    <Link to="home-page#Smycken">
      <JewelleryGallery />
      Smycken
    </Link>
  );
};
