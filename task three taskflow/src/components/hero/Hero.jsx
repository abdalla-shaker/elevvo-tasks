import HighMomentum from "./HighMomentum.jsx";
import AppScreen from "./AppScreen.jsx";
import SocialProof from "./SocialProof.jsx";

import rightArrow from "../../../images/right-arrow-Icon.svg";
import watchIcon from "../../../images/watch-icon.svg";
import correctIcon from "../../../images/correct-icon.svg";

const Hero = () => {
  return (
    <section
      className="py-28 text-center relative container mx-auto px-8"
      id="hero"
    >
      <div className="bg-linear-to-b from-purple-200 via-blue-200 to-purple-50 blur-3xl opacity-20 h-1/2 absolute top-0 left-0 w-full -z-10"></div>
      <header className="flex items-center gap-2 py-1 px-4 bg-purple-50 w-fit rounded-2xl shadow-md mx-auto mb-6 hover:bg-purple-100 transition-all">
        <HighMomentum />
      </header>
      <h1 className="text-7xl font-extrabold mb-6 max-md:text-5xl max-w-7xl mx-auto">
        Organize your work,{" "}
        <span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
          flow through your day.
        </span>
      </h1>
      <p className="text-lg max-w-2xl m-auto pt-6 mb-12">
        TaskFlow helps individuals and teams organize, prioritize, and
        accomplish tasks effortlessly. Eliminate friction and enter your optimal
        flow state.
      </p>
      <div className="flex gap-4 items-center justify-center mb-8">
        <button className="flex gap-4 items-center px-8 py-3.5 bg-purple-400 rounded-md text-purple-0 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:bg-purple-500 transition-all max-sm:text-xs max-sm:px-4 max-sm:py-4 max-sm:gap-1">
          Start for Free <img src={rightArrow} aria-hidden="true" />
        </button>
        <button className="flex gap-4 items-center px-8 py-3.5 bg-natural-0 rounded-md text-purple-800 font-bold cursor-pointer hover:bg-natural-50 transition-all max-sm:text-xs max-sm:px-4 max-sm:py-4 max-sm:gap-1">
          <img src={watchIcon} aria-hidden="true" /> Watch Demo{" "}
          <span className="font-light text-gray-400">2 min</span>
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="flex gap-1 items-center">
          <img src={correctIcon} alt="correct icon" />
          <p>No credit card required</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={correctIcon} alt="correct icon" />
          <p>Free 14-day Pro trial</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={correctIcon} alt="correct icon" />
          <p>SOC-2 Type II Certified</p>
        </div>
      </div>
      <AppScreen />
      <SocialProof />
    </section>
  );
};

export default Hero;
