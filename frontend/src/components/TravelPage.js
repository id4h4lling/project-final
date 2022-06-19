import React from "react";
import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  background-color: #24384a;
  width: 100%;
  min-height: 100vh;
  padding: 90px;

  h2 {
    font-family: "WremenaRegular";
    color: #24384a;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #edbe44;
    padding: 30px 40px;
    display: inline;
  }

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
    width: 80%;
    font-size: 18px;
    text-align: left;
    line-height: 35px;

    @media ${devices.desktop} {
      font-size: 25px;
      width: 40%;
    }
  }

  .map-image {
    width: 80%;
    margin: 50px auto 100px auto;

    @media ${devices.desktop} {
      width: 50%;
      margin: auto;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.desktop} {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const TravelPage = ({ travelPage }) => {
  return (
    <div className="scroll">
      <Background>
        <h2 className="title">{travelPage.title}</h2>
        <Content>
          <p className="text">{travelPage.travelText}</p>

          <img
            className="map-image"
            src={travelPage.picture.url + "?w=1500"}
            alt="picture"
          />
        </Content>
      </Background>
    </div>
  );
};
