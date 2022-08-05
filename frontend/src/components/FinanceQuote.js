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
  align-items: flex-start;
  justify-content: center;
  background-color: #edbe44;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: 90px;

  @media ${devices.desktop} {
    align-items: center;
    justify-content: center;
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

  .flashinBorder {
    border-right: 4px solid #24384a;
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

    @media ${devices.tablet} {
      width: 70%;
      font-size: 48px;
    }
    .signTop {
      height: 30px;
      @media ${devices.tablet} {
        height: 60px;
      }
    }
    .signDown {
      height: 30px;
      margin: -25px 0px;
      @media ${devices.tablet} {
        height: 60px;
      }
    }
  }
`;

export const FinanceQuote = ({ quoteFinance, showSidebar }) => {
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
  }, [quoteFinance]);

  useEffect(() => {
    if (visible) {
      if (index < quoteFinance.quote.length) {
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
          {<img className="signTop" src={quoteBlueStart} alt="quotesign" />}{" "}
          <span className="flashinBorder">
            {quoteFinance.quote.substring(0, index)}
          </span>
          {index >= quoteFinance.quote.length - 1 && (
            <img className="signDown" src={quoteBlueEnd} alt="quotesign" />
          )}
        </p>
        {/* <CtaButton
          className="button"
          showSidebar={showSidebar}
          color={"#e3b921"}
          backgroundcolor={"#24384a"}
        /> */}
      </Background>
    </div>
  );
};
