import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SignUp } from "./SignUp";
import { CtaButton } from "./CtaButton";
const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const HeroSection = styled.div`
  .background {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    position: relative;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-evenly; */
    height: 200px;
    width: 70%;
    margin: auto;
    padding-top: 70px;

    @media ${devices.desktop} {
      margin-left: 0;
    }
  }

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 30px;
    letter-spacing: 4px;
    margin: 0px 0px 10px 0px;

    @media ${devices.desktop} {
      font-size: 50px;
    }
  }
  .button {
    position: absolute;
    bottom: 20px;
    right: 20px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 50px;
      right: 50px;
    }
  }

  h3 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 10px;
    letter-spacing: 3px;
    text-align: center;

    @media ${devices.desktop} {
      font-size: 20px;
    }
  }

  h4 {
    font-family: "WremenaLight";
    color: #edbe44;

    @media ${devices.desktop} {
      font-size: 20px;
    }
  }
`;

export const HeroPage = ({ hero, showSidebar }) => {
  return (
    <div className="scroll">
      <HeroSection>
        <div
          className="background"
          style={{
            backgroundImage: ` url(${hero.heroimage.url})`,
          }}
        >
          <div className="title-section">
            <h4>{hero.topheading}</h4>
            <h1>{hero.mainHeader}</h1>
            <h3>{hero.subheading}</h3>
          </div>

          <CtaButton
            className="button"
            showSidebar={showSidebar}
            color={"red"}
            backgroundcolor={"#edbe44"}
          />
        </div>
      </HeroSection>
    </div>
  );
};
