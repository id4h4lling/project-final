import React, { useState } from "react";
import styled from "styled-components";

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
export const SignUp = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Form>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <h1 onClick={showSidebar}>JAG VILL VETA NÄR BOKEN SLÄPPS</h1>
      </div>
      <button className="cta-button" type="button" onClick={showSidebar}>
        <h2>JAG VILL VETA NÄR BOKEN SLÄPPS</h2>
      </button>
    </Form>
  );
};
