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
  }

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
  }
`;
export const AboutAuthor = ({ aboutAuthor }) => {
  console.log(
    "ABOUT AUTHOR",
    aboutAuthor.authorBio.json.content[0].content[0].value
  );

  return (
    <Background>
      <h2>{aboutAuthor.title}</h2>
      <img src={aboutAuthor.authorPicture.url + "?w=200"} alt="picture" />
      <p>{aboutAuthor.authorBio.json.content[0].content[0].value}</p>
    </Background>
  );
};
