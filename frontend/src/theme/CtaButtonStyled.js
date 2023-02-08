import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const ButtonCta = styled.button`
  position: fixed;
  top: 85%;
  right: 30px;
  align-items: right;
  z-index: 2;

  @media ${devices.tablet} {
    width: 100px;
    height: 100px;
    left: 83%;
  }

  @media ${devices.desktop} {
    left: 85%;
    width: 110px;
    height: 110px;
    padding: 20px;
  }

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

  &:hover,
  &:focus {
    background-color: #ffdb5c;
  }
  &:active {
    color: #ffdb5c;
  }
  @media ${devices.desktop} {
    width: 150px;
    height: 150px;
    padding: 20px;
  }

  #ctaText {
    font-family: "WremenaRegular";
    font-size: 15px;
    width: 80px;
    letter-spacing: 1px;
    line-height: initial;
    color: #24384a;

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
        transform: scale(0.7);
      }
    }
  }
`;
