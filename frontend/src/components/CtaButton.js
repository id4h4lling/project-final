import { ButtonCta } from "theme/styles";
// import { react, useState } from "react";

export const CtaButton = ({ showSidebar }) => {
  // const [hidden, setHidden] = useState(true);
  return (
    <div>
      <ButtonCta className="button circle" type="button" onClick={showSidebar}>
        <p id="ctaText">
          Jag vill <br />
          veta mer!
        </p>
      </ButtonCta>
    </div>
  );
};
