import React from "react";
import { GalleryBackground, Gallery, Title } from "theme/ReusableStyle";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const TechniqueGallery = ({ techniqueGallery }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="scroll-center">
      <GalleryBackground>
        <div className="wrapper" id="technique">
          <Title>
            <h2>{techniqueGallery.title}</h2>
          </Title>
          <Gallery>
            <MdChevronLeft className="pointer" onClick={slideLeft} size={250} />
            <div id="slider2" className="image-slider">
              {techniqueGallery.pictureCollection.items.map((picture) => (
                <div key={picture.title}>
                  <img
                    className="picture"
                    src={picture.url + "?w=500"}
                    alt="picture"
                  />
                </div>
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              size={250}
              className="pointer"
            />
          </Gallery>
        </div>
      </GalleryBackground>
    </div>
  );
};
