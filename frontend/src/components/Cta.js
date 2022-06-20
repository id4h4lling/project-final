import React from "react";
import styled from "styled-components";
import { SignUp } from "./SignUp";

const Background = styled.div`
  .background {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
`;

const Button = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 20%;
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  h1 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 50px;
    letter-spacing: 3px;

    /* drop-shadow: (16px 16px 10px black); */
  }
`;

export const Cta = ({ cta, sidebar, showSidebar, hideSidebar }) => {
  console.log(cta.cta);
  return (
    <div className="scroll">
      <Background>
        <div
          className="background"
          style={{
            backgroundImage: ` url(${cta.picture.url})`,
          }}
        >
          <Button onClick={showSidebar}>
            <button type="button">
              <h1>{cta.cta}</h1>
            </button>
          </Button>
        </div>
      </Background>
    </div>
  );
};
