import React from "react";
import styled from "styled-components";
import { CtaButton } from "./CtaButton";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  background-color: #9f9f9f;
  padding: 90px;
  height: 100vh;
  position: relative;

  .button {
    position: absolute;
    bottom: 20px;
    left: 20px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 70px;
      right: 70px;
    }
  }
`;
const Title = styled.div`
  h2 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #7b2020;
    padding: 30px 40px;
    display: inline;
  }
`;

const Gallery = styled.div`
  height: 100vh;
  scroll-snap-type: x proximity;
  overflow-x: auto;
  scroll-padding-left: 90px;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PictureBox = styled.div`
  display: flex;
  justify-content: row;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;

  .picture {
    margin: 100px 15px;
    padding: 30px;
  }
`;

export const JewelleryGallery = ({ jewelleryGallery, showSidebar }) => {
  return (
    <div className="scroll">
      <Background>
        <Title>
          <h2>{jewelleryGallery.title}</h2>
        </Title>
        <Gallery>
          <PictureBox>
            {jewelleryGallery.pictureCollection.items.map((picture) => (
              <div className="picture">
                <img src={picture.url + "?w=600"} alt="picture" />
              </div>
            ))}
          </PictureBox>
        </Gallery>
        <CtaButton
          className="button"
          showSidebar={showSidebar}
          color={"#edbe44"}
          backgroundcolor={"#24384a"}
        />
      </Background>
    </div>
  );
};
