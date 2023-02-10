import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const ContentLife = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 80px 0 50px 0;
  font-family: "WremenaLight";
  z-index: 3;

  @media ${devices.tablet} {
    flex-direction: column;
    margin: auto;
    padding: 80px 50px 200px 0px;
  }

  @media ${devices.desktop} {
    flex-direction: row;
    margin: auto;
    padding: 140px 50px 200px 50px;
  }

  .text {
    color: #edbe44;
    font-size: 16px;
    line-height: 33px;
    text-align: left;
    white-space: pre-wrap;

    @media ${devices.tablet} {
      font-size: 18px;
      text-align: left;
      width: 90%;
      margin: auto;
    }
    @media ${devices.desktop} {
      font-size: 20px;
      text-align: left;
      width: 90%;
      margin: 0;
    }
  }

  .text-container {
    width: 90%;

    @media ${devices.desktop} {
      width: 30%;
    }
    @media ${devices.desktop} {
      width: 60%;
    }
  }

  .image-container {
    width: 70%;
    margin-top: 50px;

    @media ${devices.tablet} {
      width: 60%;
      margin: 0;
      margin-top: 60px;
    }

    @media ${devices.desktop} {
      width: 40%;
      margin: 0;
    }
  }

  .picture-LifeStory {
    width: 80%;
  }
`;
