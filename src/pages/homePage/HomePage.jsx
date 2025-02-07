import "./HomePage.scss";
import { HomeHero, HomeStack } from "./homeComponents";
// import { HomeProjects } from "./components/HomeProjects";
// import { HomeStack } from "./components/HomeHero/HomeStack/HomeStack";

export const HomePage = () => {
  return (
    <section className="standard-section container-wide">
      <HomeHero />
      <HomeStack />
      {/* <HomeProjects /> */}
    </section>
  );
};
