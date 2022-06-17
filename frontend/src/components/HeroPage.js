import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeroSection = styled.div`
  .background {
    width: 100%;
    height: 972px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-evenly; */
    height: 200px;
  }

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 50px;
    letter-spacing: 4px;
    margin: 0px 0px 10px 0px;
  }

  h3 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 20px;
    letter-spacing: 3px;
  }

  h4 {
    font-family: "WremenaLight";
    color: #edbe44;
    margin: 30px 0px 0px 0px;
  }
`;

export const HeroPage = ({ hero }) => {
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
        </div>
      </HeroSection>
    </div>
  );
};
