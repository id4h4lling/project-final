import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7b2020;
  width: 100%;
  height: 726px;

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
    letter-spacing: 3px;
    font-size: 48px;
    width: 80%;
  }
`;

export const HistoryQuote = ({ quoteHistory }) => {
  return (
    <div className="scroll">
      <Background>
        <p>{quoteHistory.quote}</p>
      </Background>
    </div>
  );
};
