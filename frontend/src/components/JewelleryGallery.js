import React from "react";
import styled from "styled-components";

const PictureBox = styled.div`
  background-color: #9f9f9f;
  display: flex;
  justify-content: row;
  padding: 150px 150px 90px 150px;

  .picture {
    margin: 15px;
  }
`;

export const JewelleryGallery = ({ jewelleryGallery }) => {
  return (
    <PictureBox>
      {jewelleryGallery.pictureCollection.items.map((picture) => (
        <div className="picture">
          <img src={picture.url + "?w=500"} alt="picture" />
        </div>
      ))}
    </PictureBox>
  );
};
