import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Button = styled.button`
  position: sticky;
  top: 80%;
  left: 88%;
  align-items: right;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: 0;
  cursor: pointer;
  font-family: "WremenaLight";
  border-radius: 50%;
  animation: ripple 15s infinite;
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: #edbe44;
  border: solid #24384a;

  &:hover,
  &:focus {
    background-color: #7b2020;
  }
  &:active {
    color: #7b2020;
  }

  @media ${devices.desktop} {
    width: 150px;
    height: 150px;
    padding: 20px;
  }

  #ctaText {
    font-family: "WremenaRegular";
    font-size: 15px;
    width: 70px;
    letter-spacing: 1px;
    line-height: initial;
    color: #24384a;

    &:hover,
    &:focus {
      color: #edbe44;
    }
    &:active {
      color: #7b2020;
    }

    @media ${devices.desktop} {
      font-family: "WremenaRegular";
      font-size: 20px;
      width: 90px;
    }

    @keyframes ripple {
      0% {
        transform: scale(0.9);
      }

      50% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(0.8);
      }
    }
  }
`;

export const CtaButton = ({ showSidebar, color, backgroundcolor }) => {
  return (
    // <Button
    //     className="button circle"
    //     style={{ backgroundColor: `${backgroundcolor}` }}
    //     type="button"
    //     onClick={showSidebar}
    //   >
    //     <p id="ctaText" style={{ color: `${color}` }}>
    //       Jag vill
    //     </p>
    //     <p id="ctaText" style={{ color: `${color}` }}>
    //       veta mer!
    //     </p>

    //   className="button circle"
    //   type="button"
    //   onClick={showSidebar}
    // >
    // </Button>

    <Button className="button circle" type="button" onClick={showSidebar}>
      <p id="ctaText">
        Jag vill <br />
        veta mer!
      </p>
    </Button>
  );
};
