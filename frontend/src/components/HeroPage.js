import React from "react";
import { HeroSection } from "theme/styles";

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
