import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/about";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Testimonial from "./sections/Testimonial";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <section className=""/>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
