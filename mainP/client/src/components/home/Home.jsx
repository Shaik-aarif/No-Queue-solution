import React from "react";
// import Navbar from "./components/home/Navbar";
import Navbar from "./Navbar";

import About from "./About";

import Services from "./Services";
import SelectService from "./SelectService";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Services></Services>
      <SelectService></SelectService>
      <Footer></Footer>
    </div>
  );
};

export default Home;
