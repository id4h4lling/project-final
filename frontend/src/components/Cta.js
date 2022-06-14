import React from "react";
import styled from "styled-components";
import { SignUp } from "./SignUp";

const Background = styled.div`
  .background {
    width: 100%;
    height: 972px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: 30%;
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
    font-size: 40px;
    letter-spacing: 3px;
    drop-shadow: (16px 16px 10px black);
  }
`;

export const Cta = ({ cta }) => {
  console.log(cta.cta);
  return (
    <Background>
      <div
        className="background"
        style={{
          backgroundImage: ` url(${cta.picture.url})`,
        }}
      >
        <Button>
          <button type="button">
            <h1>{cta.cta}</h1>
          </button>
        </Button>
      </div>
    </Background>
  );
};
