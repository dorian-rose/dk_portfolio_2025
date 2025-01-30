import "./HomePage.scss";
import { HomeHero } from "./components/HomeHero";
import { HomeStack } from "./components/HomeStack";

export const HomePage = () => {
  return (
    <section className="standard-section container-wide">
      <HomeHero />
      <HomeStack />
    </section>
  );
};
