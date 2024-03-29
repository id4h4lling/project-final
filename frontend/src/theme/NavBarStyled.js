import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

export const NavbarButton = styled.div`
  border: none;
  background-color: none;
  font-family: "WremenaLight";
  color: #e3b921;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ffdb5c;
  }
  &:active {
    color: #ffdb5c;
  }
`;

export const Burger = styled.div`
  #page-wrap {
    text-align: left;
    overflow: auto;
    top: 10px;
    position: relative;
    z-index: 9;
  }
  .page-wrap {
    display: flex;
    flex-direction: column;
  }

  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  .bm-item:hover {
    color: white;
  }
  .bm-burger-button {
    position: absolute;
    width: 22px;
    height: 20px;
    right: 7%;
    top: 5%;
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    // background: #edbe44;
    background: #edbe44;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: #edbe44;
  }
  /* General sidebar styles */
  .bm-menu {
    background: #24384a;
    border: solid #edbe44;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.7);
  }
  button {
    font-family: "WremenaRegular";
    font-size: 16px;
    background-color: white;
    border: none;
    width: 125px;
    padding: 8px;
    margin-top: 10px;
    border-radius: 30px;
  }
  @media ${devices.desktop} {
    .bm-burger-button {
      position: absolute;
      width: 42px;
      height: 30px;
      right: 6%;
      top: 7%;
    }
  }
`;
