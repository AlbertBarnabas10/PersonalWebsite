import React from "react";
import Header from "../components/Header/Header";
import { ThemeProvider } from "../Context";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
const Home = () => {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
