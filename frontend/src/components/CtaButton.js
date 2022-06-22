import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: 0;
  font-family: "WremenaLight";
  border-radius: 50%;
  animation: ripple 15s infinite;
  width: 70px;
  height: 70px;
  padding: 20px;

  @media ${devices.desktop} {
    width: 140px;
    height: 140px;
    padding: 20px;
  }

  #ctaText {
    font-family: "WremenaRegular";
    font-size: 10px;
    width: 60px;
    letter-spacing: 1px;
    line-height: initial;

    @media ${devices.desktop} {
      font-family: "WremenaRegular";
      font-size: 16px;
      width: 90px;
    }
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
      <p id="ctaText" style={{ color: `${color}` }}>
        Jag vill
      </p>
      <p id="ctaText" style={{ color: `${color}` }}>
        veta mer!
      </p>
    </Button>
  );
};
