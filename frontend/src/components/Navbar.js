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
            <ScrollIntoView selector="#start">
              <NavbarButton onClick={closeSideBar}>Start</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#hairjwellery">
              <NavbarButton onClick={closeSideBar}>Hårsmycken</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#travel">
              <NavbarButton onClick={closeSideBar}>Resorna</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#technique">
              <NavbarButton onClick={closeSideBar}>Tekniken</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#video">
              <NavbarButton onClick={closeSideBar}>
                Video från 1936
              </NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#author">
              <NavbarButton onClick={closeSideBar}>Författaren</NavbarButton>
            </ScrollIntoView>

            <ScrollIntoView selector="#contact">
              <NavbarButton onClick={closeSideBar}>Kontakt</NavbarButton>
            </ScrollIntoView>
          </div>
        </div>
      </Menu>
    </Burger>
  );
};
