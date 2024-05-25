import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const HeroSection = styled.div`
  .background {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    position: relative;
  }

  button {
    background: none;
    border: none;
    padding: 10px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-family: "WremenaLight";
    color: #edbe44;
    &:hover {
      color: #fff0bb;
      cursor: pointer;
    }

    &&:hover {
      background-color: #ffdb5c;
    }
  }

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 70%;
    margin: auto;
    padding-top: 70px;

    @media ${devices.tablet} {
      padding: 90px;
    }

    @media ${devices.desktop} {
      margin-left: 0;
      padding-top: 70px;
    }
  }

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 30px;
    letter-spacing: 4px;
    margin: 0px 0px 10px 0px;

    @media ${devices.tablet} {
      font-size: 50px;
    }
  }

  h3 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 10px;
    letter-spacing: 3px;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 20px;
    }
  }

  h4 {
    font-family: "WremenaLight";
    color: #edbe44;

    @media ${devices.tablet} {
      font-size: 20px;
    }
  }
`;
