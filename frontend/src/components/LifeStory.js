import React from "react";
import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  background-color: #24384a;
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
    font-size: 20px;
    text-align: left;
    line-height: 35px;

    @media ${devices.desktop} {
      font-size: 20px;
      padding-right: 90px;
      padding-left: 90px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
  text-align: center;

  .lifestory-image {
    width: 90%;
    margin-top: 50px;
  }

  @media ${devices.desktop} {
    font-size: 20px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    padding: 70px;
  }
`;

export const LifeStory = ({ lifeStory }) => {
  console.log(lifeStory.url);
  return (
    <div className="scroll">
      <Background>
        <h2>{lifeStory.title}</h2>
        <Content>
          <p>{lifeStory.text.json.content[0].content[0].value}</p>
          <img
            className="lifestory-image"
            src={lifeStory.picture.url + "?w=500"}
            alt="picture"
          />
        </Content>
      </Background>
    </div>
  );
};
