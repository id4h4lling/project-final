import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #24384a;
  /* min-height: 100vh; */

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
export const AboutAuthor = ({ aboutAuthor }) => {
  console.log(
    "ABOUT AUTHOR",
    aboutAuthor.authorBio.json.content[0].content[0].value
  );

  return (
    <Background>
      <h2>{aboutAuthor.title}</h2>
      <Content>
        <img src={aboutAuthor.authorPicture.url + "?w=200"} alt="picture" />
        <p>{aboutAuthor.authorBio.json.content[0].content[0].value}</p>
      </Content>
    </Background>
  );
};
