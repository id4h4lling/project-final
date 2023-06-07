import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const ContentAuthor = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 80px 0 10px 0;
  font-family: "WremenaRegular";
  z-index: 8;

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

  .intro {
    color: #edbe44;
    margin: 40px 0 40px 0px;
    line-height: 30px;
    text-align: left;

    @media ${devices.desktop} {
      margin: 0 0 40px 0px;
      text-align: left;
    }
  }
  .citat {
    color: #edbe44;
    white-space: pre-wrap;
    text-align: center;
    line-height: 28px;

    @media ${devices.laptop} {
      line-height: 30px;
      text-align: left;
    }

    @media ${devices.desktop} {
      line-height: 30px;
      text-align: left;
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
    width: 90%;

    @media ${devices.tablet} {
      width: 60%;
    }

    @media ${devices.desktop} {
      width: 40%;
    }
  }

  .picture-author {
    width: 80%;
  }
`;
