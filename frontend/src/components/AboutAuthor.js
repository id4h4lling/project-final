import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { CtaButton } from "./CtaButton";

// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Background = styled.div`
  background-color: #24384a;
  min-height: 100vh;

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 150px;
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
    width: 500px;
  }
  .intro {
    color: #edbe44;
    margin-bottom: 40px;
    margin-left: 70px;
    line-height: 30px;
  }
  .citat {
    color: #edbe44;
    white-space: pre-wrap;
    margin-left: 70px;
    line-height: 35px;
  }
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 180px 0 200px 0;
  display: flex;
`;
export const AboutAuthor = ({ aboutAuthor, showSidebar }) => {
  console.log(
    "ABOUT AUTHOR",
    aboutAuthor.authorBio.json.content[0].content[0].value
  );

  const Text = ({ children }) => <div className="citat">{children}</div>;

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
        <div className="wrapper">
          <h2>{aboutAuthor.title}</h2>
          <Content>
            <img src={aboutAuthor.authorPicture.url + "?w=400"} alt="picture" />
            <div>
              {documentToReactComponents(aboutAuthor.authorBio.json, options)}
            </div>
          </Content>
        </div>
      </Background>
    </div>
  );
};
