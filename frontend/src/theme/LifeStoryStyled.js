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
  padding: 120px 0 120px 0;

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-around;

    margin: auto;
    padding: 180px 0 200px 0;
  }

  .text {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 16px;
    text-align: left;
    line-height: 35px;
    white-space: pre-wrap;

    @media ${devices.tablet} {
      font-size: 20px;
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
    width: 100%;

    @media ${devices.desktop} {
      width: 80%;
    }
  }

  .image-container {
    width: 80%;
    margin-top: 70px;

    @media ${devices.tablet} {
      width: 50%;
      margin-left: 5%;
    }

    @media ${devices.desktop} {
      width: 30%;
      margin: 0;
    }
  }

  .lifestory-image {
    width: 100%;
  }
`;
