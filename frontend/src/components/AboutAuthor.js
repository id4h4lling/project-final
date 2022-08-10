import React from "react";
import { ContentBackground } from "theme/reusable";
import { ContentAuthor } from "theme/styles";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const AboutAuthor = ({ aboutAuthor, showSidebar }) => {
  const Text = ({ children }) => <div className="citat">{children}</div>;

  const Bla = ({ children }) => <h4 className="intro">{children}</h4>;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (_node, children) => <Bla>{children}</Bla>,
    },
  };

  return (
    <div className="scroll">
      <ContentBackground>
        <div className="wrapper" id="författare">
          <h2>{aboutAuthor.title}</h2>
          <ContentAuthor>
            <div className="image-container">
              <img
                className="picture"
                src={aboutAuthor.authorPicture.url}
                alt="picture"
              />
            </div>
            <div className="text">
              {documentToReactComponents(aboutAuthor.authorBio.json, options)}
            </div>
          </ContentAuthor>
        </div>
      </ContentBackground>
    </div>
  );
};
