import React from "react";
import styled from "styled-components";
import { CtaButton } from "./CtaButton";

const Background = styled.div`
  background-color: #9f9f9f;
  min-height: 100vh;
  padding: 90px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-padding: 50%;
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
  overflow-x: auto;

  .picture {
    margin: 100px 15px;
    padding: 30px;
  }
`;
const Title = styled.div`
  h2 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 30px;
    background-color: #7b2020;
    padding: 30px 40px;
    display: inline;
  }
`;

export const TechniqueGallery = ({ techniqueGallery, showSidebar }) => {
  return (
    <div className="scroll">
      <Background>
        <Title>
          <h2>{techniqueGallery.title}</h2>
        </Title>
        <Gallery>
          <PictureBox>
            {techniqueGallery.pictureCollection.items.map((picture) => (
              <div className="picture">
                <img src={picture.url + "?w=600"} alt="picture" />
              </div>
            ))}
          </PictureBox>
        </Gallery>
      </Background>
    </div>
  );
};
