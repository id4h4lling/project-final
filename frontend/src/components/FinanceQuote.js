import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import quoteBlueStart from "icons/quoteBlueStart.svg";
import quoteBlueEnd from "icons/quoteBlueEnd.svg";
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
  background-color: #e3b921;
  width: 100%;
  min-height: 100vh;
  position: relative;

  .button {
    position: absolute;
    bottom: 20px;
    right: 20px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 50px;
      right: 50px;
    }
  }

  .flashinBorder {
    border-right: 4px solid orange;
    animation: printed-text 5s steps(80),
      flashin-border 0.75s step-start infinite;
  }

  @keyframes flashin-border {
    0% {
      border-color: #24384a;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: #24384a;
    }
  }

  @keyframes printed-text {
    from {
      width: 0%;
    }
  }

  p {
    font-family: "WremenaRegular";
    color: #24384a;
    letter-spacing: 3px;
    font-size: 24px;
    width: 80%;

    @media ${devices.desktop} {
      width: 80%;
      font-size: 48px;
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
  }
`;

export const FinanceQuote = ({ quoteFinance, showSidebar }) => {
  const [current, setCurrent] = useState("");
  const index = useRef(0);

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
    console.log({ index });
    if (visible) {
      if (index.current <= quoteFinance.quote.length) {
        setTimeout(() => {
          setCurrent(
            (value) => value + quoteFinance.quote.charAt(index.current)
          );
          index.current += 1;
        }, 90);
      }
    }
  }, [current, visible]);

  return (
    <div className="scroll">
      <Background>
        <p ref={myRef}>
          {<img className="signTop" src={quoteBlueStart} alt="quotesign" />}{" "}
          <span className="flashinBorder">{current}</span>
          {index.current >= quoteFinance.quote.length - 1 && (
            <img className="signDown" src={quoteBlueEnd} alt="quotesign" />
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
