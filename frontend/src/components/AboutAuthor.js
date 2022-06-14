import React from "react";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

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
        {documentToReactComponents(aboutAuthor.authorBio.json)}
        {/* <p>{aboutAuthor.authorBio.json.content[0].content[0].value}</p> */}
      </Content>
    </Background>
  );
};
