import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const PolicyBackground = styled.div`
  background-color: #e3b921;
  padding: 30px;
`;

export const Text = styled.div`
  color: #24384a;
  width: 100%;
  font-family: wremena;
  padding: 20px;
  line-height: 25px;
  font-size: 16px;
  padding: 20px;

  li {
    margin: 15px;
  }

  .bold {
    font-family: wremenabold;
  }

  @media ${devices.desktop} {
    width: 60%;
    padding: 20px;
    line-height: 25px;
    font-size: 16px;
    padding: 100px;
  }
`;
