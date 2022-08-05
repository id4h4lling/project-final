import styled from "styled-components";

/////////////// DEVICES ///////////////

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

/////////////// On all pages ///////////////

/////////////// NavLinks ///////////////
export const NavLink = styled.a``;

export const StyledNavLink = styled(NavLink)`
  font-family: wremena;
  margin: 20px 0 10px;
  padding: 15px;
  font-weight: bold;
  color: #24384a;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #7b2020;
  }
  &:active {
    color: #7b2020;
  }
`;
