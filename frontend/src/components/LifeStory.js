import React from "react";
import { ContentBackground } from "theme/ReusableStyle";
import { ContentLife } from "theme/LifeStoryStyled";

import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const LifeStory = ({ lifeStory }) => {
  const Text = ({ children }) => <p className="text">{children}</p>;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
    },
  };
  return (
    <div className="scroll-start">
      <ContentBackground>
        <div className="wrapper">
          <h2>{lifeStory.title}</h2>
          <ContentLife>
            <div className="text-container">
              {documentToReactComponents(lifeStory.text.json, options)}
            </div>
            <div className="image-container">
              <img
                className="picture-LifeStory"
                src={lifeStory.picture.url + "?w=800"}
                alt="picture"
              />
            </div>
          </ContentLife>
        </div>
      </ContentBackground>
    </div>
  );
};
