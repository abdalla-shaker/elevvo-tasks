import { useState } from "react";
import logo from "../../../images/TaskFlow-icon.svg";
import profile from "../../../images/avatar.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-purple-0/30 backdrop-blur-3xl backdrop-saturate-150 fixed w-full top-0 left-0 z-50">
      <div className="lg:container mx-auto py-4 max-lg:px-4 px-4 flex items-center gap-10 max-md:justify-between">
        <div className="logo-side flex gap-4 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Task flow icon" />
            <p className="text-3xl font-bold">TaskFlow</p>
          </div>
        </div>

        <div
          className={`flex items-center gap-2.5 w-full md:justify-between max-md:absolute max-md:flex-col max-md:h-dvh max-md:top-0 max-md:left-0 max-md:bg-purple-0 max-md:justify-center max-md:gap-10 ${isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"} transition-all z-0`}
        >
          <nav>
            <ul className="flex items-center gap-2.5 text-lg font-semibold max-md:flex-col max-md:text-3xl">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </nav>

          <div className="button-container flex items-center gap-2">
            <button className="py-2 px-4 rounded-sm cursor-pointer bg-purple-400 text-purple-0 max-md:text-3xl hover:bg-purple-600 transition-all">
              Get Started
            </button>
            <img
              src={profile}
              alt="Profile avatar image"
              className="max-md:w-12 max-md:h-12"
            />
          </div>
        </div>

        <div className="hidden max-md:block">
          <button
            onClick={clickHandler}
            type="button"
            aria-label="Toggle menu"
            className="relative group"
          >
            <div className="relative flex items-center justify-center rounded-full w-12 h-12 transform transition-all bg-purple-700 ring-0 ring-gray-300 duration-200 shadow-md cursor-pointer">
              <div
                className={`flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45" : ""
                }`}
              >
                <div
                  className={`bg-white rounded transform transition-all duration-300 origin-right delay-75 ${
                    isOpen
                      ? "h-px w-1/2 -rotate-90 -translate-y-px"
                      : "h-0.5 w-1/2"
                  }`}
                />

                <div className="bg-white h-px rounded" />

                <div
                  className={`bg-white rounded self-end transform transition-all duration-300 origin-left delay-75 ${
                    isOpen
                      ? "h-px w-1/2 -rotate-90 translate-y-px"
                      : "h-0.5 w-1/2"
                  }`}
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
