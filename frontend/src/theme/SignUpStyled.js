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
    width: 250px;
    height: 60%;
    background-color: #24384a;
    transition: left 700ms ease-out;
    border: solid 2px #e3b921;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;

    @media ${devices.tablet} {
      width: 500px;
      height: 60%;
      top: 100px;
    }
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

export const DeleteButton = styled.button`
  position: absolute;
  height: 10px;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #edbe44;
  font-size: 20px;
  font-weight: bold;
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
