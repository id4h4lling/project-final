import { useEffect, useRef } from "react";
import { FormStyled, DeleteButton, StyledOverlay } from "theme/styledForm";
import { Form } from "./Form";

export const SignUp = ({
  sidebar,
  hideSidebar,
  showThankYou,
  setShowThankYou,
}) => {
  const ref = useRef();
  const resetSidebarContent = () => {
    () => setShowThankYou(false);
    FormStyled;
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (sidebar && ref.current && !ref.current.contains(e.target)) {
        hideSidebar();

        document.getElementById("overlay").style.display = "none";
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sidebar]);

  return (
    <>
      <FormStyled ref={ref}>
        <div
          style={{ zIndex: "101" }}
          className={sidebar ? "sidebar active" : "sidebar"}
        >
          <DeleteButton onClick={hideSidebar}>
            {" "}
            <span aria-label="delete" className="X">
              x
            </span>
          </DeleteButton>
          <Form
            showThankYou={showThankYou}
            setShowThankYou={setShowThankYou}
            resetSidebarContent={resetSidebarContent}
          />
        </div>
      </FormStyled>
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
