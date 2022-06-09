import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #24384a;
  width: 100%;
  height: 100vh;

  .picture {
    margin: 15px;
  }
  p {
    font-family: "WremenaRegular";
    color: #edbe44;
  }

  h2 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;

export const TravelPage = ({ travelPage }) => {
  return (
    <Background>
      <h2 className="title">{travelPage.title}</h2>
      <p className="text">{travelPage.travelText}</p>
      <div className="picture">
        <img src={travelPage.picture.url + "?w=1000"} alt="picture" />
      </div>
    </Background>
  );
};
