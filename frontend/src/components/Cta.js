import React from "react";
import { BackgroundCtaPage, ButtonCtaPage } from "theme/CtaStyled";

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
          <ButtonCtaPage>
            {/* <ButtonCtaPage onClick={showSidebar}> */}
            <a href="https://arenabok.se/butik/harresande-vamhuskullornas-harsmycken-och-vandringar/">
              <button type="button">
                <h1>{cta.cta}</h1>
              </button>
            </a>
          </ButtonCtaPage>
        </div>
      </BackgroundCtaPage>
    </div>
  );
};
