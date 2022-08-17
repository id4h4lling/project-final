import React from "react";
import { GalleryBackground, Gallery, PictureBox, Title } from "theme/reusable";

export const TechniqueGallery = ({ techniqueGallery, showSidebar }) => {
  return (
    <div className="scroll-center">
      <GalleryBackground>
        <div className="wrapper" id="technique">
          <Title>
            <h2>{techniqueGallery.title}</h2>
          </Title>
          <Gallery>
            <PictureBox>
              {techniqueGallery.pictureCollection.items.map((picture) => (
                <div key={picture.title}>
                  <img
                    className="picture"
                    src={picture.url + "?w=500"}
                    alt="picture"
                  />
                </div>
              ))}
            </PictureBox>
          </Gallery>
        </div>
      </GalleryBackground>
    </div>
  );
};
