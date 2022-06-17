import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3b921;
  width: 100%;
  min-height: 726px;

  p {
    font-family: "WremenaRegular";
    color: #24384a;
    letter-spacing: 3px;
    font-size: 48px;
    width: 80%;
  }
`;

export const TravelQuote = ({ quoteTravel }) => {
  return (
    <div className="scroll">
      <Background>
        <p>{quoteTravel.quote}</p>
      </Background>
    </div>
  );
};
