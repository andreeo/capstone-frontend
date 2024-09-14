import React from "react";
import Hero from "../Sections/Hero/Hero";
import Specials from "../Sections/Specials/Specials";
import About from "../Sections/About/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <div style={{ width: '100%', height: '10vh', backgroundColor: '#495e57' }} ></div>
      <About />
    </>
  );
};
export default Home;
