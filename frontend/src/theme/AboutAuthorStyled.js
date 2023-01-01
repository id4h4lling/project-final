import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const ContentAuthor = styled.div`
  width: 80%;
  margin: auto;
  padding: 120px 0 70px 0;
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: center;
    padding: 180px 0 200px 0;
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

  .image-container {
    width: 80%;

    @media ${devices.tablet} {
      width: 40%;
    }

    @media ${devices.desktop} {
      width: 45%;
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
