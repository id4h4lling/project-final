import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  .background {
    width: 100%;
    height: 972px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-evenly; */
    height: 200px;
  }

  h2 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 20px;
    letter-spacing: 3px;
  }
`;

export const HeroPage = ({ hero }) => {
  return (
    <Background>
      <div className="title-section">
        <h2>{hero.topheading}</h2>
      </div>
    </Background>
  );
};
