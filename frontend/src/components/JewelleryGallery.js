import React from "react";
import { GalleryBackground, Gallery, Title } from "theme/ReusableStyle";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const JewelleryGallery = ({ jewelleryGallery }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="scroll-center">
      <GalleryBackground>
        <div className="wrapper" id="hairjwellery">
          <Title>
            <h2>{jewelleryGallery.title}</h2>
          </Title>
          <Gallery>
            <MdChevronLeft className="pointer" onClick={slideLeft} size={350} />
            <div id="slider" className="image-slider">
              {jewelleryGallery.pictureCollection.items.map((picture) => (
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
              size={350}
              className="pointer"
            />
          </Gallery>
        </div>
      </GalleryBackground>
    </div>
  );
};
