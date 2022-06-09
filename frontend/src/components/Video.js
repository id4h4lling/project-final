import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #7b2020;
`;

export const Video = () => {
  return (
    <Background>
      <iframe
        src="https://player.vimeo.com/video/718679479?h=3cd134db19?autoplay=1&loop=1&autoplay=1"
        width="640"
        height="564"
        frameBorder="0"
        allow="autoplay allow='autoplay'"
        allowFullScreen
      ></iframe>
    </Background>
  );
};
