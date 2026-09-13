import correctIcon from "../../../images/normal-correct-icon.svg";
import circleCorrectIcon from "../../../images/correct-icon.svg";
import xIcon from "../../../images/x-icon.svg";
import wavyIcon from "../../../images/wavy-correct-icon.svg";

const Pricing = () => {
  return (
    <section className="container mx-auto p-10 text-center" id="pricing">
      <span className="font-bold text-purple-600 tracking-wide py-1 px-3 bg-purple-300/20 rounded-4xl inline-block mb-4">
        TRANSPARENT PLANS
      </span>
      <h2 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p className="text-lg text-gray-500 max-w-xl mx-auto">
        Choose the plan that fits your velocity. Upgrade, downgrade, or cancel
        anytime with zero friction.
      </p>

      <ul className="my-20 grid grid-cols-3 gap-9 max-2xl:grid-cols-2 max-md:grid-cols-1 text-left">
        <li className="p-8 bg-purple-0 rounded-2xl hover:shadow-lg transition-all">
          <article className="flex flex-col justify-between gap-y-20">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">Free</h3>
                <p className="bg-purple-50/50 py-1 px-2.5 rounded-sm font-semibold">
                  starter
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Essential task management for personal daily focus.
              </p>

              <p className="text-sm text-gray-500 mt-6">
                <span className="text-4xl font-extrabold text-purple-900">
                  $0
                </span>
                /month
              </p>

              <ul className="mt-8 flex flex-col gap-3.5">
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Up to 5 Projects
                </li>
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Basic Task Board
                </li>
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Mobile App Access
                </li>
                <li className="flex gap-3.5">
                  <img src={xIcon} alt="correct icon" />
                  Smart Reminders
                </li>
                <li className="flex gap-3.5">
                  <img src={xIcon} alt="correct icon" />
                  Team Collaboration
                </li>
              </ul>
            </div>

            <button className="px-8 py-3.5 bg-purple-50/50 rounded-md text-purple-800 font-bold hover:bg-purple-50 cursor-pointer transition-all">
              Get Started
            </button>
          </article>
        </li>

        <li className="p-8 bg-purple-0 rounded-2xl border-4 border-purple-600 relative shadow-2xl max-2xl:translate-0 -translate-y-5">
          <article className="flex flex-col justify-between gap-y-20">
            <span className="text-purple-50 text-xs font-bold tracking-widest py-1 px-3 bg-purple-500 rounded-2xl absolute top-0 left-1/2 -translate-1/2">
              MOST POPULAR
            </span>
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">Pro</h3>
                <p className="bg-purple-100 text-purple-600 py-1 px-2.5 rounded-sm font-bold">
                  High Velocity
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Maximum throughput for power users and solo pros.
              </p>

              <p className="text-sm text-gray-500 mt-6">
                <span className="text-4xl font-extrabold text-purple-900">
                  $9
                </span>
                /month
              </p>

              <ul className="mt-8 flex flex-col gap-3.5">
                <li className="flex gap-3.5">
                  <img src={circleCorrectIcon} alt="correct icon" />
                  Unlimited Projects
                </li>
                <li className="flex gap-3.5">
                  <img src={circleCorrectIcon} alt="correct icon" />
                  Smart Reminders & Snooze
                </li>
                <li className="flex gap-3.5">
                  <img src={circleCorrectIcon} alt="correct icon" />
                  Calendar Integration (Google/Outlook)
                </li>
                <li className="flex gap-3.5">
                  <img src={circleCorrectIcon} alt="correct icon" />
                  Priority Customer Support
                </li>
                <li className="flex gap-3.5">
                  <img src={circleCorrectIcon} alt="correct icon" />
                  Custom Kanban Swimlanes
                </li>
              </ul>
            </div>

            <button className="px-8 py-3.5 bg-purple-400 hover:bg-purple-600 rounded-md text-purple-50 font-bold cursor-pointer transition-all">
              Start 14-Day Free Trial
            </button>
          </article>
        </li>

        <li className="p-8 bg-purple-0 rounded-2xl hover:shadow-lg transition-all">
          <article className="flex flex-col justify-between gap-y-20">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">Team</h3>
                <p className="bg-blue-50 py-1 px-2.5 rounded-sm font-semibold text-blue-800">
                  Scale
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Complete governance and collaboration for modern squads.
              </p>

              <p className="text-sm text-gray-500 mt-6">
                <span className="text-4xl font-extrabold text-purple-900">
                  $19
                </span>
                /month
              </p>

              <ul className="mt-8 flex flex-col gap-3.5">
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Everything in Pro
                </li>
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Shared Workspaces
                </li>
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Team Velocity Analytics
                </li>
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Admin Controls & Permissions
                </li>
                <li className="flex gap-3.5">
                  <img src={correctIcon} alt="correct icon" />
                  Dedicated Success Manager
                </li>
              </ul>
            </div>

            <button className="px-8 py-3.5 bg-purple-50/50 rounded-md text-purple-800 font-bold hover:bg-purple-50 cursor-pointer transition-all">
              Contact Sales
            </button>
          </article>
        </li>
      </ul>

      <p className="flex items-center justify-center gap-3">
        <img src={wavyIcon} alt="wavy icon" /> 30-day no-questions-asked refund
        policy on all paid plans.
      </p>
    </section>
  );
};

export default Pricing;
