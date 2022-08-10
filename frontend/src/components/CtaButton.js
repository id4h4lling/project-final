import { ButtonCta } from "theme/styles";

export const CtaButton = ({ showSidebar }) => {
  return (
    <ButtonCta className="button circle" type="button" onClick={showSidebar}>
      <p id="ctaText">
        Jag vill <br />
        veta mer!
      </p>
    </ButtonCta>
  );
};
