import lightningIcon from "../../../images/lightning-icon.svg";
import recycleIcon from "../../../images/recycle-icon.svg";
import workflowImage from "../../../images/workflow-image.png";

const Workflow = () => {
  return (
    <section className="container mx-auto py-10 grid grid-cols-2 max-lg:grid-cols-1 items-center justify-items-end gap-6 px-6">
      <div>
        <span className="text-purple-500 text-xs font-bold tracking-widest">
          BUILT FOR DEEP WORK
        </span>
        <h2 className="my-4 text-5xl font-bold leading-16">
          Stop switching context. Everything in one unified view.
        </h2>

        <p className="text-gray-500 mb-6 leading-6">
          Traditional task managers overwhelm you with endless nested folders
          and cluttered forms. TaskFlow uses clean keyboard shortcuts and
          tactile inline editing so your thoughts flow straight to execution.
        </p>

        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <img src={lightningIcon} alt="Lightning icon" />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Lightning-Fast Hotkeys</h3>
              <p className="text-sm text-gray-500">
                Press{" "}
                <span className="inline-block p-2 bg-blue-50 font-bold rounded-2xl">
                  C
                </span>{" "}
                to create,{" "}
                <span className="inline-block p-2 bg-blue-50 font-bold rounded-2xl">
                  E
                </span>{" "}
                to edit, and{" "}
                <span className="inline-block p-2 bg-blue-50 font-bold rounded-2xl">
                  /
                </span>{" "}
                to command.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <img src={recycleIcon} alt="recycle icon" />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Universal Offline Mode</h3>
              <p className="text-sm text-gray-500">
                Work on flights or subway commutes without Wi-Fi. Syncs
                seamlessly the instant you reconnect.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <img
        src={workflowImage}
        alt="A laptop image with the application working on the screen"
      />
    </section>
  );
};

export default Workflow;
