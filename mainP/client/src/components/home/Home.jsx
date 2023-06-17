import React from "react";
// import Navbar from "./components/home/Navbar";
import Navbar from "./Navbar";

import About from "./About";

import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
