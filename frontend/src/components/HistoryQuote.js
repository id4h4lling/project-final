import React from "react";
import styled from "styled-components";
import quoteYellowStart from "icons/quoteYellowStart.svg";
import quoteYellowEnd from "icons/quoteYellowEnd.svg";

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

  min-height: 100vh;

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
    letter-spacing: 3px;
    font-size: 24px;
    width: 80%;

    @media ${devices.desktop} {
      width: 80%;
      font-size: 48px;
    }

    /* width: 21ch; */
    overflow: hidden;
    font-size: 40px;
    white-space: nowrap;
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
`;

export const HistoryQuote = ({ quoteHistory }) => {
  return (
    <div className="scroll">
      <Background>
        <p>
          <img className="signTop" src={quoteYellowStart} alt="quotesign" />{" "}
          {quoteHistory.quote}{" "}
          <img className="signDown" src={quoteYellowEnd} alt="quotesign" />
        </p>
      </Background>
    </div>
  );
};
