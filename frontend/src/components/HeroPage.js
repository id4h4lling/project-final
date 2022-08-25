import React from "react";
import { HeroSection } from "theme/HeroPageStyled";
import { Arrow } from "components/Arrow";

export const HeroPage = ({ hero }) => {
  return (
    <div className="scroll-start">
      <HeroSection id="start">
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
          <Arrow />
        </div>
      </HeroSection>
    </div>
  );
};
