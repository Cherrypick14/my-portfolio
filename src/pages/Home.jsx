import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import WhatIDo from "../components/WhatIDo";
import TechStacks from "../components/Techstacks";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import SocialLinks from "../components/Sociallinks";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <WhatIDo />
      <TechStacks />
      <Projects />
      <Gallery />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default Home;


