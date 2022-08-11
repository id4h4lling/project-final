import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Burger, NavbarButton } from "theme/styles";
import ScrollIntoView from "react-scroll-into-view";

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
        right
        pageWrapId={"page-wrap"}
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <div id="page-wrap">
          <div className="page-wrap">
            <ScrollIntoView selector="#hårsmycken">
              <NavbarButton onClick={closeSideBar}>Hårsmycken</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#resorna">
              <NavbarButton onClick={closeSideBar}>Resorna</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#teknik">
              <NavbarButton onClick={closeSideBar}>Tekniken</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#video">
              <NavbarButton onClick={closeSideBar}>
                Video från 1936
              </NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#författare">
              <NavbarButton onClick={closeSideBar}>Författaren</NavbarButton>
            </ScrollIntoView>
          </div>
        </div>
      </Menu>
    </Burger>
  );
};
