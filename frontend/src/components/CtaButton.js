import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: 0;
  font-family: "WremenaLight";
  border-radius: 50%;
  animation: ripple 15s infinite;

  #ctaText {
    font-family: "WremenaRegular";
    font-size: 10px;
    width: 40px;

    @media ${devices.desktop} {
      font-family: "WremenaRegular";
      font-size: 16px;
      width: 90px;
    }
  }

  .circle {
    border: none;
    width: 90px;
    height: 90px;
    padding: 30px;

    @media ${devices.desktop} {
      width: 80px;
      height: 80px;
      padding: 20px;
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
        Jag vill veta mer!
      </p>
    </Button>
  );
};
