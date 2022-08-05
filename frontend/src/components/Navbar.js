import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { Burger } from "theme/styles";
import ScrollTo from "react-scroll-into-view";

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
              id="smycken"
              class-name="bm-item"
              to="/smycken"
              onClick={closeSideBar}
            >
              {" "}
              Hårsmycken
            </Link>
            <Link
              id="resorna"
              class-name="bm-item"
              to="/resorna"
              onClick={closeSideBar}
            >
              Resorna
            </Link>
            <Link
              id="tekniken"
              class-name="bm-item"
              to="/tekniken"
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
              id="författare"
              class-name="bm-item"
              to="/författare"
              onClick={closeSideBar}
            >
              Författaren
            </Link>
          </div>
        </div>
      </Menu>
    </Burger>
  );
};
