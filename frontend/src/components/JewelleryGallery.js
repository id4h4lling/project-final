import React from "react";
import { GalleryBackground, Gallery, PictureBox, Title } from "theme/reusable";

export const JewelleryGallery = ({ jewelleryGallery, showSidebar }) => {
  return (
    <div className="scroll">
      <GalleryBackground>
        <div className="wrapper" id="hårsmycken">
          <Title>
            <h2>{jewelleryGallery.title}</h2>
          </Title>
          <Gallery>
            {" "}
            <PictureBox>
              {jewelleryGallery.pictureCollection.items.map((picture) => (
                <div key={picture.title}>
                  <img
                    className="picture"
                    src={picture.url + "?w=500"}
                    alt="picture"
                  />
                </div>
              ))}
            </PictureBox>{" "}
          </Gallery>
        </div>
      </GalleryBackground>
    </div>
  );
};
