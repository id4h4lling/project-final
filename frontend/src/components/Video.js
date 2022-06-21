import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { CtaButton } from "./CtaButton";
import { useRef, useEffect, useState } from "react";

const Background = styled.div`
  background-color: #7b2020;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  .video {
    margin: 200px 0;
  }
`;

export const Video = ({ showSidebar }) => {
  // const { ref: myRef, inView: visible } = useInView();
  const myRef = useRef();
  const [visible, setVisble] = useState();

  console.log("visible", visible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisble(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="scroll">
      <Background>
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
