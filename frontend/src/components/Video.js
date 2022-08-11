import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  background-color: #7b2020;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;

  .button {
    position: absolute;
    top: 50px;
    right: 20px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 70px;
      right: 70px;
    }
  }
  .video {
    margin: 20px 0;
    width: 300px;

    @media ${devices.tablet} {
      margin: 200px 0;
      width: 500px;
    }

    @media ${devices.desktop} {
      margin: 200px 0;
      width: 700px;
    }
  }
`;

export const Video = ({ showSidebar }) => {
  const { ref: myRef, inView: visible } = useInView();

  return (
    <div className="scroll-center">
      <Background id="video">
        <iframe
          ref={myRef}
          className="video"
          src="https://player.vimeo.com/video/718679479?h=3cd134db19?autoplay=1&loop=1&autoplay=1"
          width="840"
          height="564"
          frameBorder="0"
          allow="autoplay allow='autoplay'"
          allowFullScreen
        ></iframe>
      </Background>
    </div>
  );
};
