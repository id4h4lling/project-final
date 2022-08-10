import React from "react";
import { ContentBackground } from "theme/reusable";
import { ContentTravel } from "theme/styles";

export const TravelPage = ({ travelPage }) => {
  return (
    <div className="scroll">
      <ContentBackground>
        <div className="wrapper" id="resorna">
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
