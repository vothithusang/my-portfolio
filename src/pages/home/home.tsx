import { Service } from "./service";
import { AboutUs } from "./aboutUs";
import Banner from "./banner/banner";
import { Work } from "./work";
import { Contact } from "./contact";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Work />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
