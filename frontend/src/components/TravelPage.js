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
    padding-top: 80px;

    @media ${devices.desktop} {
      padding-top: 150px;
    }
  }

  .button {
    position: absolute;
    bottom: 40px;
    right: 40px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 70px;
      right: 70px;
    }
  }

  h2 {
    font-family: "WremenaRegular";
    color: #24384a;
    font-size: 18px;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #edbe44;
    padding: 20px 30px;
    display: inline;

    @media ${devices.desktop} {
      font-size: 30px;
      letter-spacing: 3px;
      padding: 20px 30px;
    }
  }

  .text {
    font-family: "WremenaRegular";
    color: #edbe44;

    padding: 0 0 80px 0;
    font-size: 18px;
    text-align: center;
    line-height: 35px;

    @media ${devices.desktop} {
      font-size: 25px;
      text-align: left;
      width: 80%;
    }
  }

  .map-image {
    width: 90%;
    margin: auto;
    @media ${devices.desktop} {
      width: 80%;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 120px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.desktop} {
    padding: 180px 0 200px 0;
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
