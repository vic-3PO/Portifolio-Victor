import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Testimonial from "./sections/Testimonial";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
