import "./SocialContacts.scss";
import { EmailSvg, GithubSvg, LinkedinSvg } from "../../assets/icons";

export const SocialContacts = () => {
  return (
    <div className="social-contacts">
      <a href="mailto:dorianrkelly@gmail.com" target="_blank">
        <EmailSvg />
      </a>
      <a href="https://github.com/dorian-rose" target="_blank">
        <GithubSvg />
      </a>
      <a href="https://www.linkedin.com/in/dorian-kelly/" target="_blank">
        <LinkedinSvg />
      </a>
    </div>
  );
};
