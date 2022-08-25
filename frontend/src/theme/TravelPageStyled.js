import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const ContentTravel = styled.div`
  width: 80%;
  margin: auto;
  padding: 120px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    padding: 180px 0 200px 0;
  }

  @media ${devices.desktop} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .content-image {
    width: 100%;
    @media ${devices.desktop} {
      width: 50%;
    }
  }

  .content-text {
    font-family: "WremenaRegular";
    color: #edbe44;
    padding: 0 0 80px 0;
    font-size: 16px;
    text-align: left;
    line-height: 35px;

    @media ${devices.tablet} {
      font-size: 22px;
      text-align: left;
    }

    @media ${devices.desktop} {
      font-size: 25px;
      text-align: left;
      width: 40%;
    }
  }
`;
