import React from "react";
import { BackgroundCtaPage, ButtonCtaPage } from "theme/styles";

export const Cta = ({ cta, showSidebar }) => {
  return (
    <div className="scroll-center">
      <BackgroundCtaPage>
        <div
          className="background"
          style={{
            backgroundImage: ` url(${cta.picture.url})`,
          }}
        >
          <ButtonCtaPage onClick={showSidebar}>
            <button type="button">
              <h1>{cta.cta}</h1>
            </button>
          </ButtonCtaPage>
        </div>
      </BackgroundCtaPage>
    </div>
  );
};
