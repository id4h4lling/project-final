import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const BackgroundFooter = styled.div`
  background-color: #7b2020;
  padding: 50px 10px 40px 10px;
  font-family: "WremenaRegular";
  color: #edbe44;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 50%;
    margin: 15%;
    @media ${devices.tablet} {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 60px 100px 60px 0px;
      width: 80%;
      margin: auto;
    }
  }
  p {
    font-size: 12px;
    @media ${devices.tablet} {
      font-size: 16px;
    }
  }
  h4 {
    font-size: 14px;
    @media ${devices.desktop} {
      font-size: 18px;
    }
  }
  section {
    line-height: 1.6;
    margin: 10px;
  }
  .middle {
    text-align: left;
    @media ${devices.desktop} {
      text-align: center;
    }
  }
  .logo {
    padding: 0px 2px;
    @media ${devices.desktop} {
      width: 15px;
    }
  }
`;

export const StyledLink = styled.div`
  a {
    text-decoration: none;
    color: #edbe44;
    &:hover {
      color: #fff0bb;
      cursor: pointer;
    }
  }
  h4 {
    font-family: "WremenaRegular";
    color: #edbe44;
    &:hover {
      color: #fff0bb;
      cursor: pointer;
    }
  }
`;
