import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { CtaButton } from "./CtaButton";

// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Background = styled.div`
  background-color: #24384a;
  min-height: 100vh;
  position: relative;

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

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 90px;

    @media ${devices.desktop} {
      padding-top: 150px;
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

  .intro {
    color: #edbe44;
    margin-bottom: 40px;
    margin-top: 40px;
    line-height: 30px;
    text-align: left;

    @media ${devices.desktop} {
      margin: 0 0 40px 70px;
      text-align: left;
    }
  }
  .citat {
    color: #edbe44;
    white-space: pre-wrap;
    text-align: left;

    line-height: 28px;
    @media ${devices.desktop} {
      margin-left: 70px;
      line-height: 35px;
      text-align: left;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 120px 0 70px 0;
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
    padding: 180px 0 200px 0;
  }
  .text {
    width: 40%;
  }
  /* .picture {
    width: 40%;
    height: auto;
  } */
`;
export const AboutAuthor = ({ aboutAuthor, showSidebar }) => {
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
            <img
              className="picture"
              src={aboutAuthor.authorPicture.url}
              alt="picture"
            />
            <div className="text">
              {documentToReactComponents(aboutAuthor.authorBio.json, options)}
            </div>
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
