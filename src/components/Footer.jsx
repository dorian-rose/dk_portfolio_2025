import "./Footer.scss";
import { FooterEmailSvg, CopySvg, TelSvg } from "../assets/icons";
import { SocialContacts } from "./common/SocialContacts";

export const Footer = () => {
  return (
    <footer className="container-wide">
      <div className="footer_contact-block container">
        <a href="/contact" className="standard-button">
          Get in touch
        </a>
        <p>
          Feel free to reach out to me if you're looking for a developer, have a
          query, or simply want to connect.
        </p>
      </div>
      <div className="footer_contact-block container">
        <div className="footer_contact-method">
          <FooterEmailSvg />
          <a href="mailto:dorianrkelly@gmail.com" target="_blank">
            dorianrkelly@gmail.com
          </a>
          <CopySvg />
        </div>
        <div className="footer_contact-method">
          <TelSvg />
          <a href="tel:+34680320350" target="_blank">
            +34 680 320 350
          </a>
          <CopySvg />
        </div>
      </div>
      <div className="footer_contact-block container">
        <p>
          <small>You may also find me on these platforms:</small>
        </p>
        <SocialContacts />
      </div>
    </footer>
  );
};
