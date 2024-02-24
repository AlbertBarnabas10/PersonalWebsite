import React from "react";
import { useTheme } from "../../../src/Context";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`transition-all duration-1000 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className=" px-8 h-[calc(100vh-100px)] py-10 flex items-center mx-auto md:max-w-4xl lg:max-w-7xl">
        <div className="text-center font-light">
          <p
            className={`leading-[180%] ${
              theme === "dark" ? "text-white" : "text-black"
            } text-3xl lg:text-[48px] lg:leading-relaxed`}
          >
            A Student, A Product Designer, and A UI/UX Designer. Just finished
            doing internship{" "}
            <a
              className="font-normal text-blue-600 hover:opacity-60
                "
              href="#"
              aria-label="Brainworx"
            >
              @Brainworx.
            </a>{" "}
            Actively taking design projects.{" "}
            <a
              className={`font-normal text-2xl rounded-full px-6 py-4 ${
                theme === "dark" ? "border-white" : "border-black"
              } border-2 hover:opacity-60  lg:text-3xl
                `}
              href="mailto:albert.barnabas@binus.ac.id"
              aria-label="Let's Talk"
            >
              Let's Talk.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
