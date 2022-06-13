import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const SignUp = () => {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);

  const [useremail, setUserEmail] = useState("");

  const backGroundLayerOn = () => {
    document.body.style.opacity = "0.8";
    document.getElementsByClassName("sidebar.active").style.opacity = "1";
  };
  const backGroundLayerOff = () => {
    document.body.style.opacity = "1";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        useremail: useremail,
      }),
    };
    fetch("http://localhost:8080/signup", options)
      .then((res) => res.json())
      .then(() => setUserEmail(""))
      .finally(() => setSidebar(!sidebar));
    backGroundLayerOff();
  };
  const showSidebar = () => {
    setSidebar(!sidebar);
    backGroundLayerOn();
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (sidebar && ref.current && !ref.current.contains(e.target)) {
        setSidebar(false);
        backGroundLayerOff();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sidebar]);

  return (
    <Form ref={ref}>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <h3>Sign up for news about the bookrelease!</h3>
        <form onSubmit={onFormSubmit}>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <button className="button-25" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div class="circle medium">
        <button className="cta-button" type="button" onClick={showSidebar}>
          <h2>Signup!</h2>
        </button>
      </div>
    </Form>
  );
};

const Form = styled.div`
  .sidebar {
    position: fixed;
    top: 100px;
    left: -500px;
    width: 500px;
    height: 60%;
    background-color: #24384a;
    transition: left 700ms ease-out;
    border: solid 2px #e3b921;
  }
  .sidebar.active {
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;
  }

  .cta-button {
    border: none;
    right: 40px;
    outline: 0;
    width: auto;
    position: fixed;
    top: 100px;
    background-color: #24384a;
    font-family: "WremenaLight";
    color: #edbe44;
    padding: 20px;
  }
`;
