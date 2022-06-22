import React from "react";
import styled from "styled-components";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
    padding-top: 90px;

    @media ${devices.desktop} {
      padding-top: 150px;
    }
  }

  .button {
    position: absolute;
    top: 60px;
    right: 20px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 50px;
      right: 50px;
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
    font-size: 18px;
    text-align: left;
    line-height: 35px;
    white-space: pre-wrap;

    @media ${devices.desktop} {
      font-size: 20px;
      text-align: left;
      width: 80%;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 120px 0 120px 0;

  @media ${devices.desktop} {
    flex-direction: row;
    width: 80%;
    margin: auto;
    padding: 180px 0 200px 0;
  }

  .lifestory-image {
    margin-top: 50px;

    width: 300px;

    @media ${devices.desktop} {
      width: 50%;
      margin-top: 0;
      margin-left: 20%;
    }
  }
`;

export const LifeStory = ({ lifeStory, showSidebar }) => {
  const Text = ({ children }) => <p className="text">{children}</p>;
  const options = {
    renderMark: {
      //  [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      //[MARKS.BOLD]: (text) => <div style={{fontSize:"28px", color:"red", width:"50%"}}>{text}</div>,
      // [MARKS.ITALIC]: (text) => <div style={{fontSize:"22px", color:"blue", width:"50%"}}>{text}</div>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
    },
  };
  return (
    <div className="scroll">
      <Background>
        <div className="wrapper">
          <h2>{lifeStory.title}</h2>
          <Content>
            <div>{documentToReactComponents(lifeStory.text.json, options)}</div>
            <img
              className="lifestory-image"
              src={lifeStory.picture.url + "?w=500"}
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
