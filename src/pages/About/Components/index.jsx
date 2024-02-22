import React from "react";
import { useTheme } from "../../../Context";
import aboutImg from "../../../assets/images/about.png";
import style from "./index.css";
export default function AboutComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div
        className={`transition-all duration-1000 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl  mx-auto px-4">
          {/* className = "about-content flex flex-col text-left bg-blue-500 */}
          <div className="about-content flex flex-col">
            <div className=" flex flex-col items-center py-8">
              <div className="about-img max-w-[236px] pt-10 pb-8">
                <img
                  className="border-[#2F3034] border-8 rounded-full"
                  src={aboutImg}
                  alt=""
                />
              </div>
              <div className="about-introduction flex flex-col">
                <h2
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-[80px] tracking-[-4px] text-center leading-[130%]`}
                >
                  I'm Albert Barnabas, a{" "}
                  <span className="text-[#979A97]"> UI/UX Designer </span> based
                  in Jakarta.
                </h2>
                <div className=" max-w-4xl mx-auto py-6">
                  <p
                    className={`${
                      theme === "dark" ? "text-slate-300" : "text-[#1e293b]"
                    } text-center font-light text-base py-8 leading-[180%]`}
                  >
                    {/* Hi, I am a UI UX Designer intern @ Brainworx Solusi Integrasi. I
                am also a final year student at BINUS University. I have
                passionate about UI UX and Product Design for about a year and
                half. I like to help people solve their problems with Design. My
                goal is to become a Product Designer or UX Engineer until I
                build my own creative agency. Majoring in Information Systems, I
                am into Product Design that much, I also learn how to code. For
                your information, I code this website myself using ReactJS +
                Tailwind CSS. As a UI UX Designer learn how to code helps me
                design with two POVs at the same time. */}
                    Hey there! 👋 I'm an enthusiastic UI/UX Designer currently
                    interning at Brainworx Solusi Integrasi and navigating my
                    final year at BINUS University. My love for all things
                    design has been brewing for about a year and a half now. I
                    get a kick out of using design to solve real problems and
                    make people's lives a bit easier. Dream big, right? My goal
                    is to become a Product Designer or UX Engineer and, hey,
                    maybe even start my own creative agency down the road!
                    Despite majoring in Information Systems, I've caught the
                    coding bug. By the way, this website? Yeah, I whipped it up
                    myself using ReactJS + Tailwind CSS. Learning to code lets
                    me see design from multiple angles simultaneously. Let's
                    talk about design, tech, or anything cool that's on your
                    mind!
                  </p>
                </div>
              </div>
            </div>
            <div className=" max-w-5xl mx-auto flex flex-col justify-between ">
              <div className={` p-2 w-[1024px]`}>
                {/* Experience */}
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-4xl font-bold py-5`}
                >
                  🚀 Experience
                </p>
                <ul
                  className={`${
                    theme === "dark" ? "text-slate-300" : "text-[#1e293b]"
                  } about-list font-light list-disc list-inside text-lg`}
                >
                  <li>
                    UI/UX Designer intern @ Brainworx (February 2023 - February
                    2024)
                  </li>
                  <li>UI/UX Freelance (June 2022 - Present)</li>
                  <li>
                    Activist and Elite Team member @ Binus Computer Club
                    (September 2020 - September 2022)
                  </li>
                </ul>
              </div>
              <div className={` p-2 w-[1024px]`}>
                {/* Achivement */}
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-4xl font-bold py-5`}
                >
                  📈 Achievement
                </p>
                <ul
                  className={`${
                    theme === "dark" ? "text-slate-300" : "text-[#1e293b]"
                  } about-list font-light list-disc list-inside text-lg`}
                >
                  <li>
                    2nd Place Winner Web Development of I/O FTI 2022
                    Technovation, by Universitas Tarumanegara (April 2022)
                  </li>
                  <li>
                    Binus Computer Club Technoscape Hackathon 4.0 Participant
                    (July 2022)
                  </li>
                </ul>
              </div>
            </div>
            {/* Image Slider soon */}
            {/* <div className="3">
              <div className="about-photo-silder">
                // image slider when scroll, find some pics
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
