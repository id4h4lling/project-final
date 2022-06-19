import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #9f9f9f;
  min-height: 100vh;
  padding: 90px;
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

const PictureBox = styled.div`
  display: flex;
  justify-content: row;

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
        <PictureBox>
          {jewelleryGallery.pictureCollection.items.map((picture) => (
            <div className="picture">
              <img src={picture.url + "?w=500"} alt="picture" />
            </div>
          ))}
        </PictureBox>
      </Background>
    </div>
  );
};
