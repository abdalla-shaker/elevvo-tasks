import Card from "./Card";

import taskIcon from "../../../images/completed-icon.svg";
import bellIcon from "../../../images/bell-icon.svg";
import seamlessIcon from "../../../images/seamless-icon.svg";
import clockIcon from "../../../images/clock-icon.svg";
import userImage from "../../../images/user-image.svg";

// bg-${color}-200/30
// text-${textColor}-600

const Cards = () => {
  return (
    <ul className="mt-14 grid grid-cols-3 gap-9 max-2xl:grid-cols-2 max-md:grid-cols-1 px-6">
      <Card
        backgroundColor="bg-purple-200/30"
        textColor="text-purple-600"
        description="Categorize, tag, and prioritize your daily tasks with intuitive
          drag-and-drop boards, multi-dimensional filtering, and automatic task
          sorting."
        imageSrc={taskIcon}
        subTitle="INTUITIVE ORGANIZATION"
        title="Smart Task Management"
      >
        <div className="flex justify-between flex-col gap-3">
          <div className="flex justify-between">
            <h4 className="text-xs font-bold">Prioritization Matrix</h4>
            <p className="text-purple-600 font-semibold text-xs">
              P1 • Critical
            </p>
          </div>

          <div className="flex items-center gap-4 p-2 rounded-sm bg-purple-0">
            <span className="w-2 h-2 rounded-full bg-orange-700"></span>
            <p className="text-xs font-medium">Security Certificate Renewal</p>
          </div>

          <div className="flex items-center gap-4 p-2 rounded-sm bg-purple-0">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <p className="text-xs font-medium">Prepare Sprint Retrospective</p>
          </div>
        </div>
      </Card>

      <Card
        backgroundColor="bg-blue-200/30"
        textColor="text-blue-600"
        description="Never miss a deadline with automated
          notifications synced across all your
          devices, contextual snooze alerts, and
          calendar timezone adaptation."
        imageSrc={bellIcon}
        subTitle="TIME AWARENESS"
        title="Intelligent Reminders"
      >
        <div className="flex justify-between flex-col gap-3">
          <div className="flex justify-between">
            <h4 className="text-xs font-bold">Active Notification</h4>
            <p className="text-blue-600 font-semibold text-xs">
              Synced across 3 devices
            </p>
          </div>

          <div className="flex items-center justify-between p-2 rounded-sm bg-purple-0">
            <div className="flex items-center gap-4">
              <img src={clockIcon} alt="CLock icon" />
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold">Client Presentation Review</p>
                <p className="text-[11px]">Triggering in 15 minutes</p>
              </div>
            </div>
            <button className="py-2 px-2 bg-purple-50 text-[10px] font-bold">
              Snooze
            </button>
          </div>
        </div>
      </Card>

      <Card
        backgroundColor="bg-orange-200/30"
        textColor="text-orange-600"
        description="Share lists, delegate tasks, and chat
          with team members in real-time with
          multi-cursor live editing, instant
          mentions, and audit trails."
        imageSrc={seamlessIcon}
        subTitle="TEAM SYNERGY"
        title="Seamless Collaboration"
      >
        <div className="flex justify-between flex-col gap-3">
          <div className="flex justify-between">
            <h4 className="text-xs font-bold">Live Activity</h4>
            <p className="text-orange-600 font-semibold text-xs">Active now</p>
          </div>

          <div className="flex items-center justify-between p-2 rounded-sm bg-purple-0">
            <div className="flex items-center gap-4">
              <img src={userImage} alt="User image" />
              <p className="text-xs font-semibold">
                Sarah moved task to Completed
              </p>
            </div>
            <p className="text-gray-400 text-[10px]">Just now</p>
          </div>
        </div>
      </Card>
    </ul>
  );
};

export default Cards;
