import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const BackgroundCtaPage = styled.div`
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
    margin: 0 20px 0 20px;
    background-color: #7b2020;
    color: inherit;
    border: none;
    padding: 5px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    transition: 0.5s;
    &:hover {
      background-color: #24384a;
      cursor: pointer;
    }
    @media ${devices.tablet} {
      padding: 10px;
      margin: 0;
    }

    h1 {
      font-family: "WremenaRegular";
      color: #edbe44;
      font-size: 24px;
      letter-spacing: 3px;

      @media ${devices.tablet} {
        font-size: 40px;
      }
      @media ${devices.desktop} {
        font-size: 50px;
      }
    }
  }
`;
