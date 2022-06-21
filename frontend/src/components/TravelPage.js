import React from "react";
import styled from "styled-components";
import { CtaButton } from "./CtaButton";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  background-color: #24384a;
  min-height: 100vh;
  position: relative;

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 150px;
  }
  .button {
    position: absolute;
    bottom: 20px;
    right: 20px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 500px;
      right: 50px;
    }
  }

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

    font-size: 18px;

    line-height: 35px;

    @media ${devices.desktop} {
      font-size: 25px;
      padding: 0 0 80 0;
    }
  }

  .map-image {
    @media ${devices.desktop} {
      width: auto;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 180px 0 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.desktop} {
  }
`;

export const TravelPage = ({ travelPage, showSidebar }) => {
  return (
    <div className="scroll">
      <Background>
        <div className="wrapper">
          <h2 className="title">{travelPage.title}</h2>
          <Content>
            <p className="text">{travelPage.travelText}</p>

            <img
              className="map-image"
              src={travelPage.picture.url + "?w=1500"}
              alt="picture"
            />
          </Content>
        </div>
        <CtaButton
          className="button"
          showSidebar={showSidebar}
          color={"#24384a"}
          backgroundcolor={"#edbe44"}
        />
      </Background>
    </div>
  );
};
