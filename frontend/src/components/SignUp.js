import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import X from "icons/X.svg";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const SignUp = ({
  setSidebar,
  sidebar,
  showSidebar,
  hideSidebar,
  showThankYou,
  setShowThankYou,
}) => {
  const ref = useRef();
  const resetSidebarContent = () => {
    () => setShowThankYou(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (sidebar && ref.current && !ref.current.contains(e.target)) {
        hideSidebar();

        document.getElementById("overlay").style.display = "none";
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sidebar]);

  return (
    <>
      <StyledForm ref={ref}>
        <div
          style={{ zIndex: "101" }}
          className={sidebar ? "sidebar active" : "sidebar"}
        >
          <DeleteButton onClick={hideSidebar}>
            {" "}
            <span role="img" aria-label="delete">
              <img className="X" src={X} alt="close" />
            </span>
          </DeleteButton>
          <Form
            showThankYou={showThankYou}
            setShowThankYou={setShowThankYou}
            resetSidebarContent={resetSidebarContent}
          />
        </div>
      </StyledForm>
      <StyledOverlay>
        <div
          id="overlay"
          className="overlay"
          onClick={hideSidebar}
          style={{ display: "none" }}
        ></div>
      </StyledOverlay>
    </>
  );
};

const StyledForm = styled.div`
  .sidebar {
    position: fixed;
    top: 50px;
    left: -700px;
    width: 250px;
    height: 60%;
    background-color: #24384a;
    transition: left 700ms ease-out;
    border: solid 2px #e3b921;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;

    @media ${devices.tablet} {
      width: 500px;
      height: 60%;
      top: 100px;
    }
  }
  .sidebar.active {
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: center;

    @media ${devices.tablet} {
      padding: 20px;
    }
  }

  .overlay {
    position: fixed;
    padding: 0;
    margin: 0;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: rgba(37, 36, 36, 0.7);
    z-index: 100;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  height: 10px;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  .X {
    width: 12px;
  }
`;
const StyledOverlay = styled.div`
  .overlay {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(37, 36, 36, 0.7);
    z-index: 100;
  }
`;
