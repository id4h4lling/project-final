import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  border: none;
  outline: 0;
  font-family: "WremenaLight";
  border-radius: 50%;
  animation: ripple 15s infinite;

  .ctaText {
    font-family: "WremenaRegular";
    font-size: 15px;
    width: 60px;
  }

  .circle {
    border: none;
    width: 80px;
    height: 80px;
    padding: 10px;
  }
`;

export const CtaButton = ({ showSidebar, color, backgroundcolor }) => {
  return (
    <Button
      className="button circle"
      style={{ backgroundColor: `${backgroundcolor}` }}
      type="button"
      onClick={showSidebar}
    >
      <h3 className="ctaText" style={{ color: `${color}` }}>
        Jag vill veta mer!
      </h3>
    </Button>
  );
};
