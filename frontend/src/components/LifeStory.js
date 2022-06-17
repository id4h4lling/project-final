import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #24384a;

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
    font-size: 20px;
    width: 500px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1200px;
  padding: 70px;
`;

export const LifeStory = ({ lifeStory }) => {
  console.log(lifeStory.url);
  return (
    <div className="scroll">
      <Background>
        <h2>{lifeStory.title}</h2>
        <Content>
          <p>{lifeStory.text.json.content[0].content[0].value}</p>
          <img src={lifeStory.picture.url + "?w=500"} alt="picture" />
        </Content>
      </Background>
    </div>
  );
};
