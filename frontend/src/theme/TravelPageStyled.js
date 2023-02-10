import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const ContentTravel = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 80px 0 50px 0;
  font-family: "WremenaLight";
  z-index: 2;

  @media ${devices.tablet} {
    flex-direction: column;
    margin: auto;
    padding: 80px 50px 200px 0px;
  }

  @media ${devices.desktop} {
    flex-direction: row-reverse;
    margin: auto;
    padding: 140px 50px 200px 0px;
  }

  .text {
    color: #edbe44;
    font-size: 1.125rem;
    line-height: 33px;
    text-align: left;
    white-space: pre-wrap;

    @media ${devices.tablet} {
      font-size: 18px;
      text-align: left;
      margin: auto;
    }
    @media ${devices.desktop} {
      font-size: 20px;
      text-align: left;
      width: 80%;
    }
  }

  .text-container {
    width: 90%;

    @media ${devices.desktop} {
      width: 30%;
    }
    @media ${devices.desktop} {
      width: 40%;
    }
  }

  .image-container {
    width: 100%;
    margin-top: 50px;
    @media ${devices.tablet} {
      width: 100%;
      margin-top: 60px;
    }

    @media ${devices.desktop} {
      width: 50%;
      margin-top: 0px;
    }
  }

  .picture {
    width: 100%;

    @media ${devices.tablet} {
      width: 80%;
    }
    @media ${devices.desktop} {
      width: 100%;
    }
  }
`;
