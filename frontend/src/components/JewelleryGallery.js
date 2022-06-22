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
  min-height: 100vh;
  position: relative;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-padding: 50%;
  position: relative;

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 90px;

    @media ${devices.desktop} {
      padding-top: 100px;
      padding-bottom: 100px;
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
      padding: 20px 30px;
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
  /* margin-bottom: 90px; */

  width: 50%auto;
  scroll-snap-align: center;

  @media ${devices.desktop} {
    height: 100vh;
    width: 100vw;
  }

  .picture {
    margin: 100px 15px;
    padding: 30px;
    width: 300px;

    @media ${devices.desktop} {
      width: 500px;
    }
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
      </Background>
    </div>
  );
};

{
  /* <div className="picture">
  {" "}
  {devices === mobile ? (
    <img src={picture.url + "?w=200"} alt="picture" />
  ) : (
    <img src={picture.url + "?w=500"} alt="picture" />
  )}
</div>; */
}

// RÄTT
{
  /* <PictureBox>
{jewelleryGallery.pictureCollection.items.map((picture) => (
  <div key={picture.title}>
    <div className="picture">
      <img src={picture.url + "?w=500"} alt="picture" />
    </div>
  </div>
))}
</PictureBox> */
}

{
  /* <PictureBox>
{jewelleryGallery.pictureCollection.items.map((picture) => (
  <div key={picture.title}>
    <div className="picture">
      {devices === mobile ? (
        <img src={picture.url + "?w=500"} alt="picture" />
      ) : (
        <img src={picture.url + "?w=200"} alt="picture" />
      )}
    </div>
  </div>
))}
</PictureBox>{" "} */
}
