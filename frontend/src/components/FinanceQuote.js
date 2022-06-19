import React from "react";
import styled from "styled-components";
import quoteBlueStart from "icons/quoteBlueStart.svg";
import quoteBlueEnd from "icons/quoteBlueEnd.svg";

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

export const FinanceQuote = ({ quoteFinance }) => {
  return (
    <div className="scroll">
      <Background>
        <p>
          <img className="signTop" src={quoteBlueStart} alt="quotesign" />{" "}
          {quoteFinance.quote}{" "}
          <img className="signDown" src={quoteBlueEnd} alt="quotesign" />
        </p>
      </Background>
    </div>
  );
};
