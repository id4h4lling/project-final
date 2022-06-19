import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

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
    width: 500px;
  }
  .intro {
    color: aqua;
    margin-bottom: 40px;
    margin-left: 70px;
  }
  .citat {
    color: yellow;

    margin-left: 70px;
  }
`;

const Content = styled.div`
  width: 1200px;
  padding: 70px;
  display: flex;
`;
export const AboutAuthor = ({ aboutAuthor }) => {
  console.log(
    "ABOUT AUTHOR",
    aboutAuthor.authorBio.json.content[0].content[0].value
  );

  const Text = ({ children }) => <h3 className="citat">{children}</h3>;

  const Bla = ({ children }) => <h4 className="intro">{children}</h4>;
  const options = {
    renderMark: {
      //  [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      //[MARKS.BOLD]: (text) => <div style={{fontSize:"28px", color:"red", width:"50%"}}>{text}</div>,
      // [MARKS.ITALIC]: (text) => <div style={{fontSize:"22px", color:"blue", width:"50%"}}>{text}</div>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (_node, children) => <Bla>{children}</Bla>,
    },
  };

  return (
    <div className="scroll">
      <Background>
        <h2>{aboutAuthor.title}</h2>
        <Content>
          <img src={aboutAuthor.authorPicture.url + "?w=400"} alt="picture" />
          <div>
            {documentToReactComponents(aboutAuthor.authorBio.json, options)}
          </div>
          {/* {documentToReactComponents(aboutAuthor.authorBio.json)} */}
          {/* <p>{aboutAuthor.authorBio.json.content[0].content[0].value}</p> */}
        </Content>
      </Background>
    </div>
  );
};
