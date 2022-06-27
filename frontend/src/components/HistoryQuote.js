import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import quoteYellowStart from "icons/quoteYellowStart.svg";
import quoteYellowEnd from "icons/quoteYellowEnd.svg";
import { CtaButton } from "./CtaButton";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #7b2020;
  position: relative;
  min-height: 100vh;
  padding-top: 90px;

  @media ${devices.desktop} {
    align-items: center;
    justify-content: center;
  }

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
    letter-spacing: 3px;
    font-size: 24px;
    width: 80%;
    white-space: pre-wrap;

    @media ${devices.tablet} {
      width: 70%;
      font-size: 48px;
    }
  }

  .flashinBorder {
    border-right: 4px solid #edbe44;
    animation: printed-text 5s steps(80),
      flashin-border 0.75s step-start infinite;
  }

  @keyframes flashin-border {
    0% {
      border-color: #edbe44;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: #edbe44;
    }
  }

  @keyframes printed-text {
    from {
      width: 0%;
    }
  }

  h6 {
    font-family: "WremenaRegular";
    font-size: 100px;
  }

  .signTop {
    height: 30px;
    @media ${devices.desktop} {
      height: 60px;
    }
  }
  .signDown {
    height: 30px;
    margin: -25px 0px;
    @media ${devices.desktop} {
      height: 60px;
    }
  }

  .button {
    position: absolute;
    bottom: 40px;
    right: 40px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 70px;
      right: 70px;
    }
  }
`;

export const HistoryQuote = ({ quoteHistory, showSidebar }) => {
  const [index, setIndex] = useState(0);
  const myRef = useRef();
  const [visible, setVisble] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisble(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [quoteHistory]);

  useEffect(() => {
    if (visible) {
      if (index < quoteHistory.quote.length) {
        setTimeout(() => {
          setIndex(index + 1);
        }, 90);
      }
    }
  }, [index, visible]);

  return (
    <div className="scroll">
      <Background>
        <p ref={myRef}>
          {<img className="signTop" src={quoteYellowStart} alt="quotesign" />}{" "}
          <span className="flashinBorder">
            {quoteHistory.quote.substring(0, index)}
          </span>
          {index >= quoteHistory.quote.length - 1 && (
            <img className="signDown" src={quoteYellowEnd} alt="quotesign" />
          )}
        </p>
        <CtaButton
          className="button"
          showSidebar={showSidebar}
          color={"#24384a"}
          backgroundcolor={"#edbe44"}
        />
      </Background>
    </div>
  );
};
