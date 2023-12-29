import { Service } from "./service";
import { AboutUs } from "./aboutUs";
import Banner from "./banner/banner";
import { Work } from "./work";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Work></Work>
      <Service></Service>
    </>
  );
};

export default Home;
