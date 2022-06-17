import React from "react";
import { Policy } from "./Policy";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Background = styled.div`
  background-color: #7b2020;
  display: flex;
  align-items: row;
  justify-content: space-evenly;
  padding: 100px;

  h3 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 20px;
    letter-spacing: 3px;
  }
`;

const Grants = styled.div`
  display: flex;
  align-items: column;
  width: 500px;
  margin: 10px;
`;

const Copy = styled.div`
  display: flex;
  width: 500px;
  margin: 10px;
`;
const Contact = styled.div`
  display: flex;
  width: 500px;
  margin: 10px;
`;

export const Footer = ({ footer }) => {
  // const Grants = ({ children }) => <h3 className="grants">{children}</h3>;
  // const options = {
  //   renderMark: { [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>` },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, next) => <Grants>{children}</Grants>,
  //   },
  // };

  return (
    <Background>
      <Grants>
        {/* <div>{documentToReactComponents(footer.grants, options)}</div> */}
      </Grants>
      <Copy>
        <h3>{footer.copyright}</h3>
        <Link to={"/Policy"}>
          <h3>Intigretetspolicy</h3>
        </Link>
      </Copy>

      <Contact>
        <h3>{footer.contact}</h3>
      </Contact>
    </Background>
  );
};
