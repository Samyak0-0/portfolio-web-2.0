import React from "react";
import Homepage from "./components/Homepage";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";

const Home = () => {
  return (
    <>
      <Homepage />
      <Expertise />
      <Projects />
      <ContactPage />
    </>
  );
};

export default Home;
