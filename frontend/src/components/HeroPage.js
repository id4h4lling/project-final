import React from "react";
import { HeroSection } from "theme/HeroPageStyled";
import { Arrow } from "components/Arrow";
// import { BackButtonStyled } from "theme/BackButtonStyled";

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
          <div className="back-button">
            {" "}
            <a href="https://www.idahalling.com/idahalling">
              <button className="button">Tillbaka till idahalling.com</button>
            </a>
          </div>
          <div className="title-section">
            <h4>{hero.topheading}</h4>
            <h1>{hero.mainHeader}</h1>
            <h3>{hero.subheading}</h3>
            <h4>Vinnare av Svensk Bokkonst 2023</h4>
          </div>
          <Arrow />
        </div>
      </HeroSection>
    </div>
  );
};
