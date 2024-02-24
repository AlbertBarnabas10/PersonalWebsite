// components/Header.js
import React from "react";
import { useState } from "react";
import { useTheme } from "../../../src/Context";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", path: "/about" },
  { name: "Read CV", path: "/read.cv" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } transition-all duration-1000`}
    >
      <header className={""}>
        <nav
          className="px-8 mx-auto flex items-center justify-between h-24 md:max-w-4xl lg:max-w-7xl"
          aria-label="Global"
        >
          <Link
            to="/" // Update to use React Router's Link component
            className={`-m-1.5 p-1.5 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Albert Barnabas
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path} // Update to use React Router's Link component
                className={`text-sm leading-6 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="text-black dark:text-white"
              onClick={() => toggleTheme(console.log("hello"))}
            >
              {theme === "dark" ? (
                <SunIcon
                  className={`h-5 w-5 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                />
              ) : (
                <MoonIcon className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel
            className={`transition-all duration-1000 ${
              theme === "dark" ? "bg-black" : "bg-white"
            } fixed h-screen inset-y-0 right-0 z-10 w-full overflow-y-auto px-8 py-8 sm:max-w-full sm:ring-1 sm:ring-gray-900/10`}
          >
            <div className="flex items-center justify-between h-8">
              <Link
                to="/" // Update to use React Router's Link component
                className={`-m-1.5 p-1.5 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Albert Barnabas
              </Link>
              <button
                type="button"
                className={`-m-2.5 rounded-md p-2.5 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path} // Update to use React Router's Link component
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base leading-7 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <button
                  className="text-black dark:text-white"
                  onClick={() => toggleTheme(console.log("hello"))}
                >
                  {theme === "dark" ? (
                    <SunIcon
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    />
                  ) : (
                    <MoonIcon className="h-5 w-5 text-black" />
                  )}
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
