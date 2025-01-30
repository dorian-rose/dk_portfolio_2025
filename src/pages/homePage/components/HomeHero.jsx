import "./HomeHero.scss";
import dorian from "../../../assets/dorian.jpeg";
import { PinSvg } from "../../../assets/icons/PinSvg";
import { SocialContacts } from "../../../components/common/SocialContacts";

export const HomeHero = () => {
  return (
    <div className="intro-section_outer w-full">
      <article className="intro-section container">
        <div className="intro-section_text">
          <h1>Dorian Kelly</h1>
          <p>
            I am a full stack developer (React.js & Node.js) with a passion for
            creating high quality, user-focused web solutions.
          </p>
          <div className="intro-section_info">
            <a href="https://maps.app.goo.gl/k4hytjrfudgoimGF6" target="_blank">
              <PinSvg />
              <span>Madrid, Spain</span>
            </a>
            <p>
              <span className="green-circle"></span>
              <span>Available for new projects</span>
            </p>
          </div>
          <SocialContacts />
        </div>
        <div>
          <img
            className="standard-img"
            src={dorian}
            alt="Image of Dorian Kelly, Web Developerr"
          />
        </div>
      </article>
    </div>
  );
};
