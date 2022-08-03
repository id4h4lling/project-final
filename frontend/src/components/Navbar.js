import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { Burger } from "theme/styles";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Burger>
      <Menu
        pageWrapId={"page-wrap"}
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <div id="page-wrap">
          <div className="page-wrap">
            <Link
              id="jewelleryGallery"
              class-name="bm-item"
              to="/jewelleryGallery"
              onClick={closeSideBar}
            >
              Hårsmycken
            </Link>
            <Link
              id="travelPage"
              class-name="bm-item"
              to="/TravelPage"
              onClick={closeSideBar}
            >
              Resorna
            </Link>
            <Link
              id="techniqueGallery"
              class-name="bm-item"
              to="/techniqueGallery"
              onClick={closeSideBar}
            >
              Tekniken
            </Link>
            <Link
              id="video"
              class-name="bm-item"
              to="/video"
              onClick={closeSideBar}
            >
              Video från 1936
            </Link>
            <Link
              id="aboutAuthor"
              class-name="bm-item"
              to="/logout"
              onClick={closeSideBar}
            >
              Om Författaren
            </Link>
          </div>
        </div>
      </Menu>
    </Burger>
  );
};
