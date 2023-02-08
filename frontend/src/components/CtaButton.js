import { ButtonCta } from "theme/CtaButtonStyled";
// import { react, useState } from "react";

export const CtaButton = ({ showSidebar, color, backgroundcolor }) => {
  return (
    <div>
      <ButtonCta
        className="button circle"
        type="button"
        onClick={showSidebar}
        style={{ backgroundColor: `${backgroundcolor}` }}
      >
        <p id="ctaText" style={{ color: `${color}` }}>
          Jag vill
        </p>
        <p id="ctaText" style={{ color: `${color}` }}>
          veta mer!
        </p>
      </ButtonCta>
    </div>
  );
};
