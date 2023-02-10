import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const BackgroundCtaPage = styled.div`
  position: relative;
  z-index: 2;
  .background {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonCtaPage = styled.div`
  button {
    background-color: #24384a;
    color: inherit;
    border: none;
    font: inherit;
    border-radius: 20px;
    cursor: pointer;
    outline: inherit;
    transition: 0.5s;
    &:hover {
      background-color: #2c465e;
      cursor: pointer;
    }
    @media ${devices.tablet} {
      padding: 10px;
      margin: 0;
    }

    h1 {
      font-family: "WremenaRegular";
      color: #edbe44;
      font-size: 20px;
      letter-spacing: 3px;
      padding: 10px;

      @media ${devices.tablet} {
        font-size: 40px;
      }
      @media ${devices.desktop} {
        font-size: 50px;
        padding: 30px;
      }
    }
  }
`;
