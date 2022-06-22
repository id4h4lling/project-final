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
  height: 100vh;
  position: relative;

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 90px;

    @media ${devices.desktop} {
      padding-top: 150px;
    }
  }
`;
const Title = styled.div`
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
      padding: 30px 40px;
    }
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
        <div className="wrapper">
          <Title>
            <h2>{jewelleryGallery.title}</h2>
          </Title>
          <Gallery>
            <PictureBox>
              {jewelleryGallery.pictureCollection.items.map((picture) => (
                <div key={picture.title}>
                  <div className="picture">
                    <img src={picture.url + "?w=500"} alt="picture" />
                  </div>
                </div>
              ))}
            </PictureBox>
          </Gallery>
        </div>
      </Background>
    </div>
  );
};
