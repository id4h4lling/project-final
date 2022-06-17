import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #9f9f9f;
`;

const PictureBox = styled.div`
  display: flex;
  justify-content: row;

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
  }
`;

export const TechniqueGallery = ({ techniqueGallery }) => {
  return (
    <div className="scroll">
      <Background>
        <Title>
          <h2>{techniqueGallery.title}</h2>
        </Title>
        <PictureBox>
          {techniqueGallery.pictureCollection.items.map((picture) => (
            <div className="picture">
              <img src={picture.url + "?w=500"} alt="picture" />
            </div>
          ))}
        </PictureBox>
      </Background>
    </div>
  );
};
