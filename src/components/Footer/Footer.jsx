import { useTheme } from "../../../src/Context";
import { motion } from "framer-motion";
const navigation = {
  main: [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/albert-barnabas/" },
    { name: "Instagram", href: "https://www.instagram.com/albertbarnabas_/" },
    { name: "Github", href: "#" },
    { name: "Behance", href: "#" },
  ],
};

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.div
      className={`${
        theme === "dark" ? "bg-[#141414]" : "bg-white"
      } transition-all duration-1000 min-h-screen flex items-center`}
    >
      <div className="w-full min-h-[99vh] footer-container flex flex-col justify-between mx-auto md:max-w-4xl lg:max-w-7xl">
        <div className="footer-content flex flex-col items-center m-auto py-10 flex-2/3">
          <div
            className={`${theme === "dark" ? "text-white" : "text-black"} py-6`}
          >
            <p className="text-[64px] text-center leading-[120%] font-medium">
              Have a project?
              <br />
              Let's talk.
            </p>
          </div>
          <div
            className={`content-email text-center ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <p className="text-lg py-4">~Reach out via Email~</p>
            <a
              className="text-3xl tracking-tight inline-block transition-transform duration-1000 hover:scale-110"
              href="#"
            >
              albert.barnabas@binus.ac.id
            </a>
          </div>
        </div>
        <div className="footer-content flex flex-col items-center border-t-[1px] border-slate-600 flex-1/3 ">
          <nav
            className="flex w-full justify-around py-6 lg:justify-evenly items-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="">
                <a
                  href={item.href}
                  className="text-xs lg:text-sm leading-6 text-gray-600 hover:text-blue-600"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } flex flex-col items-center justify-center pt-10`}
          >
            <a className="text-base font-normal lg:text-left" href="/">
              Albert Barnabas
            </a>
            <p className="text-xs pb-2 text-center opacity-50 lg:text-left">
              last updated Nov 2023.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
