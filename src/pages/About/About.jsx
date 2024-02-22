import React from "react";
import { useTheme } from "../../Context";
import { ThemeProvider } from "../../Context";
import Header from "../../components/Header/Header";
import AboutComponent from "./Components";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <ThemeProvider>
      <Header />
      <AboutComponent />
      <Footer />
    </ThemeProvider>
  );
};

export default About;
