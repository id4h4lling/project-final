import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
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
  align-items: center;
  justify-content: center;
  background-color: #7b2020;
  position: relative;
  min-height: 100vh;

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
    letter-spacing: 3px;
    font-size: 24px;
    width: 80%;
    white-space: pre-wrap;

    @media ${devices.desktop} {
      width: 70%;
      font-size: 48px;
    }
  }

  .flashinBorder {
    border-right: 4px solid orange;
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
    bottom: 20px;
    right: 20px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 70px;
      right: 70px;
    }
  }
`;

const TypeContainer = styled.div``;

export const HistoryQuote = ({ quoteHistory, showSidebar }) => {
  const { ref: myRef, inView: visible } = useInView();
  const [current, setCurrent] = useState("");
  const index = useRef(0);

  // const myRef = useRef();
  // const [visible, setVisble] = useState();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisble(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  useEffect(() => {
    index.current = -1;
    setCurrent("");
  }, [quoteHistory]);

  useEffect(() => {
    if (visible) {
      if (index.current <= quoteHistory.quote.length) {
        const timeoutId = setTimeout(() => {
          setCurrent(
            (value) => value + quoteHistory.quote.charAt(index.current)
          );
          index.current += 1;
        }, 90);
        return () => {
          clearTimeout(timeoutId);
        };
      }
    }
  }, [current, visible, quoteHistory]);

  return (
    <div className="scroll">
      <Background>
        <p ref={myRef}>
          {<img className="signTop" src={quoteYellowStart} alt="quotesign" />}{" "}
          <span className="flashinBorder">{current}</span>
          {index.current >= quoteHistory.quote.length - 1 && (
            <img className="signDown" src={quoteYellowEnd} alt="quotesign" />
          )}
        </p>
        <CtaButton
          className="button"
          showSidebar={showSidebar}
          color={"#24384a"}
          backgroundcolor={"#edbe44"}
        />
        {/* <p>{visible ? "yes" : "no"}</p> */}
      </Background>
    </div>
  );
};
