import styled from "styled-components";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const FormStyled = styled.div`
  .sidebar {
    position: fixed;
    top: 50px;
    left: -700px;
    width: 300px;
    height: 100%;
    background-color: #24384a;
    transition: left 700ms ease-out;
    border: solid 2px #e3b921;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;
  }
  .sidebar.active {
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: center;

    @media ${devices.tablet} {
      padding: 20px;
    }
  }

  .overlay {
    position: fixed;
    padding: 0;
    margin: 0;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: rgba(37, 36, 36, 0.7);
    z-index: 100;
  }
`;

export const StyledOverlay = styled.div`
  .overlay {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(37, 36, 36, 0.7);
    z-index: 100;
  }
`;

////////// STYLED FORM ////////////

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: center;
  height: 900px;
  width: 90%;
  @media ${devices.desktop} {
    height: 800px;
  }

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 24px;
    text-align: left;
    padding-bottom: 20px;
    @media ${devices.desktop} {
      font-size: 30px;
    }
  }

  h2 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 20px;
    padding: 0px 10px 10px 0px;
    text-align: left;
  }

  /* .policy {
    margin-bottom: -5px;
  } */

  p {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 12px;
    width: 70%;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: #edbe44;
    &:hover {
      color: #fff0bb;
      cursor: pointer;
    }
  }

  u {
    text-decoration-thickness: 10%;
    text-decoration-line: underline;
  }
`;

export const Input = styled.input`
  background-color: #c4c4c4;
  border-radius: unset;

  font-family: "WremenaLight";
  font-size: 16px;
  color: #2f2a65;
  padding: 10px;
  @media ${devices.desktop} {
    font-size: 20px;
  }
  ::placeholder {
    font-size: 16px;
    color: #263541;
    padding: 10px;
  }
`;

export const SubmitButton = styled.button`
  all: unset;
  border: none;
  outline: 0;
  width: auto;
  background-color: #edbe44;
  font-family: "WremenaRegular";
  color: #263541;
  margin-top: 25px;
  padding: 6px;
  font-size: 14px;
  cursor: pointer;

  &&:hover {
    background-color: #ffdb5c;
  }
  @media ${devices.desktop} {
    font-size: 18px;
    padding: 10px;
  }
`;

export const StyledThankYou = styled.div`
  color: #edbe44;
  font-family: "WremenaLight";
  font-size: 20px;
  text-align: center;

  h1 {
    padding: 20px 0px;
  }
`;
