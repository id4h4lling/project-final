import React from "react";
import styled from "styled-components";
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
    height: 200px;
    width: 70%;
    margin: auto;
    padding-top: 70px;

    @media ${devices.tablet} {
      padding-top: 120px;
    }

    @media ${devices.desktop} {
      margin-left: 0;
      padding-top: 70px;
    }
  }

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 30px;
    letter-spacing: 4px;
    margin: 0px 0px 10px 0px;

    @media ${devices.tablet} {
      font-size: 50px;
    }
  }
  .button {
    position: absolute;
    bottom: 40px;
    right: 40px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 70px;
      right: 70px;
    }
  }

  h3 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 10px;
    letter-spacing: 3px;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 20px;
    }
  }

  h4 {
    font-family: "WremenaLight";
    color: #edbe44;

    @media ${devices.tablet} {
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

          {/* <CtaButton
            className="button"
            showSidebar={showSidebar}
            color={"#24384a"}
            backgroundcolor={"#edbe44"}
          /> */}
        </div>
      </HeroSection>
    </div>
  );
};
