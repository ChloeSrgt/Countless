import GamerScore from "@components/GamerScore";
import Replay from "@components/Replay";
import Victory from "@components/Victory";

export default function Congrat() {
  return (
    <div>
      <Victory />
      <GamerScore />
      <Replay />
    </div>
  );
}
