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
