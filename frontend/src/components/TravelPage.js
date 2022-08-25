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
            <p className="content-text">{travelPage.travelText}</p>

            <img
              className="content-image"
              src={travelPage.picture.url + "?w=800"}
              alt="picture"
            />
          </ContentTravel>
        </div>
      </ContentBackground>
    </div>
  );
};
