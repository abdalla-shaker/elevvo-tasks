import vectorIcon from "../../../images/vector-icon.svg";
import nexusIcon from "../../../images/nexus-icon.svg";
import kinesisIcon from "../../../images/kinesis-icon.svg";
import syncroIcon from "../../../images/syncro-icon.svg";

const SocialProof = () => {
  return (
    <div className="mt-8">
      <p className="text-center font-semibold text-xs text-gray-400 mb-6">
        TRUSTED BY HIGH-IMPACT TEAMS AT
      </p>
      <ul className="flex justify-center items-center gap-x-14 flex-wrap gap-y-5">
        <li className="flex items-center gap-4">
          <img src={vectorIcon} alt="Vector company icon" />
          <p>VECTOR</p>
        </li>
        <li className="flex items-center gap-4">
          <img src={nexusIcon} alt="Nexus company icon" />
          <p>NEXUS</p>
        </li>
        <li className="flex items-center gap-4">
          <img src={kinesisIcon} alt="Kinesis company icon" />
          <p>KINESIS</p>
        </li>
        <li className="flex items-center gap-4">
          <img src={syncroIcon} alt="Syncro company icon" />
          <p>SYNCRO</p>
        </li>
      </ul>
    </div>
  );
};

export default SocialProof;
