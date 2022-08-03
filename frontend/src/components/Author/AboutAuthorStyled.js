import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  background-color: #24384a;
  min-height: 100vh;
  position: relative;

  .button {
    position: absolute;
    bottom: 40px;
    right: 40px;

    @media ${devices.desktop} {
      position: absolute;
      bottom: 70px;
      right: 70px;
    }
  }

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 90px;

    @media ${devices.tablet} {
      padding-top: 150px;
    }
  }

  h2 {
    font-family: "WremenaRegular";
    color: #24384a;
    font-size: 18px;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #edbe44;
    padding: 20px 30px;
    display: inline;

    @media ${devices.tablet} {
      font-size: 30px;
      letter-spacing: 3px;
      padding: 20px 30px;
    }
  }

  .intro {
    color: #edbe44;
    margin-bottom: 40px;
    margin-top: 40px;
    line-height: 30px;
    text-align: left;

    @media ${devices.desktop} {
      margin: 0 0 40px 70px;
      text-align: left;
    }
  }
  .citat {
    color: #edbe44;
    white-space: pre-wrap;
    text-align: left;
    line-height: 28px;

    @media ${devices.desktop} {
      margin-left: 70px;
      line-height: 35px;
      text-align: left;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 120px 0 70px 0;
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
    padding: 180px 0 200px 0;
  }

  .image-container {
    width: 80%;

    @media ${devices.tablet} {
      width: 50%;
    }

    @media ${devices.desktop} {
      width: 30%;
    }
  }
  .text {
    width: 100%;
    @media ${devices.desktop} {
      width: 50%;
      margin-left: 40px;
    }
  }
  .picture {
    width: 100%;
  }
`;
