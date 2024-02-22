import "./Project.css";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import GrowUp from "../../assets/images/GrowUp.png";
import Mobilin from "../../assets/images/Mobilin.png";
import Hansanesia from "../../assets/images/Hansanesia.png";
import { motion } from "framer-motion";
import { useTheme } from "../../../src/Context";

const data = [
  {
    projectName: "Grow Up",
    href: "https://pretty-warrior-0a2.notion.site/GrowUp-bab8134574d94ab694e34ba18920ccb6?pvs=4",
    img: GrowUp,
    desc: "Design & Development",
  },
  {
    projectName: "Mobilin",
    href: "#",
    img: Mobilin,
    desc: "Design",
  },
  {
    projectName: "Hansanesia",
    href: "#",
    img: Hansanesia,
    desc: "Design & Development",
  },
];

const Projects = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`w-full transition-all duration-1000  ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`px-8 mx-auto flex flex-col gap-4 py-16 md:max-w-4xl lg:max-w-7xl`}
      >
        <div className={`flex items-center gap-x-2`}>
          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            Selected Projects
          </p>
          <span className="w-4 h-4 ">
            <ArrowSmallDownIcon
              className={`w-4 h-4 project-icon ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            />
          </span>
        </div>
        <div className="flex flex-col gap-y-8 mb-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="content py-7 border-b flex items-center justify-between relative"
            >
              <a
                target="_blank"
                className={`text-3xl lg:px-[50px] lg:py-10 lg:text-[60px] ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
                href={item.href}
              >
                {item.projectName}
              </a>
              <p className="text-xs lg:px-[50px] lg:text-base text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          type="button"
          className={`self-center rounded-full  border-blue-600 border-[1.75px] px-10 py-6 text-base font-normal hover:bg-blue-600 hover:text-white ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          View More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Projects;
