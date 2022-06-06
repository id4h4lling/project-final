import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  .background {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #edbe44;
  }

  h3 {
    color: #edbe44;
  }

  h4 {
    color: #edbe44;
  }
`;

export const HeroPage = ({ hero }) => {
  return (
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
  );
};
