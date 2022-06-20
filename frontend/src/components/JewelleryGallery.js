import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #9f9f9f;
  padding: 90px;
  height: 100vh;
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

export const JewelleryGallery = ({ jewelleryGallery }) => {
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
                <img src={picture.url + "?w=500"} alt="picture" />
              </div>
            ))}
          </PictureBox>
        </Gallery>
      </Background>
    </div>
  );
};
