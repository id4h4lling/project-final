import React from "react";
import { ContentBackground } from "theme/ReusableStyle";
import { ContentTravel } from "theme/TravelPageStyled";

export const TravelPage = ({ travelPage }) => {
  return (
    <div className="scroll-center">
      <ContentBackground>
        <div className="wrapper" id="travel">
          <h2 className="title">{travelPage.title}</h2>
          <ContentTravel>
            <div className="text-container">
              <p className="text">{travelPage.travelText}</p>
            </div>
            <div className="image-container">
              <img
                className="picture"
                src={travelPage.picture.url + "?w=800"}
                alt="picture"
              />
            </div>
          </ContentTravel>
        </div>
      </ContentBackground>
    </div>
  );
};
