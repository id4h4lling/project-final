import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #24384a;
  width: 100%;
  height: auto;

  h2 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 30px;
  }

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
    padding: 30px 0px;
    width: 600px;
    font-size: 20px;
  }
`;

const Content = styled.div`
  padding: 80px 150px;
`;

export const TravelPage = ({ travelPage }) => {
  return (
    <div className="scroll">
      <Background>
        <h2 className="title">{travelPage.title}</h2>
        <Content>
          <p className="text">{travelPage.travelText}</p>
          <div className="picture">
            <img src={travelPage.picture.url + "?w=1000"} alt="picture" />
          </div>
        </Content>
      </Background>
    </div>
  );
};
